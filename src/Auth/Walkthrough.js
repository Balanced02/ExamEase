/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useStyles} from '../assets/styles';
import colours from '../assets/colours';

const slides = [
  {
    key: 'availability',
    title: 'Difficulty practicing Exams?',
    text:
      'ExamEase is here to help. Practice Questions accross WASCCE, UTME and POST-UTME for absolutely free',
    image: require('../assets/images/ExamStress.png'),
    backgroundColor: colours.white,
  },
  {
    key: 'work',
    title: 'Take Exams anywhere',
    text:
      'Practice Exams on the go. Compete with peers, soar high and be the best!!',
    image: require('../assets/images/TakeExam.png'),
    backgroundColor: colours.white,
  },
  {
    key: 'something',
    title: 'Practice Mode',
    text: 'Use practice mode to view solution and explanations to questions',
    image: require('../assets/images/PracticeMode.png'),
    backgroundColor: colours.lilac,
  },
];

function Walkthrough(props) {
  const {walkthroughStyles} = useStyles();
  const _renderNextButton = () => {
    return (
      <View style={walkthroughStyles.buttonCircle}>
        <Text style={walkthroughStyles.buttonText}>Next</Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={walkthroughStyles.buttonCircle}>
        <Text style={walkthroughStyles.buttonText}>Done</Text>
      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <View style={walkthroughStyles.buttonCircle}>
        <Text style={walkthroughStyles.buttonText}>Skip</Text>
      </View>
    );
  };

  const _renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          paddingBottom: 60,
        }}>
        <View style={walkthroughStyles.itemContainer}>
          <View style={{flex: 1}} />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={walkthroughStyles.image}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 40,
            }}>
            <Text style={walkthroughStyles.title}>{item.title}</Text>
            <Text style={walkthroughStyles.description}>{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  const _onDone = () => {
    props.navigation.navigate('ColourPicker');
  };

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      onDone={() => props.navigation.navigate('ColourPicker')}
      onSkip={_onDone}
      renderDoneButton={_renderDoneButton}
      renderNextButton={_renderNextButton}
      renderSkipButton={_renderSkipButton}
      showSkipButton={true}
      activeDotStyle={{
        backgroundColor: colours.darkLilac,
      }}
    />
  );
}

export default Walkthrough;
