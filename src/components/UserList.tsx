import React from "react";
import UserCard from "./UserCard";
import { Grid } from "@mui/material";

interface User {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item key={user.id} xs={12} sm={6} md={4}>
          <UserCard
            id={user.id}
            name={user.name}
            avatar={user.avatar}
            email={user.email}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
