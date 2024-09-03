import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  country: string;
  vehicle: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <TableContainer
      component={Paper}
      style={{ boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Image</strong>
            </TableCell>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Country</strong>
            </TableCell>
            <TableCell>
              <strong>Vehicle</strong>
            </TableCell>
            <TableCell>
              <strong>Action</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} hover>
              <TableCell>
                <Avatar
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                />
              </TableCell>
              <TableCell>{`${user.first_name} ${user.last_name}`}</TableCell>
              <TableCell>{user.country}</TableCell>
              <TableCell>{user.vehicle}</TableCell>
              <TableCell>
                <IconButton size="small" style={{ marginLeft: "10px" }}>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
