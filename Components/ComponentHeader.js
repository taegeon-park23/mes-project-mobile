import React from 'react';
import {View, Button, Text,StyleSheet} from 'react-native';

class ComponentHeader extends React.Component {
    
    render() {
        const navigation = this.props.navigation;

        return(
            <View style={HeaderStyleSheet.ComponentHeaderView}>
                <Button style={HeaderStyleSheet.Button} title="🌏" onPress={()=>{navigation.toggleDrawer()}}/>                        
                <Text style={HeaderStyleSheet.Title} onPress={()=>{navigation.navigate("Home")}}>YONAM MES</Text>
            </View>
        )
    }
}

const HeaderStyleSheet = StyleSheet.create({
    ComponentHeaderView: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10
    },
    Button: {
        width: "10%",
        borderRadius: 120        
    },
    Title: {
        flexGrow: 1,
        textAlign: "center",
        display: "flex",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20
    }
});
export default ComponentHeader