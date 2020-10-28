import React from 'react';
import { connect } from 'react-redux';
import {View, Text, TextInput, Button, Alert } from 'react-native';
import Order from './Order';
import QRCodeScreen from './QRCodeScreen';
import QRCodeGenerator from './QRCodeGenerator';
import { createStore } from 'redux';

class Main extends React.Component {
    render() {
        const currentMainComponent = () => {                  
            switch(this.props.currentMainComponent) {
              case "Order":
                return (<View>
                        <Text>Order</Text>
                    </View>);
              case "Loading":
                  return(<View>
                      <Text>Loading</Text>
                  </View>)
              default:
                return (<QRCodeGenerator/>);
            }
          }  
        return(
            currentMainComponent()  
        )
    }
}
let mapStateToProps = (state, undefined) => {
    return {
        currentMainComponent: state.counter.currentMainComponent
    };
  };
  
  Main = connect(mapStateToProps, undefined)(Main);
export default Main;