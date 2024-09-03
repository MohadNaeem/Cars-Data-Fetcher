import React from "react";
import { useFetchUsers } from "../hooks/useFetchUsers";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import { Container, Typography, Box, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "./UsersPage.module.css";

const UsersPage: React.FC = () => {
  const {
    users,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalUsers,
  } = useFetchUsers();

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container className={styles.container}>
      <Box className={styles.toolbar}>
        <Box className={styles.toolbarContent}>
          <Box className={styles.searchBarContainer}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <IconButton className={styles.iconButton}>
              <FilterListIcon />
            </IconButton>
            <IconButton className={styles.iconButton}>
              <SettingsIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <UserTable users={users} />
      <Box className={styles.paginationContainer}>
        <Pagination
          currentPage={currentPage}
          totalUsers={totalUsers}
          usersPerPage={15}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </Container>
  );
};

export default UsersPage;
