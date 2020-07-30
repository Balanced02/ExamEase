/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import UIText from './UIText';
import {useStyles} from '../assets/styles';
import Button from './Button';
import HTMLView from 'react-native-htmlview';

export default function QuestionComponent({
  question,
  section,
  questionNumber,
  answers,
  setAnswer = () => {},
  userAnswer,
}) {
  const {homeScreenStyles, htmlStyles} = useStyles();
  let answersArr = [];
  for (var key in answers) {
    answersArr.push({
      key: key,
      value: answers[key],
    });
  }
  return (
    <View style={{flex: 1}}>
      <UIText type="small">Question {questionNumber}</UIText>
      <View style={[homeScreenStyles.card, {flex: 1}]}>
        <HTMLView
          value={`${section ? `<p>${section}</p>` : ''}<p>${question}</p>`}
          stylesheet={htmlStyles}
        />
      </View>
      {answersArr.map((ans) => (
        <Button
          key={ans.key}
          text={`${ans.value}`}
          onPress={() => setAnswer(ans.key)}
          inverted={userAnswer === ans.key}
        />
      ))}
    </View>
  );
}
