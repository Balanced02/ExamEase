/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import UIText from './UIText';
import {View} from 'react-native';
import {useStyles, scale, scaleVertical} from '../assets/styles';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

export default function QuestionIndexes({
  data,
  onSelect = () => {},
  selectedAnswers,
  onlyCorrect = false,
}) {
  const {questionIndexStyle, buttonStyles} = useStyles();
  return (
    <View style={{marginBottom: scale(10)}}>
      <ScrollView
        contentContainerStyle={questionIndexStyle.container}
        style={[
          !onlyCorrect && {
            height: scaleVertical(60),
          },
        ]}>
        {data.map((dat, i) => (
          <TouchableOpacity
            key={i}
            style={[
              questionIndexStyle.button,
              !onlyCorrect && selectedAnswers[dat.id]
                ? buttonStyles.invertedButton
                : null,
              onlyCorrect
                ? selectedAnswers[dat.id] === dat.answer
                  ? {
                      backgroundColor: 'green',
                    }
                  : {
                      backgroundColor: 'red',
                    }
                : null,
            ]}
            onPress={() => onSelect(i)}>
            <UIText
              type="small"
              style={
                selectedAnswers[dat.id]
                  ? buttonStyles.invertedText
                  : questionIndexStyle.text
              }>
              {i + 1}
            </UIText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
