import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  totalUsers: number;
  usersPerPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalUsers,
  usersPerPage,
  setCurrentPage,
}) => {
  const pageCount = Math.ceil(totalUsers / usersPerPage);

  return (
    <MuiPagination
      count={pageCount}
      page={currentPage}
      onChange={(e, page) => setCurrentPage(page)}
      color="primary"
      shape="rounded"
    />
  );
};

export default Pagination;
