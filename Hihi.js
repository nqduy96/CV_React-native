import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TabNavigator, DrawerNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

export default class Hihi extends Component {
    state = {  }
    render() {
        return (
            <MM></MM>
        );
    }
}

class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('AfterLogin') }>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Text>Profile</Text>
            </View>
        );
    }
}

class Red extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <Text>RedTag</Text>
            </View>
        );
    }
}

class Blue extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Text>Blue</Text>
            </View>
        );
    }
}

class RedLocation extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Location</Text>
            </View>
        );
    }
}

class RedTag extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Text>Tag</Text>
            </View>
        );
    }
}

const RedStack = StackNavigator({
    Red: {
        screen: Red,
        navigationOptions: {
        }
    },
    RedTag: {
        screen: RedTag
    },
    RedLocation: {
        screen: RedLocation
    },
}, {
    header: null
});

const PageTab = TabNavigator({
    RedStack: {
        screen: RedStack
    },
    Blue: {
        screen: Blue
    }
}, {
    tabBarPosition: TabBarBottom
})

const AfterLogin = DrawerNavigator({
    PageTab: {
        screen: PageTab
    },
    Profile: {
        screen: Profile
    }
});

const MM = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    AfterLogin: {
        screen: AfterLogin,
        navigationOptions: ({navigation}) => ({
            headerLeft: (
                <TouchableOpacity onPress={ () => navigation.navigate('DrawerOpen') }>
                    <Text>Menu</Text>
                </TouchableOpacity>
            )
        })
    }
}, {
    
});

