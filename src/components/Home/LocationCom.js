import React, { Component } from 'react';
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class LocationCom extends Component{
    getTextStyle(statusName){
        const { filterLocation } = this.props;
        if(statusName === filterLocation)   return { color:'yellow' , fontWeight:'bold'};
        return style.buttonText
    }

    render(){
        const{thanhpho} = this.props.myLocation;
        return(
            <TouchableOpacity onPress={()=> {
                    this.props.dispatch({type:"SelectLocation",filterLocation:thanhpho});
                }
            }>
                <View style={{ backgroundColor:'#D2DEF6',padding:10,margin:10 }}>
                    <Text style={ this.getTextStyle(thanhpho) } >{thanhpho}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state){
    return{
        href: state.href,
        filterLocation: state.filterLocation,
    }
}

export default connect(mapStateToProps)(LocationCom);

const style = StyleSheet.create({
    buttonText:{
        color:'black'
    }
});