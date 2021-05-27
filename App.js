import React, { Component } from "react";

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/LoginPage';
import Report from './src/Report';
import Calc from './src/Calc';


const Stack = createStackNavigator();
const routes  = []
class App extends Component{
  
 

  render(){
    return(<NavigationContainer>
        <Stack.Navigator headerMode="none" >
            <Stack.Screen name="Home" component={LoginPage}/>
            <Stack.Screen name="Report" component={Report}/>
            <Stack.Screen name="Calculator" component={Calc} initialParams = {{addOperation: this.addOperation}}/>
        </Stack.Navigator>
      </NavigationContainer>);
  }
}



export default App;