import React, { Component, PropTypes } from 'react';
import { AsyncStorage } from 'react-native';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import { connect } from 'react-redux';

class LoginScreen extends Component {

	async componentDidMount(){
		try {
			let token = await AsyncStorage.getItem('@MyCV:token');
			if(token != null){			
				fetch(this.props.href + '/api/token', {
					method: 'POST',
					headers: {
					  'Accept': 'application/json',
					  'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						token: token
					})
				})
				.then(response => response.json())
				.then(resJson => {
					if(resJson.success){
						if(resJson.hasdata){
							this.props.dispatch({type:"UpdateUsername",username:resJson.data.username});
							this.props.navigation.navigate("Home");
						}
					}
				})
				.catch(error => alert(error));
			}		
		} catch (error) {
			alert(error);
		}
	}

	render() {
		return (
			<Wallpaper>
				<Logo />
				<Form />			
				<SignupSection/>
				<ButtonSubmit navigation = {this.props.navigation}/>
			</Wallpaper>
		);
	}
}

function mapStateToProps(state){
	return {
		href: state.href,
		username: state.username,
	}
}

export default connect(mapStateToProps)(LoginScreen)
