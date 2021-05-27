import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from './Header';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
]);


class Calc extends Component{
    state = {
        display: "",
        clear: false
    }
    clear = () => {
        this.setState({display: ""});
    }
    addValue =(props) => {
        
       let temp = this.state.display;
       if(props != "="){
            if(props == "C"){
                temp = temp.substring(0, temp.length - 1);
                this.setState({display: temp});
            }else{
                if(this.state.clear){
                    this.setState({display: props, clear: false});
                }else{
                    this.setState({display: temp+props});
                }
            }
       }else{
            if(temp!=""){
                let newVal = operate(temp);
                this.setState({display: newVal});
                if(newVal !="Error Sintax"){
                    let description;
                    description = getOperation(temp) + " " + newVal;
                    this.props.route.params.addOperation(description);
                    //this.setState({op: this.props.route.params.addOperation("Nuevo")});
                   //console.log(this.props.route.params);
                }
                this.setState({clear: true});
            }
       }
    }

    
    render(){
        return(<View style = {styles.bg}> 
        
            <View style = {styles.headerBg}>
                <View style  = {styles.centerContent}>
                    <View style = {styles.circle}/>
                </View>
                <View style= {styles.header}>
                    <Header backTo = "Report" help = {this.state.op} navigation = {this.props.navigation}/>
                    <Text style = {styles.title}>Calculator</Text>
                </View>
            </View>
            <View style = {styles.containerOperation}>
                <Text style = {styles.operationText}>{this.state.display}</Text>
            </View>
            <View style = {styles.keyBoards}>
                <View style = {styles.rowKey}>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("C")}>
                        <Text style = {styles.textBotonSpecial}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={this.clear}>
                        <Text style = {styles.textSquare}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("%")}>
                        <Text style = {styles.textBotonSpecial}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("/")}>
                        <Text style = {styles.textBotonSpecial}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.rowKey}>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("7")}>
                        <Text style = {styles.textBoton}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("8")}>
                        <Text style = {styles.textBoton}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("9")}>
                        <Text style = {styles.textBoton}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("X")}>
                        <Text style = {styles.textBoton}>X</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.rowKey}>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("4")}>
                        <Text style = {styles.textBoton}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("5")}>
                        <Text style = {styles.textBoton}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("6")}>
                        <Text style = {styles.textBoton}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("-")}>
                        <Text style = {styles.textBoton}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.rowKey}>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("1")}>
                        <Text style = {styles.textBoton}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("2")}>
                        <Text style = {styles.textBoton}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("3")}>
                        <Text style = {styles.textBoton}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("+")}>
                        <Text style = {styles.textBoton}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.rowKey}>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("%")}>
                        <Text style = {styles.textBotonSpecial}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("0")}>
                        <Text style = {styles.textBoton}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue(".")}>
                        <Text style = {styles.textBoton}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn} onPress={() => this.addValue("=")}>
                        <Text style = {styles.textCircle}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>);
    }
}

function operate(operation){
    let result = "";
    let value = 0;
    let valueTemp = 0;
    let decimal;
    let percent;
    let action;
    
        let numbers = operation.split(/[+X\/ -]/);
        if(numbers.length!=2 || numbers.length == 1){
            return "Error Sintax";
        }
        action = getOperation(operation);
        for(let i = 0; i<numbers.length;i++){
            valueTemp = 0;
            decimal = numbers[i].split(".");
            if(decimal.length>2){
                return "Error Sintax";
            }
            percent = numbers[i].split("%");
            if(percent.length>2){
                return "Error Sintax";
            }
            if(decimal.length==2){
                valueTemp = parseFloat(numbers[i]);
            }else{
                valueTemp = parseInt(numbers[i]);
            }
            if(percent.length == 2){
                valueTemp = valueTemp/100;
            }
            if(action=="Addition"){
                value = value + valueTemp;
            }else if(action=="Subtraction"){
                value =  -valueTemp - value;
            }else if(action=="Division"){
                if(value!=0){
                    value = value / valueTemp;
                }else{
                    value = valueTemp;
                }
            }else if(action=="Multiplication"){
                if(value!=0){
                    value = value * valueTemp;
                }else{
                    value = valueTemp;
                }
            }
        }
        result = operation + "=" + value;
    return result;
}

function getOperation(operation){
    let numbers;
    numbers = operation.split("+");
    if(numbers.length>1){
        return "Addition";
    }
    numbers = operation.split("-");
    if(numbers.length>1){
        return "Subtraction";
    }
    numbers = operation.split("/");
    if(numbers.length>1){
        return "Division";
    }
    numbers = operation.split("X");
    if(numbers.length>1){
        return "Multiplication";
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#FFFFFF',
        height: '100%'
    },
    centerContent: {
        alignItems: 'center',
    },
    circle: {
        top: -300,
        position: 'absolute',
        width: 480,
        height: 480,
        borderRadius: 240,
        backgroundColor: '#F4F4F4',
    },
    header: {
        width: '100%',
        height: 80,
    },
    headerBg: {
        backgroundColor: '#0072B1',
        width: '100%',
        height: '30%',
        
    },
    containerOperation: {
        backgroundColor: '#0072B1',
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    title: {
        marginTop: 10,
        textAlign: 'center',
        color: '#009821',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    operationText: {
        color: '#FFFFFF',
        justifyContent: 'flex-end',
        fontSize: 40,
        fontWeight: 'normal'
    },
    keyBoards: {
        backgroundColor: '#F4F4F4',
        width: '100%',
        height: '55%',
        padding: 10
     
    },
    rowKey: {
        flexDirection: 'row',
        height: '20%'
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '25%'
    },
    textBoton: {
        fontSize: 25,
        color: '#A7A7A7',
        fontFamily:'Roboto'
    },
    textBotonSpecial: {
        fontSize: 25,
        color: '#009821',
        fontFamily:'Roboto'
    },
    textSquare: {
        borderColor: '#009821',
        borderWidth: 1,
        padding: 5,
        fontSize: 14,
        color: '#009821',
        fontFamily:'Roboto'
    },
    textCircle: {
        backgroundColor: '#009821',
        borderRadius: 35,
        width: 35,
        height: 35,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
        color: '#FFFFFF',
        fontFamily:'Roboto'
    }
  });

export default Calc;
