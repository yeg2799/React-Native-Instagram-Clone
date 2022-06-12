import React from 'react';
import {TouchableOpacity, Text, SafeAreaView, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Drawer from '../components/drawer';
import Header from '../components/Header/Header';
import Stories from '../components/Story/stories';

const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <ScrollView>
        <Stories />
        <TouchableOpacity style={{margin: 10}} onPress={goToAbout}>
          <Text>This is Home!</Text>
        </TouchableOpacity>
      </ScrollView>

      <Drawer />
    </SafeAreaView>
  );
};
export default Home;
