/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {Dimensions} from 'react-native';
import AppContext from '../../AppContext';
import colours from './colours';

const {width, height} = Dimensions.get('window');

const guidelineWidth = 360;
const guidelineBaseHeight = 640;

export const scale = (size) => (width / guidelineWidth) * size;
export const scaleVertical = (size) => (height / guidelineBaseHeight) * size;

export const fonts = {
  lightText: {
    fontFamily: 'Montserrat-Light',
  },
  regularText: {
    fontFamily: 'Montserrat-Regular',
  },
  boldText: {
    fontFamily: 'Montserrat-Bold',
  },
  semiBoldText: {
    fontFamily: 'Montserrat-SemiBold',
  },
  h1: {fontSize: 30},
  h2: {fontSize: 25},
  h3: {fontSize: 20},
  h4: {fontSize: 16},
  h5: {fontSize: 14},
  h6: {fontSize: 10},
};

export const useStyles = () => {
  const {appTheme, appBackground, textColor} = useContext(AppContext);
  const [count, setCount] = useState(0);
  let animatedValue = new Animated.Value(0);

  const animateValue = (timing) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: timing,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateValue(50);
    if (count < 1) {
      setCount(count + 1);
    }
  }, [appBackground]);

  // Stop animationn and just flip colour
  // TODO: figure out ways to target low end phones and animate for high end phones
  // const interpolateColour = (from, to) =>
  //   animatedValue.interpolate({
  //     inputRange: [0, 100],
  //     outputRange: [from, to],
  //   });

  const interpolateColour = (from, to) => to;

  let animatedWhite =
    appTheme === 'white'
      ? interpolateColour(colours.black, colours.white)
      : interpolateColour(colours.white, colours.black);
  let animatedLilac =
    appTheme === 'white'
      ? interpolateColour(colours.darkLilac, colours.lilac)
      : interpolateColour(colours.lilac, colours.darkLilac);
  let animatedBlack =
    appTheme !== 'white'
      ? interpolateColour(colours.black, colours.darkLilac)
      : interpolateColour(colours.white, colours.black);

  const colors = {
    white: animatedWhite,
    black: animatedBlack,
    whiteColor: colours.white,
    blackColor: colours.black,
    animatedLilac,
  };

  const appStyles = {
    container: {
      flex: 1,
    },
  };

  const buttonStyles = {
    button: {
      marginVertical: scale(10),
      height: scale(45),
      borderRadius: scale(5),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: textColor,
    },
    buttonText: {
      fontFamily: fonts.semiBoldText.fontFamily,
      fontSize: scale(fonts.h5.fontSize),
      color: appBackground,
    },
  };

  const colourPickerStyle = {
    container: {
      padding: scale(20),
      flex: 1,
      backgroundColor: appBackground,
    },
    colourContainer: {
      flex: 1,
      justifyContent: 'space-around',
      padding: scale(10),
    },
    selectColor: {
      height: (scaleVertical(64) / scale(36)) * 100,
      width: (scaleVertical(64) / scale(36)) * 100,
      borderRadius: scale(300),
      borderWidth: 2,
      borderColor: colors.white,
    },
    heading: {
      color: textColor,
      fontFamily: fonts.semiBoldText.fontFamily,
      fontSize: scale(fonts.h3.fontSize),
      textAlign: 'center',
      marginBottom: scale(10),
    },
  };

  const walkthroughStyles = {
    buttonText: {
      fontFamily: fonts.regularText.fontFamily,
      color: colours.darkLilac,
      fontSize: 18,
    },
    buttonCircle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    image: {
      flex: 1,
      height: scaleVertical(400),
    },
    title: {
      fontSize: scale(fonts.h4.fontSize),
      fontFamily: fonts.semiBoldText.fontFamily,
      textAlign: 'center',
      color: '#000',
      margin: 10,
    },
    itemContainer: {
      flex: 1,
      padding: scale(20),
      justifyContent: 'center',
      alignItems: 'center',
    },
    description: {
      fontSize: scale(fonts.h5.fontSize),
      fontFamily: fonts.regularText.fontFamily,
      textAlign: 'center',
      margin: 10,
    },
  };

  return {
    colors,
    fonts,
    appStyles,
    buttonStyles,
    colourPickerStyle,
    walkthroughStyles,
  };
};
