import React, {useEffect} from 'react'
import { View, Text, TouchableHighlight , StyleSheet} from 'react-native';


function PatchButton({navigation,patchname, index}) {
  return (
    <TouchableHighlight underlayColor="white"   
        onPress={() => {navigation.navigate('Password' , {
            name: patchname
          });}}>
        <View style={styles.listItem}>
          <Text style={styles.itemText}>{index} . </Text>
          <Text style={styles.itemText}>{patchname}</Text>
        </View>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
    listItem: {
        borderWidth: 1,
        borderColor: '#ddd',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 4,
      },
      itemText: {
        color: '#1960A8',
        fontSize: 16
      },
      listContainer: {
        margin: 10
      }
  });

export default PatchButton