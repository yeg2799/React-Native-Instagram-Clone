import React, {Component} from 'react';
import {
  Assets,
  Colors,
  Typography,
  View,
  Drawer,
  Text,
  Button,
  Avatar,
  Badge,
} from 'react-native-ui-lib'; //eslint-disable-line

const Deneme = () => {
  return (
    <Drawer
      rightItems={[
        {
          text: 'Read',
          background: Colors.blue30,
          onPress: () => console.log('read pressed'),
        },
      ]}
      leftItem={{
        text: 'Delete',
        background: Colors.red30,
        onPress: () => console.log('delete pressed'),
      }}>
      <View
        centerV
        padding-s4
        bg-white
        style={{
          height: 60,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Avatar
          source={{
            uri: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1653690006~exp=1653690606~hmac=5197e157b20871b5cc2d65a3ca3cbde090bb7eae43d2d52d5e3e829e8ca3cceb&w=1380',
          }}
          label="avatar"
        />
        <Text text70>Messages</Text>
      </View>
    </Drawer>
  );
};
export default Deneme;
