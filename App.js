import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';
import { Text, View, StyleSheet, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Header from './Components/ComponentHeader';
import QRCodeScreen from './Components/QRCodeScreen';
import QRCodeGenerator from './Components/QRCodeGenerator';
import Order from './Components/Order';

const store = createStore(counterApp);

class HomeScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return(
      <View>
        <Header navigation={navigation}/>
        <Button title="Home" onPress={()=>{navigation.navigate("Home")}}/> 
        <Text/>
        <Button title="QrCodeScreen" onPress={()=>{navigation.navigate("QrCodeScreen")}}/> 
        <Text/>
        <Button title="QrCodeGenerator" onPress={()=>{navigation.navigate("QrCodeGenerator")}}/> 
        <Text/>
        <Button title="Order" onPress={()=>{navigation.navigate("Order")}}/>
        <Text/>
      </View>
    );
  }
};

const Drawer = createDrawerNavigator();

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>         
             <NavigationContainer>               
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen}/>
                    <Drawer.Screen name="QrCodeScreen" component={QRCodeScreen}/>
                    <Drawer.Screen name="QrCodeGenerator" component={QRCodeGenerator}/>
                    <Drawer.Screen name="Order" component={Order}/>                    
                </Drawer.Navigator>
             </NavigationContainer>                    
      </Provider>
    );
  }
}



export default App;
