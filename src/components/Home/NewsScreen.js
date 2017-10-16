import React, { Component } from 'react';
import { View,Image,TouchableOpacity,Text,FlatList } from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import { SearchBar,Icon,Button } from 'react-native-elements';
import { connect } from 'react-redux';
import ProfileScreen from '../Profile/ProfileScreen';

class NewsScreen extends Component{
    componentWillMount(){
        fetch(this.props.href + '/api/job', {
			method: 'GET',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			},
        })
        .then(response => response.json())
        .then(resJson => {
            this.props.dispatch({type:"UpdateJob", jobs:resJson});
        })
        .catch(error => alert(error));
    }

    getJobs(){
        const { filterLocation,filterLanguage, jobs } = this.props;
        let temp = jobs;
        
        if(filterLocation !== "Show All")   
            temp = temp.filter(e => (e.location === filterLocation));
        
        if(filterLanguage !== "Show All")
            temp = temp.filter(e => (e.tag === filterLanguage));
        
        return temp;
    }

    render() {
        return (
            <View style={{ flex:1 }}>
                <View style={{ backgroundColor:'white',flex:1, flexDirection:'row', alignItems:'center', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Location') }>
                        <Text>Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.props.navigation.navigate('Language') }>
                        <Text>Tag</Text>
                    </TouchableOpacity> 
                </View>
                <View style={{ flex:9 }}>
                    <FlatList
                        data= {this.getJobs()}
                        renderItem = {({ item }) => 
                            <TouchableOpacity onPress = {() => this.props.navigation.navigate('Job',{myJob:item})}>
                                <JobsCard myJob={item} />
                            </TouchableOpacity>
                        }
                        keyExtractor = {item => item.id}
                    />
                </View>
            </View>
        );
    }
}

class JobsCard extends Component{
    render(){
        const { title,tag,location,company_logo } = this.props.myJob;
        return(
            <View style={{ backgroundColor:'white',padding:10,margin:10,height:80,flexDirection:'row'}}>
                <Image
                    style={{flex:2}}
                    source={{uri:company_logo}}
                /> 
                <View style={{flex:5,paddingLeft:20}}>
                    <Text style={{ color:'black',fontWeight:'bold',flex:2 }}>{title}</Text>
                    <Text style={{ flex:1 }}>{location}</Text>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state){
    return{
        href: state.href,
        jobs: state.jobs,
        filterLocation: state.filterLocation,
        filterLanguage: state.filterLanguage,
    }
}

export default connect(mapStateToProps)(NewsScreen)