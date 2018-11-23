import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';


const AddNotesPanel = (props) => (

	<View style={styles.container}>

		<Text>{props.title}</Text>

	</View>

);

const styles = StyleSheet.create({

	container:{
		padding:10,
		marginTop: 15,
		backgroundColor: '#eee'
	}
})


return default AddNotesPanel;

