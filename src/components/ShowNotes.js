import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableHighlight } from 'react-native';


const ShowNotes = (props) => (

	<TouchableHighlight onPress = {props.onPress}>
		<View style={styles.container}>
			<Text style={styles.text}>{props.title}</Text>
		</View>
	</TouchableHighlight>


);

const styles = StyleSheet.create({

	container:{
		padding:10,
		marginTop: 15,
		backgroundColor: '#eee',
	},
	text:{
		textAlign:'center',
	}

})


export default ShowNotes;

