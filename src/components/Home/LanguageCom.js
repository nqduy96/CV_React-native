import React, { Component } from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class LanguageCom extends Component{
    getTextStyle(statusName){
        const { filterLanguage } = this.props;
        if(statusName === filterLanguage)   return { color:'yellow' , fontWeight:'bold'};
        return style.buttonText
    }
    
    render(){
        const{language} = this.props.myLanguage;
        return(
            <TouchableOpacity onPress={()=> {
                    this.props.dispatch({type:"SelectLanguage",filterLanguage:language});
                }
            }>
                <View style={{ backgroundColor:'#D2DEF6',padding:10,margin:10 }}>
                    <Text style={ this.getTextStyle(language) } >{language}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state){
    return{
        href: state.href,
        filterLanguage: state.filterLanguage,
    }
}

export default connect(mapStateToProps)(LanguageCom);

const style = StyleSheet.create({
    buttonText:{
        color:'black'
    }
});