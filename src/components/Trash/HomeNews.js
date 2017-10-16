import React, { Component } from 'react';
import { } from 'react-native';
import { StackNavigator } from 'react-navigation';
import NewsScreen from './NewsScreen';
import LocationScreen from './LocationScreen';
import LaguageScreen from './LanguageScreen';
import JobScreen from './JobScreen';

export default class HomeNews extends Component {
    render() {
        return (
            <StackHome/>
        );
    }
}

export const StackHome = StackNavigator({
    News: { 
        screen: NewsScreen,
        navigationOptions:{
            header:null
        } 
     },
    Location: { 
        screen: LocationScreen,
        navigationOptions:{
            title:"Location"
        } 
    },
    Language: { 
        screen: LaguageScreen,
        navigationOptions:{
            title:"Language"
        } 
    },
    Job: {
        screen: JobScreen,
    }
})
