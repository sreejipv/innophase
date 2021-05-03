import * as React from 'react';
import { View, Text, Image , StyleSheet, TouchableHighlight} from 'react-native';


function Header({navigation,pagetitle, subTitle}) {
  return (
    <>
        <View style={styles.Header}>
            <View style={styles.HeaderImage}>
                <Image style={{width:200, height: 100}}
                    source={require('../../assets/images/download.png')}
                />
            </View>

           
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {pagetitle !== 'Home' &&  <TouchableHighlight 
                underlayColor="#1960A8"
                    onPress={() => {navigation.goBack()}}>
                <Image 
                        style={styles.bButton}
                        resizeMode="contain"
                        source={require('../../assets/images/bbutton.png')}/>

                    </TouchableHighlight>  }
                    
                    <Text style={{fontWeight: 'bold', fontSize: 23, color: 'white'}}>
                        {pagetitle}
                    </Text>
                </View>
                
            <Text style={{ fontSize: 23, color: 'white'}}>
                {subTitle} 
            </Text>
            </View>
            
            
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    bButton:{ 
        height: 30, 
        width: 20, 
        marginRight: 30
    },
    HeaderImage: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 100
    },
    Header: {
        backgroundColor: '#1960A8',
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 12,
        
    }
  });

export default Header