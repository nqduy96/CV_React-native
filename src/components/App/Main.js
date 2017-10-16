import React, { Component } from 'react';
import { TouchableOpacity,Text } from 'react-native';
import { StackNavigator,DrawerNavigator,TabNavigator } from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import LoginScreen from '../LoginScreen/LoginScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import MyJobScreen from '../MyJob/MyJobScreen';
import NotifyScreen from '../Notify/NotifyScreen';
import NewsScreen from '../Home/NewsScreen';
import LocationScreen from '../Home/LocationScreen';
import LaguageScreen from '../Home/LanguageScreen';
import JobScreen from '../Home/JobScreen';



const defaultState = {
	href:"http://192.168.1.2:8000",
	username:"", 
	password:"",
	jobs:[],
	locations:[],
	languages:[],
	filterLocation:"Show All",
	filterLanguage:"Show All"
};

const reducer = (state = defaultState, action)=> {
	if(action.type === "UpdateUsername") return {...state,username:action.username};
	if(action.type === "UpdatePassword") return {...state,password:action.password};
	if(action.type === "UpdateJob") return {...state,jobs:action.jobs};
	if(action.type === "UpdateLocation") return {...state,locations:action.locations};
	if(action.type === "UpdateLanguage") return {...state,languages:action.languages}
	if(action.type === "SelectLocation") return {...state,filterLocation:action.filterLocation}
	if(action.type === "SelectLanguage") return {...state,filterLanguage:action.filterLanguage}
	return state;
};

const store = createStore(reducer);
/*  Cau Truc App
    Stack {
        Login:
        Home:{
            HomeDrawer{
                HomeTabbar:{
                    HomeStack:{
                        NewsScreen:
                        LocationScreen:
                        LaguageScreen:
                        JobScreen:
                    }
                    MyJobs:
                    Alert:
                }
                Profile:
            }
        }
    }
*/
export default class Main extends Component {
  render() {
	  return (
			<Provider store={store}>
				<StackApp/>
			</Provider>
	  );
	}
}

const HomeStack = StackNavigator({
    News: { 
        screen: NewsScreen,
        navigationOptions: ({navigation}) =>({ 
            title: 'New',
            headerLeft: (
                <TouchableOpacity onPress={ () => {navigation.navigate('DrawerOpen') }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            )
        })
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
},{
    
});

const HomeTabbar = TabNavigator({
    News:   { 
        screen: HomeStack,
        navigationOptions: ({navigation}) => ({
            header:null    
            
        })
    },
    MyJobs:  { 
        screen: MyJobScreen,
        navigationOptions: ({navigation}) =>({ 
            title: 'My Jobs',
            headerLeft: (
                <TouchableOpacity onPress={ () => {navigation.navigate('DrawerOpen') }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            )
        })
    },
    Alert:  { 
        screen: NotifyScreen,
        navigationOptions: ({navigation}) =>({ 
            title: 'Alert',
            headerLeft: (
                <TouchableOpacity onPress={ () => {navigation.navigate('DrawerOpen') }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            )
        })
    },
}, 
{
    headerMode:'screen',
    tabBarPosition:'bottom',
});

const HomeDrawer = DrawerNavigator({
	HomeTabbar:{
        screen: HomeTabbar,
        
	},
    Profile: {
        screen: ProfileScreen
    },   
},{

});

const StackApp = StackNavigator({
    Login: { screen: LoginScreen, 
        navigationOptions:{
            header:null
        } 
    },
    Home: { screen: HomeDrawer,
        
    },
},{
    
});

