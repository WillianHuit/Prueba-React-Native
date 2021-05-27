import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native';
import arrowBack from '../assets/arrowBack.png';
import imgLogo from '../assets/logo.png';



function Header(props){
    return(<View>
        <TouchableOpacity style = {styles.btnArrow} onPress={() => props.navigation.navigate(props.backTo)}>
            <Image
                style = {styles.iconArrow}
                source = {arrowBack}
            />
        </TouchableOpacity>
        
        <View style = {styles.content}>
            <Image
                style = {styles.imgLogo}
                source = {imgLogo}
            />
        </View>
    </View>);
}
const styles = StyleSheet.create({
    btnArrow: {
        top: 40,
        left: 20,
        position: 'absolute'
    },
    iconArrow: {
        width: 30,
        height: 30
    },
    imgLogo: {
        height: 30,
        width: 100
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    }
  });
export default Header;