import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {t} from 'react-native-tailwindcss';

const Container = styled(View)`
  ${[t.flex1, t.bgGreen400, t.justifyCenter, t.itemsCenter]}
`;
const Title = styled(Text)`
  ${[t.textWhite, t.fontBold, t.text2xl]}
`;

const Profile = () => {
  return (
    <Container>
      <Title>Profile</Title>
    </Container>
  );
};

export default Profile;
