import React from 'react';
import {Animated, ImageBackground} from 'react-native';
import appBackground from '../assets/images/background.png';
import {useStyles} from '../assets/styles';

export default function Layout({children, imageBackground}) {
  const {homeScreenStyles} = useStyles();
  return (
    <Animated.View style={homeScreenStyles.container}>
      {imageBackground ? (
        <ImageBackground source={appBackground} style={{flex: 1}}>
          {children}
        </ImageBackground>
      ) : (
        children
      )}
    </Animated.View>
  );
}

Layout.defaultProps = {
  imageBackground: true,
};
