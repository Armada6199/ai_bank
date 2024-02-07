const ldap = require("ldapjs");

const client = ldap.createClient({
  url: process.env.LDAP_URI,
  timeout: "2000",
  reconnect: true,
});
export async function authenticateUser(username, password) {
  try {
    return await new Promise((resolve, reject) => {
      client.bind(`uid=${username},ou=admins,ou=system`, password, (error) => {
        if (error) {
          reject({ msg: "Invalid Credintials", code: 401 });
        } else {
          resolve({
            code: 200,
            msg: "Login Successful",
          });
        }
      });
    });
  } catch (error) {
    throw new Error(error);
  }
}
export async function handleSearchUser(email) {
  let user;

  const opts = {
    filter: `(uid=${email})`,
    scope: "sub",
    attributes: ["uid"],
  };
  return await new Promise((resolve, reject) => {
    client.search(`ou=admins,ou=system`, opts, (err, res) => {
      if (err) {
        console.log(err);
        return reject({ message: err, code: 500 });
      } else {
        res.on("searchEntry", (entry) => {
          user = JSON.stringify(entry.pojo);
        });

        res.on("error", (err) => {
          console.error("error: " + err.message);
        });
        res.on("end", (result) => {
          if (user) {
            resolve({
              code: 200,
              userData: JSON.parse(user).attributes,
              msg: "Login Successful",
            });
          } else reject({ msg: "User not found", code: 401 });
        });
      }
    });
  });
}
export async function handleCreatUser(userInfo) {
  const { email, accountName, userType } = userInfo;
  const name = accountName.split(" ");
  const cn = name[0];
  const sn = name[1] || "";

  const entry = {
    uid: name.join(""),
    cn: cn,
    sn: sn,
    objectclass: "inetOrgPerson",
  };
  return await new Promise((resolve, reject) => {
    client.add(`uid=${cn + sn},ou=${userType},ou=system`, entry, (err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve({ message: "account created", code: 200 });
      }
    });
  });
}
