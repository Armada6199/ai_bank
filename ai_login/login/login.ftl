<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login Page</title>
    <style>
        :root {
            --primary: #96c11f;
            --secondary: #162645;
            --backgroundMain: #f3f3f3;
        }

        body {
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100vh;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            color: var(--secondary);
        }

        .main_container {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--backgroundMain);
        }

        .center_container {
            display: flex;
            width: 95%;
            height: 95%;
            justify-content: center;
            align-items: center;
            gap: 50px;
        }

        .form_inputs {
            display: flex;
            flex-direction: column;
            gap: 40px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form_container {
            width: 55%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 100px;
        }

        .form-group label {
            font-size: 20px;
        }

        form input {
            width: 100%;
            height: 40px;
        }

        form button {
            background-color: var(--primary);
            width: 30%;
            border-radius: 15px;
            border: none;
            align-self: flex-end;
            height: 45px;
            font-weight: 600;
            font-size: 25px;
            cursor: pointer;
        }

        form h1 ::after {
            content: "";
            display: block;
            height: 10px;
            width: 60%;
            background-color: var(--primary);
        }

        .image_container {
            position: relative;
            width: 40%;
            display: flex;
            justify-content: center;
            border: none;
        }

        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.8);
            border-bottom-right-radius: 200px;
            border: none;
        }

        .background_container {
            background-image: url(${url.resourcesPath}/assets/cityLogin.png);
            width: 100%;
            height: 90vh;
            background-size: cover;
            background-repeat: no-repeat;
            border-bottom-right-radius: 200px;
            padding: 20px;
        }

        .background_content {
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        .background_content h1 {
            z-index: 1;
            font-size: 72px;
        }

        .background_content h2 {
            z-index: 1;
            font-size: 24px;
        }

        .background_content img {
            z-index: 1;
            align-self: flex-start;
        }

        .clipped {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: var(--primary);
            width: 90px;
            height: 90px;
            clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        }
    </style>
</head>

<body>
    <div class="main_container">
        <div class="center_container">
            <div class="form_container">
                <div>
                    <img src="${url.resourcesPath}/assets/banklogo.png" alt="bank logo" />
                </div>
                <div>
                    <form method="post" novalidate>
                        <h1>Login</h1>
                        <h3>Login with username and password</h3>
                        <div class="form_inputs">
                            <div class="form-group">
                                <label for="username">Enter your username</label>
                                <input type="text" id="username" name="username" required />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <div class="form-group">
                                <button type="submit">Login</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div class="image_container">
                <div class="background_container">
                    <div class="background_content">
                        <img src="${url.resourcesPath}/assets/bankShaped.png" alt="logo" />
                        <h1>Welcome To <span style="color:var(--primary)">ai</span>Bank <span
                                style="color:var(--primary);">Corporate</span> Internet
                            Banking</h1>
                        <h2>
                            Manage day-to-day business banking needs from one central
                            location.
                        </h2>
                    </div>
                </div>
                <div class="overlay"></div>
                <div class="clipped"></div>
            </div>
        </div>
    </div>
</body>

</html>