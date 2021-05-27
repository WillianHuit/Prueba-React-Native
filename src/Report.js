import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from './Header'
import iconCalc from '../assets/calc.png';
import operations from './Operation.json';

const itemBox = ({item}) => (
    <View key = {item.id} style = {styles.boxResult}>
        <View style = {styles.boxNumber}>
            <Text style = {styles.textNumber}>{item.number}</Text>
        </View>
        <Text style = {styles.textDescription}>{item.description}</Text>
    </View>
);

class Report extends Component{
    
    
    state = {
        operations: operations
      }
      addOperation = (description) => {
        let id = this.state.operations.length;
        let number = this.state.operations.length +1;
        const newOperation = {
          id: id,
          description: description,
          number: number
        }
        this.setState({operations: [...this.state.operations, newOperation]});
        
      
      }
    
    render(){
        return(<View style = {styles.bg}>
            
            <View style = {styles.header}>
                <Header backTo = "Home" navigation = {this.props.navigation}/>
            </View>
            <View style = {styles.groupAlign}>
                <Text style = {styles.textStyle}>Report</Text>
                <View >
                    
                    <TouchableOpacity style = {styles.btn} onPress={() => this.props.navigation.navigate('Calculator',{addOperation: this.addOperation})}>
                        <Image
                            source = {iconCalc}
                        />
                        <Text style = {styles.btnText}>Calculator</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SafeAreaView  style = {styles.results}>
                <FlatList
                    data={this.state.operations}
                    renderItem={itemBox}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView >
    </View>);
    }
}


const styles = StyleSheet.create({
    textDescription: {
        color: '#A7A7A7',
        marginLeft: 10
    },
    textNumber: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#FFFFFF',
        fontSize: 25
    },
    boxNumber: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009821',
        height: '100%',
        width: 50,
    },
    boxResult: {
        marginTop: 10,
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#D1D1D1',
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    results: {
        margin: 10,
        height: '60%'
    },
    bg: {
        backgroundColor: '#FFFFFF',
        height: '100%'
    },
    header: {
        height: 110,
        backgroundColor: '#F4F4F4'
    },
    btn: {
        width: 130,
        height: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0072B1'
    },
    btnText: {
        marginLeft: 5,
        color: '#FFFFFF'
    },
    textStyle:{
        fontWeight: 'bold',
        color: '#0072B1',
        fontSize: 30
    },
    groupAlign: {
        justifyContent:'space-between',
        margin: 20,
        alignItems: 'center',
        flexDirection: 'row',
        fontFamily: 'Roboto'
    }
  });
export default Report;