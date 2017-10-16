import React, { Component } from 'react';
import { View,Image,Text,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Smile from '../../images/smile.png';

export default class JobScreen  extends Component {
    render() {
        const { myJob } = this.props.navigation.state.params;
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <Image
                    style={{flex:4}}
                    source={{uri:myJob.company_logo}}
                />
                <View style={{flex:6,padding:20}}>
                    <Text style={{ fontWeight: 'bold',fontSize:20,color:'black' }}>{myJob.title}</Text>
                    <Text>{myJob.location}</Text>
                    <View
                        style={{
                            marginTop:10,
                            marginBottom:10,
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                    <Text>{myJob.description}</Text>
                    
                </View>
                <View style={{flex:1,backgroundColor:'green',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <Image
                                style={{width: 24,height: 24,alignSelf:'center',marginRight:10}}
                                source= {Smile} />
                            <Text style={{fontSize:20,color:'white'}}>  
                                Apply 
                            </Text>
                            </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
