import React from "react";
import "@styles/styles.css";
import { Box, Pagination } from "@mui/material";
const CustomTableFooter = (props) => {
  const { count, rowsPerPage, page, changePage, changeRowsPerPage } = props;

  const handlePageChange = (_, page) => {
    changePage(page > 0 ? page - 1 : page);
  };
  return (
    <Box display={"flex"} mt={4} justifyContent={"center"}>
      <Pagination
        variant="text"
        page={page + 1}
        onChange={handlePageChange}
        count={Math.ceil(count / rowsPerPage)}
        boundaryCount={3}
      />
    </Box>
  );
};

export default CustomTableFooter;
