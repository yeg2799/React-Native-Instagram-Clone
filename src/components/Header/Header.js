import React, {Component} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import Logo from '../../assets/logo/instagram-text.svg';
import NewPost from '../../assets/icons/new_post.svg';
import Like from '../../assets/icons/like.svg';
import Messenger from '../../assets/icons/messenger.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  rightPart: {
    display: 'flex',
    flexDirection: 'row',
  },
  tinyLogo: {
    width: 250,
    height: 75,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const Header = () => {
  const goToPage = page => {
    Actions.likes();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Logo width="100px" height="50px" />
        <View style={styles.rightPart}>
          <TouchableOpacity style={{marginRight: 10}}>
            <NewPost width="30px" height="30px" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 10}} onPress={goToPage}>
            <Like width="30px" height="30px" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Messenger width="30px" height="30px" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Header;
