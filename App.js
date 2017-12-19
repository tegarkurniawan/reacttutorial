import React, { Component } from 'react';
import { View, Dimensions, Image } from 'react-native';
import SideBar from './component/Sidebar';
import HomePage from './page/Home';
import LoginPage from './page/Login';
import CoursePage from './page/Course';
import { DrawerNavigator, StackNavigator } from "react-navigation";
const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomePage },
    Login: { screen: LoginPage },
  },
  {
    initialRouteName: 'Home',
    contentComponent: SideBar
  }
);
const App = StackNavigator({
  DrawerNavigation: { screen: HomeScreenRouter },
  Course: { screen: CoursePage },
});
export default App;


