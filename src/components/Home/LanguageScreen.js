import React, { Component } from 'react';
import { View,FlatList } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import LanguageCom from './LanguageCom';

class LanguageScreen extends Component{
    componentWillMount(){
        fetch(this.props.href + '/api/language', {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			},
        })
        .then(response => response.json())
        .then(resJson => {
            this.props.dispatch({type:"UpdateLanguage", languages:resJson});
        })
        .catch(error => alert(error));
    }
    
    render(){
        return(
            <View>
                <LanguageCom myLanguage={LanguageDefault[0]}/>  

                <FlatList
                    data={this.props.languages}
                    renderItem = {({ item }) => <LanguageCom myLanguage={item} />}
                    keyExtractor = {item => item.id}
                />
            </View>
        )
    }
}

var LanguageDefault = [{
    language:'Show All'
}];

function mapStateToProps(state){
    return{
        href: state.href,
        languages: state.languages,
    }
}

export default connect(mapStateToProps)(LanguageScreen);