import React from 'react';
import {TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Drawer from '../components/drawer';
import Header from '../components/Header/Header';

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <TouchableOpacity style={{margin: 10, marginTop: 50}} onPress={goToAbout}>
        <Text>This is Home!</Text>
      </TouchableOpacity>
      <Drawer />
    </SafeAreaView>
  );
};
export default Home;
