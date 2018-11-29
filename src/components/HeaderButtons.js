import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//styles = {styles.savebutton}
//<Button title = "erase" color = "red" onPress = {props.onPress}/>

const HeaderButtons = (props) => (

	<View style = {styles.container}>

		<View style = {styles.savebutton}>

			<Button title = "save"/>

		</View>

		<View styles = {styles.erasebutton}>

			<TouchableOpacity onPress = {props.onPress}> 

				<Icon size = {30} name = "ios-trash" color = "red" />

			</TouchableOpacity>



		</View>

	</View>

);



const styles =  StyleSheet.create({

	container:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		paddingTop:10,
		paddingLeft:20,
	},

	// erasebutton:{
	// 	width:"20%",
	// },

	// savebutton:{
	// 	width:"20%",
	// }

})

export default HeaderButtons;