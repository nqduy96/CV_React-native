import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../LoginScreen/LoginScreen';
import HomeScreen from '../Home/HomeScreen';

export default class AppScreen  extends Component {
    render() {
        return (
            <StackApp/>
        );
    }
}

const StackApp = StackNavigator({
    Login: { screen: LoginScreen, 
        navigationOptions:{
            header:null
        } 
    },
    Home: { screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: (
                <TouchableOpacity onPress={ () => {navigation.navigate('DrawerOpen') }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            )
        })
    },
});

