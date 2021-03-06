/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import {Animated, Platform} from 'react-native';
import {Dimensions} from 'react-native';
import AppContext from '../../AppContext';
import colours from './colours';
import hexToRgb from '../utils.js/helpers';

const {width, height} = Dimensions.get('window');

const guidelineWidth = Platform.isPad ? 560 : 360;
const guidelineBaseHeight = Platform.isPad ? 840 : 640;

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
  italicsText: {
    fontFamily: 'Montserrat-Italic',
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
  const {appBackground, textColor} = useContext(AppContext);
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

  const colors = {
    white: colours.white,
    black: colours.black,
  };

  const appStyles = {
    container: {
      flex: 1,
    },
  };

  const buttonStyles = {
    button: {
      marginVertical: scale(10),
      minHeight: scale(45),
      padding: scale(5),
      borderRadius: scale(5),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: textColor,
      paddingHorizontal: scale(15),
    },
    invertedButton: {
      backgroundColor: appBackground,
    },
    buttonText: {
      fontFamily: fonts.semiBoldText.fontFamily,
      fontSize: scale(fonts.h5.fontSize),
      color: appBackground,
    },
    invertedText: {
      color: textColor,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconContainer: {
      backgroundColor: hexToRgb(appBackground, 0.6),
      borderRadius: scale(20),
      width: scale(35),
      height: scale(35),
      margin: scale(10),
      alignItems: 'center',
      justifyContent: 'center',
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

  const uiTextStyles = {
    text: {
      color: textColor,
      fontSize: scale(fonts.h4.fontSize),
      fontFamily: fonts.regularText.fontFamily,
    },
    textBold: {
      fontFamily: fonts.boldText.fontFamily,
    },
    textSmall: {
      fontSize: scale(fonts.h5.fontSize),
    },
    textLight: {
      fontSize: scale(fonts.h5.fontSize),
      fontFamily: fonts.lightText.fontFamily,
    },
  };

  const homeScreenStyles = {
    container: {
      flex: 1,
      backgroundColor: appBackground,
    },
    headerContainer: {
      padding: scale(10),
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginBottom: scaleVertical(5),
    },
    centerText: {
      textAlign: 'center',
    },
    examMenu: {
      fontFamily: fonts.boldText.fontFamily,
    },
    iconTextContainer: {
      flexDirection: 'row',
      paddingLeft: scale(10),
    },
    nameContainer: {
      flex: 1,
      paddingLeft: scale(10),
    },
    iconContainer: {
      padding: scale(5),
      height: scale(40),
      width: scale(40),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: scale(5),
    },
    indexContainer: {
      padding: scale(5),
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: scale(5),
    },
    bodyShaded: {
      borderRadius: scale(10),
      flex: 1,
      left: scale(10),
      top: scale(20),
      paddingRight: scale(20),
      paddingBottom: scale(30),
      padding: scale(10),
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    subjectContainer: {
      marginBottom: scale(10),
    },
    emptyView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: scale(20),
    },
    menu: {
      padding: scale(10),
      marginBottom: scale(5),
      backgroundColor: appBackground,
      borderRadius: scale(5),
    },
    card: {
      backgroundColor: hexToRgb(appBackground, 0.6),
      padding: scale(10),
      borderRadius: scale(10),
      margin: scale(5),
      ...Platform.select({
        ios: {
          shadowColor: colors.black,
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          // elevation: 2,
        },
      }),
    },
    subjectCard: {
      alignItems: 'center',
      // maxHeight: scale(140),
      minWidth: scale(140),
    },
    paragraph: {
      fontSize: scale(fonts.h5.fontSize),
      marginBottom: scale(10),
    },
    bottom: {
      bottom: 0,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    submit: {
      paddingVertical: scaleVertical(5),
      minHeight: scaleVertical(30),
    },
  };

  const htmlStyles = {
    p: {
      color: textColor,
      fontFamily: fonts.regularText.fontFamily,
      fontSize: scale(fonts.h5.fontSize),
    },
    i: {
      fontFamily: fonts.italicsText.fontFamily,
    },
    strong: {
      fontFamily: fonts.boldText.fontFamily,
      fontSize: scale(fonts.h5.fontSize),
    },
  };
  const questionIndexStyle = {
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    text: {
      color: appBackground,
    },
    button: {
      backgroundColor: hexToRgb(textColor, 0.6),
      width: scale(40),
      height: scale(20),
      alignItems: 'center',
      justifyContent: 'center',
      margin: scale(5),
    },
  };

  return {
    colors,
    fonts,
    appStyles,
    buttonStyles,
    colourPickerStyle,
    walkthroughStyles,
    homeScreenStyles,
    uiTextStyles,
    textColor,
    htmlStyles,
    questionIndexStyle,
  };
};
