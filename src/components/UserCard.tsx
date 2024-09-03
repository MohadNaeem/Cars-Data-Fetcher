import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface UserCardProps {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

const UserCard: React.FC<UserCardProps> = ({ id, name, avatar, email }) => {
  return (
    <Card>
      <CardContent>
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          style={{ borderRadius: "50%", width: 50, height: 50 }}
        />
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{email}</Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
