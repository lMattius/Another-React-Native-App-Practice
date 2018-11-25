import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Modal} from 'react-native';
import HeaderButtons from './HeaderButtons'

const Notes = (props) => 

		(<Modal onRequestClose = {props.onClose}>

				<View style = {styles.header}> 

					<TextInput placeholder = "title"
					 style = {styles.inputheader}
					  value={props.title}
					  onChangeText = {props.onChangeText}/>

					<HeaderButtons onPress = {props.onPress} />

				</View>

				<View style = {styles.content}>

					<TextInput style={styles.inputbody} multiline = {true} value = {props.description} onChangeText = {props.onChangeDescription}/>

				</View>

			</Modal>);

const styles = StyleSheet.create({
	header:{
  		flexDirection: 'row',
  		justifyContent: 'space-between',
  		paddingLeft: 20,
  		paddingRight:20,
  		paddingBottom: 10,
  		borderBottomWidth:1,
  		borderColor: '#d6d7da',
	},

	content:{
		flex: 1,
	},

	inputbody: {
		width:'100%',
	},
	button:{
  		width: '30%',
  	},
  	inputheader:{
  		width:'50%',
  		marginTop:10,
  		borderColor: "black",
		borderWidth:1,
		padding: 5,
  	}
})

export default Notes;


