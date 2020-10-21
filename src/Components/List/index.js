import React from "react";

//import Avatar from "../../assets/avatar-admin.png";

import { Container, InfoUser, ImageUser } from "./style";

const List = ({ name, email, phone, profile_url, status }) => {
  return (
    <Container>
      <ImageUser src={profile_url} />
      <InfoUser>{name}</InfoUser>
      <InfoUser>{email}</InfoUser>
      <InfoUser>{phone}</InfoUser>
      <InfoUser>{status}</InfoUser>
    </Container>
  );
};

export default List;
