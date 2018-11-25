import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import {connect} from 'react-redux'
import {closeAddMenu, 
	openAddMenu, 
	newNotes, 
	updateUserInput,
	updateNote,
	eraseNote,
	openNote,
	cleanSelectedNote} from './src/actions/index';
import ShowNotes from './src/components/ShowNotes';
import Notes from './src/components/Notes';

class MyApp extends Component{

	/*Opens a new note / Closes a new note*/


	openAddNotePanel = () => {

		if(this.props.addNotes){

		 this.props.closeAddMenu();

		}else{

		 this.props.openAddMenu();

		 this.addNewNote();

		}

	}


	addNewNote = () => {

		/*Adds a new note to content and names it 'No Title' before the user
		changes the title*/

		this.props.newNotes('No Title');

	}

	onChangeText = (text) => {

		/*Parses the text the user enters */

		this.props.updateUserInput(text);

	}

	updateNote = (index) => {

		/*Changes the title of the note after it gets opened*/

		note = { key:index, title: this.props.userInput};

		this.props.updateNotes(note);

		this.props.updateUserInput("");

	}

	onClose = (index) => {

		/*These two functions get triggered when the users closes the modal of Notes*/


		this.updateNote(index);

		this.openAddNotePanel();


	}

	onCloseSelected = () => {

		/*Closes a selected note*/

		this.props.deselectNote();

	//	this.props.updateUserInput("");

	}


	onEraseNote = (index) => {

		/*Erases a note*/

		this.props.eraseNotes(index);

		this.openAddNotePanel();

	}

	onEraseNoteSelected = (index) => {

		/*Erases a note selected*/

		this.props.eraseNotes(index);

		this.props.deselectNote();

	}

	onOpenNote = (note) => {

		/*Fills seleted prop with an the note the user wants to open*/

		this.props.openNotes(note);


	}
	

					

	render = () =>  {

		let showNewNote;
		let filteredNotes;

		if(this.props.addNotes){

			showNewNote = <Notes 
						onClose = {this.onClose.bind(this, this.props.content[this.props.content.length-1].key )}
						title = {this.props.userInput}
						key = {this.props.content[this.props.content.length-1].key}
						onChangeText = {this.onChangeText}
						onPress = {this.onEraseNote.bind(this,this.props.content[this.props.content.length-1].key)}/>
		}

		if(this.props.selected){


			showNewNote = <Notes 
						onClose = {this.onCloseSelected.bind(this, this.props.selected.key)}
						title = {this.props.selected.title}
						key = {this.props.selected.key}
						onChangeText = {this.onChangeText}
						onPress = {this.onEraseNoteSelected.bind(this,this.props.selected.key)}/>

		}



		filteredNotes = this.props.content.filter(content => (

			content.title.toLowerCase().includes(this.props.userInput.toLowerCase())

		));


		return(

			<View style={styles.container}>

			{showNewNote}


				<View style = {styles.header}>
	
					<TextInput 
					placeholder='search notes' 
					style={styles.TextInput}
					onChangeText = {this.onChangeText}
					/>


					<View style={styles.button}>

						<Button title='add a note' onPress = {this.openAddNotePanel}/>

					</View>

				</View>
				
				<View style={styles.body}>
					<FlatList
					data = {filteredNotes}
					renderItem = { (item) => (
						<ShowNotes
						key = {item.item.key}
						title={item.item.title}
						onPress = {this.onOpenNote.bind(this,{key: item.item.key,
													title: item.item.title})}/>
						)}/>

				</View>
				
			</View>
		);


	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop:35,
  },
  	header:{
  		//flex:1,
  		flexDirection: 'row',
  		justifyContent: 'space-between',
  		paddingLeft: 20,
  		paddingRight:20,
  		paddingBottom: 10,
  		borderBottomWidth:1,
  		borderColor: '#d6d7da',
  	},
  	body:{
  		width:"100%",
  	},
  	button:{
  		width: '30%',
  	},
  	TextInput:{
  		width:'70%'
  	},


});

const mapStateToProps = (state) => {

      return {
              addNotes:state.notes.addNotes,
              content:state.notes.content,
              userInput: state.notes.userInput,
              selected: state.notes.selectedNote,
            };

}

const mapDispatchToProps = dispatch => {
  return {
    openAddMenu: () => dispatch(openAddMenu()),
    closeAddMenu: () => dispatch(closeAddMenu()),
    newNotes: (title) => dispatch(newNotes(title)),
    updateUserInput: (value) => dispatch(updateUserInput(value)),
    updateNotes: (note) => dispatch(updateNote(note)),
    eraseNotes: (index) => dispatch(eraseNote(index)),
    openNotes: (note) => dispatch(openNote(note)),
    deselectNote: () => dispatch(cleanSelectedNote()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(MyApp);

