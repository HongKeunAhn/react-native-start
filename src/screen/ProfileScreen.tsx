import * as React from 'react';
import { Text } from 'react-native';

const ProfileScreen = ({ route }: any) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen;
