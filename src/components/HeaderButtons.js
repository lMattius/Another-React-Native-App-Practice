import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

//styles = {styles.savebutton}

const HeaderButtons = (props) => (

	<View style = {styles.container}>

		<View style = {styles.savebutton}>

			<Button title = "save" />

		</View>

		<View styles = {styles.erasebutton}>

			<Button title = "erase" color = "red" onPress = {props.onPress}/>

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