import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { DrawerItems } from 'react-navigation';
import MenuSide from './MenuSide';
import ProfileScreen from '../Profile/ProfileScreen';

export default class HomeScreen extends Component {
    render(){
        return(
            <Drawer/>
        );
    }
}

const CustomDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <View style={{ height: 100, backgroundColor: 'yellow' }}>
        
    </View>
    <DrawerItems {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Drawer = DrawerNavigator({
    MenuSide: {
        screen: MenuSide
    },
    Profile: {
        screen: ProfileScreen
    },   
});



