import React from 'react';
import { ImageBackground, View,StyleSheet } from 'react-native';
import topBlueStyles from './TopBlue.Styles';

const TopBlue = (props) => {
    return (
        <ImageBackground source={require('../../../assets/backgroundTop.png')} style={topBlueStyles.container}>
          {props.children}
        </ImageBackground>
        
    );
}

export default TopBlue;