import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import imgShare from '../assets/share.png';
import imgLogo from '../assets/logo.png';
import imgUsr from '../assets/user.png';
import imgLock from '../assets/padlock.png';

function LoginPage({ navigation }) {

        return(
            <View style = {styles.bg}>
                
                <View style = {styles.boxTop}/>
                <View style={styles.contentLogo}>
                    <View style = {styles.centerContent}>
                        <Image
                            width = '10px'
                            height = '10px'
                            style = {styles.imgStyle}
                            source = {imgShare}
                        />
                    </View>
                    
                </View>
                
                <View style = {styles.content}>
                    <View style = {styles.form}>
                    <Image
                        width = '10px'
                        height = '10px'
                        style = {styles.imgLogo}
                        source = {imgLogo}
                    />
                    <View style = {styles.inputLogo}>
                        <Image
                            width = '10px'
                            height = '10px'
                            source = {imgUsr}
                            style = {styles.icon}
                        />
                        <TextInput style = {styles.caja}
                        inlineImageLeft = 'search_icon'
                        placeholder="User"
                        returnKeyType = "next"
                        /> 
                    </View>
                    <View style = {styles.inputLogo}>
                        <Image
                            width = '10px'
                            height = '10px'
                            source = {imgLock}
                            style = {styles.icon}
                        />
                        <TextInput style = {styles.caja}
                        placeholder = "Password"
                        secureTextEntry
                        />
                    </View>
                    
                    <TouchableOpacity style = {styles.btnLogin} onPress={() => navigation.navigate('Report',{op: []})}>
                        <Text style = {styles.textBoton}>Login</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
}
const styles = StyleSheet.create({
    imgLogo: {
        marginBottom: 50
    },
    icon: {
        marginTop: 5,
        marginLeft: 5,
        width: 20,
        height: 20
    },  
    inputLogo: {
        padding: 0,
        flexDirection: 'row',
        width: '100%',
        height: 35,
        marginTop: '10%',
        borderColor: '#CACACA',
        borderStyle: 'solid',
        borderWidth: 1
    },
    caja: {
        padding: 0,
        marginLeft: 10,
        width: '85%'

    },
    textBoton: {
        color: '#fff'
    },
    btnLogin: {
        
        alignItems: 'center',
        padding: 10,
        width: '100%',
        marginTop: '10%',
        backgroundColor: '#009821',
    },
    
    centerContent: {
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgStyle: {
        
        width: 70,
        height: 70,
    },
    bg: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E5E5E5',
        
    },
    boxTop: {
        width: '100%',
        height: '70%',
        backgroundColor: '#0072B1'
    },
    content: {
        top: '30%',
        left:  '5%',
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        width: '90%',
        height: '60%'
    },
    contentLogo: {
        width: '100%',
        top: '15%',
        position: 'absolute'
    },
    form: {
        position: 'relative',
        width: '100%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        paddingLeft: 60,
        paddingRight: 60
    }
    
  });

  export default LoginPage;