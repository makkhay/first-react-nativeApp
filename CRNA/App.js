import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView, Button, TextInput, Alert, FlatList, WebView} from 'react-native';

import { COMMUNITY_MEMBERS } from './Assets/Const';

import Toolbar from './components/Toolbar';



export default class App extends React.Component {
  constructor(props){
    super(props); 
    
    this.state = {
    //lime color 
    backgroundColor: '#e5f9f6',
    phrase: ''
    }
}

//phrase submit 
handleSubmit = () =>{
  //display alert 
  const { phrase }  = this.state
   
   if( phrase == 'hello')
     {
      console.log("corect."); 
      Alert.alert(
        'Success',
        'You got it Right!',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false })
     } else{

      console.log("incorrect");
      Alert.alert(
        'Error',
        'Wrong Phrase, the phrase is hello :-)',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false })

     } 
  

  
}

//random color
handleClick = () => {
 const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
   
   console.log(randomColor);
   this.setState({
      backgroundColor: randomColor
   })
}

renderMemberRow(member) {
  return (
    <View style={styles.rowContainer} key={member}>
      <Image source={{ url: member.image }} style={styles.avatar} />
      <Text style={styles.nameLabel}>{member.name}</Text>
    </View>
  )
}

handleTouch = () => {
  return (
    <WebView
      source={{uri: 'https://www.google.com/'}}
      styles={{flex: 1}}
    />
  );
}



  render() {
   
    return (
      
      <View style ={styles.container}>
      <Toolbar/>
      <ScrollView style={styles.scrollView}>   
        <View style={styles.bigImgeContainer}>
         <Image 
            source={require('./Assets/image.png')}
            style={styles.bigImge}
        />
        </View>

       <View style={styles.smallImagesContainer}>
          <Image 
            source={require('./Assets/earth.png')}
            style={styles.smallImageRectangle}
        />
        <Image 
            source={require('./Assets/arsenal.png')}
            style={styles.smallImage}
        />
         
       </View>


       <View 
           style ={styles.toggleContainer}
           backgroundColor={this.state.backgroundColor}
           >
           <Button 
             style={styles.buttonContainer}
             title="Change button color"
             onPress={this.handleClick}
            />
       </View>


       <View 
         style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type Here....."
          value={this.state.phrase}
          onChangeText={(text) => this.setState({phrase: text})}
          //call handle submit to display an alert
          onSubmitEditing={this.handleSubmit}
        />
      </View>

     
     <FlatList
            style={styles.list}
            data={COMMUNITY_MEMBERS}
            renderItem={ ({item}) => (
            
           
              <View style={styles.itemContainer}> 
                <View style={styles.imageNameContainer}>
                  <Image 
                    source={{uri: item.image}} 
                    style={
                      { 
                        width: 60, 
                        height: 60,
                        borderRadius: 30
                      }}
                  />
                  <View style={styles.textNameContainer}>
                    <Text style={styles.itemName}> {item.name} </Text>
                  </View>
                </View>
             </View>
          
            )}
          />
      
  
    </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F80E1'
  },
  scrollView:{
    backgroundColor:'black',
    flexDirection: 'column',
  },
  bigImgeContainer: {
    flexDirection: 'row',
    alignContent:'center',
    justifyContent:'center',
  },
  smallImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'black'
  },
  bigImage : {
    flex:1,
  },
  smallImage: {
    height: 150,
    width:150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#CDDC39',
  },
  smallImageRectangle: {
    height: 150,
    width:150,
    borderWidth: 2,
    borderColor: '#CDDC39',
  },

  buttonContainer: {
    flex:1,
  },

  toggleContainer: {
    height: 200,
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  textInput: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#fff',
      padding: 5,
      height: 40,
      color: '#fff'
  
  },
  textInputContainer: {
    
    alignContent: 'center',
    justifyContent: 'center',
    padding: 20,
    //black
    backgroundColor: 'black'
  },
  imageNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: 1,
    borderColor:'#000'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: 1,
    borderColor:'#000'
  },
  textNameContainer: {
    justifyContent: 'center',

  },
  list: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    backgroundColor: '#2196F3',
    height: 56,
    width: 300,
    
  }, 
  

});

