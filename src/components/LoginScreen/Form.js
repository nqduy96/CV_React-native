import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,
	Text
} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import eyeImg  from '../../images/eye_black.png';

import { connect } from 'react-redux';

class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
	};
		
	this.showPass = this.showPass.bind(this);
	}

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

	render() {
		return (
				<KeyboardAvoidingView behavior='padding'
					style={styles.container}>
					<UserInput source={usernameImg}
						placeholder='Username'
						autoCapitalize={'none'}
						returnKeyType={'done'}
						autoCorrect={false} 
						value={this.props.username}
						onChangeText = {(text)=>{
							this.props.dispatch({type:"UpdateUsername", username:text});
						}}
						/>
					<UserInput source={passwordImg}
						secureTextEntry={this.state.showPass}
						placeholder="Password"
						returnKeyType={'done'}
						autoCapitalize={'none'}
						autoCorrect={false} 
						value={this.props.password}
						onChangeText = {(text)=>{
							this.props.dispatch({type:"UpdatePassword", password:text});
						}}
						/>

						<TouchableOpacity
							activeOpacity={0.7}
							style={styles.btnEye}
							onPress={this.showPass}
						>
							<Image source={eyeImg} style={styles.iconEye} />
						</TouchableOpacity>
				</KeyboardAvoidingView>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

function mapStateToProps(state){
	return {
		username: state.username,
		password: state.password
	};
}

export default connect(mapStateToProps)(Form);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
