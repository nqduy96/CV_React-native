import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import { SearchBar,Icon,Button } from 'react-native-elements';
import HomeNews from './HomeNews';
import MyJobScreen from '../MyJob/MyJobScreen';
import NotifyScreen from '../Notify/NotifyScreen';


export default class MenuSide extends Component {
    render() {
        return (
            <View>
                <Text>asd</Text>
            </View>
        );
    }
}

export const Tabbar = TabNavigator({
    News:   { 
        screen: HomeNews,
        navigationOptions: { 
            title: 'News',
            
        }
    },
    MyJobs:  { 
        screen: MyJobScreen,
        navigationOptions: { 
            title: 'My Jobs' 
        }
    },
    Alert:  { 
        screen: NotifyScreen,
        navigationOptions: {
             title: 'Job Alerts' 
        }
    },
}, 
{
    tabBarPosition:'bottom'
});

