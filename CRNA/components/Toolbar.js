import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,ToolbarAndroid
} from 'react-native';



export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <ToolbarAndroid >
        <View style={styles.toolbar}>
          <Text>_Arsenal FC</Text>
        </View>
      </ToolbarAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   
    container: {
       backgroundColor: 'black',
      },

      toolbar: {
        flexDirection: 'row',
        backgroundColor: '#e5f9f6',
        height: 56,
        borderRadius: 10,
        width: 300,
      }, 
       
  });