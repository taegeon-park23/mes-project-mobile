import React from 'react';
import Header from './ComponentHeader';
import { connect } from 'react-redux';
import {changeComponent } from '../actions';
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

class Order extends React.Component {
    state = {
        WARE_CODE: '',
        WARE_COUNT: '',
        ON_REQUEST: false,
    }

    render() {
        const insert = async (e) => {
            this.setState({ON_REQUEST: true});
            let response = await fetch("http://220.66.115.111:8181/wro/insert", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({wrCount:this.state.WARE_COUNT, wrCode:this.state.WARE_CODE,ref:false})
            })
            .catch(error => Alert.alert(error));          
            await this.props.onChangeComponent();            
            await this.setState({ON_REQUEST: false});
            await Alert.alert(JSON.stringify(response));
        }

        const navigation = this.props.navigation;
        return (
            <View>
                <Header navigation={navigation}/>
                {
                    (() => {
                        if (this.state.ON_REQUEST === false) {
                            return (                            
                                <View style={styleSheet.Order}>
                                        <Text style={styleSheet.Title}> 제품 수주 </Text>
                                        
                                        <View style={styleSheet.InputBox}>
                                            <Text style={styleSheet.TextOfInputBox}> 제품 코드 </Text>
                                            <TextInput style={styleSheet.TextInputOfInputBox} value={this.state.WARE_CODE}
                                                onChangeText={(text) => this.setState({WARE_CODE: text})}    />
                                        </View>
                                        <View style={styleSheet.InputBox}>
                                            <Text style={styleSheet.TextOfInputBox}> 제품 개수 </Text>
                                            <TextInput style={styleSheet.TextInputOfInputBox}  value={this.state.WARE_COUNT}
                                                onChangeText={(text) => this.setState({WARE_COUNT: text})} />
                                        </View>
                                        <TouchableOpacity style={styleSheet.Button} onPress={insert}>
                                            <Text>수주버튼</Text>
                                        </TouchableOpacity>
                                </View>)
                        } else {
                            return (
                                <View>
                                    <Text>Loading</Text>
                                </View>
                            )
                         }
                    })()
                }
            </View>
        );
    }
}

const styleSheet = StyleSheet.create({
    Order: {
        position: "relative",
        width: deviceWidth/4*3,
        left: "12.5%",
        top: "50%",       
        borderColor: "gray",
        elevation: 3,
        borderRadius: 5,
        padding: 10
    },
    
    Title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 40
    },
    
    InputBox: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15
    },

    TextOfInputBox: {
        display: "flex",
        alignSelf: "center"
    },

    TextInputOfInputBox: {
        padding: 0, height: 40, flexGrow: 1, elevation: 1, borderRadius: 5
    },

    Button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DDDDDD",        
        marginTop: 15,
        height: 40,
        borderRadius: 5
    }
    
});
let mapStateToProps = (state, undefined) => {
    return {
        currentMainComponent: state.counter.currentMainComponent
    };
  };

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeComponent: () => dispatch(changeComponent("OrderResult")),
    }
}
Order = connect(mapStateToProps, mapDispatchToProps)(Order);
export default Order;