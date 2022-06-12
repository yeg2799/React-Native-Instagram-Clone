import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';
import {Avatar} from 'react-native-ui-lib';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  avatar: {
    padding: 50,
  },
});

const Story = () => {
  const objects = [
    'one',
    'two',
    'one',
    'two',
    'one',
    'two',
    'one',
    'two',
    'one',
    'two',
    'one',
    'two',
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.avatarWrapper}>
          {objects.map(function (object, i) {
            return (
              <Avatar
                source={{
                  uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg',
                }}
                label="avatar"
                padding-r4
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Story;
