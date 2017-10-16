import React, { Component } from 'react';
import { View,Text,FlatList,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LocationCom from './LocationCom';

class LocationScreen extends Component{
    componentWillMount(){
        fetch(this.props.href + '/api/location', {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			},
        })
        .then(response => response.json())
        .then(resJson => {
            this.props.dispatch({type:"UpdateLocation", locations:resJson});
        })
        .catch(error => alert(error));
    }

    render(){
        
        return(
            <View>
                <LocationCom myLocation={LocationDefault[0]}/>

                <FlatList
                    data={this.props.locations}
                    renderItem = {({ item }) => <LocationCom myLocation={item} />}
                    keyExtractor = {item => item.id}
                />
            </View>
        );
    }
}

var LocationDefault = [{
    thanhpho:'Show All'
}];

function mapStateToProps(state){
    return{
        href: state.href,
        locations: state.locations,
    }
}

export default connect(mapStateToProps)(LocationScreen);