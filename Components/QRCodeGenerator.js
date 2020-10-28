import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import Header from './ComponentHeader';
import {View, TextInput, StyleSheet} from 'react-native';

class QRCodeGenerator extends React.Component {
    state = {
        value: ''
    }
    
    render() {
        const navigation = this.props.navigation;
        return(
            <View style={styleSheet.View}>
                <Header navigation={navigation}/>
                <TextInput style={styleSheet.TextInput} value={this.state.value} onChangeText={(text)=>{this.setState({value: text})}}/>
                {this.state.value ? <View style={styleSheet.QRCode}><QRCode value={this.state.value} size={400}/></View> : <View style={styleSheet.QRCode}/>}
            </View>
        )
    }
}

const styleSheet = StyleSheet.create({
    View: {
        display: "flex",
        flexDirection: "column"
    },
    TextInput: {
        borderRadius: 5,
        elevation: 2
    },
    QRCode: {
        marginTop: 20,
        borderWidth: 1,
        height: 420,
        flexGrow: 1,
        borderRadius: 5,
        elevation: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default QRCodeGenerator