import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

//					<Button title='options' style={styles.Button}/>

class MyApp extends Component{





	render = () =>  {


		return(
			<View style={styles.container}>
				<View style = {styles.header}>
				
					<TextInput placeholder='search notes' style={styles.TextInput}/>

				<View style={styles.button}>

					<Button title='add a note'/>

				</View>



				</View>
			</View>
		);


	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop:35,
  },
  	header:{
  		flex:1,
  		flexDirection: 'row',
  		justifyContent: 'space-between',
  		paddingLeft: 20,
  		paddingRight:20,
  		paddingBottom: 10,
  		borderBottomWidth:1,
  		borderColor: '#d6d7da',
  	},
  	button:{
  		width: '30%',
  	},
  	TextInput:{
  		width:'70%'
  	}

});


export default MyApp;