/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useStyles} from '../assets/styles';
import UIText from '../components/UIText';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import BackSvg from '../assets/icons/BackSvg';
import Layout from '../components/Layout';

const subjectList = [
  {
    name: 'UTME',
    subtext: 'Very Rich Library of Resources',
    value: 'utme',
  },
  {
    name: 'WASCCE',
    subtext: "Limited Resources (we'll keep updating)",
    value: 'wassce',
  },
  {
    name: 'Post-UTME',
    subtext: "Very Limited Resources (we'll keep updating)",
    value: 'post-utme',
  },
];

export default function ExamType(props) {
  const {homeScreenStyles} = useStyles();
  return (
    <Layout imageBackground>
      <View style={homeScreenStyles.headerContainer}>
        <TouchableOpacity
          style={homeScreenStyles.iconContainer}
          onPress={props.navigation.goBack}>
          <BackSvg />
        </TouchableOpacity>
      </View>
      <UIText type="bold" style={homeScreenStyles.centerText}>
        Select an Exam Type
      </UIText>
      <View style={homeScreenStyles.bodyShaded}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {subjectList.map((subject) => (
            <TouchableOpacity
              key={subject.value}
              onPress={() => {
                props.navigation.navigate('TakeExam', {
                  examType: subject.value,
                  subject: props.route.params.subject,
                });
              }}
              style={homeScreenStyles.menu}>
              <UIText type="small" style={homeScreenStyles.examMenu}>
                {subject.name}
              </UIText>
              <UIText type="small">{subject.subtext}</UIText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
}
