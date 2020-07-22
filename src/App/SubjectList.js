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
    name: 'English',
    value: 'english',
  },
  {
    name: 'Mathematics',
    value: 'mathematics ',
  },
  {
    name: 'Commerce',
    value: 'commerce ',
  },
  {
    name: 'Accounting',
    value: 'accounting',
  },
  {
    name: 'Biology',
    value: 'biology ',
  },
  {
    name: 'Physics',
    value: 'physics',
  },
  {
    name: 'Chemistry',
    value: 'chemistry',
  },
  {
    name: 'Literature in English',
    value: 'englishlit',
  },
  {
    name: 'Government',
    value: 'government',
  },
  {
    name: 'Christian Religious Knowledge',
    value: 'crk',
  },
  {
    name: 'Geography',
    value: 'geography',
  },
  {
    name: 'Economics',
    value: 'economics',
  },
  {
    name: 'Islamic Religious Knowledge',
    value: 'irk',
  },
  {
    name: 'Civil Education',
    value: 'civiledu',
  },
  {
    name: 'Insurance',
    value: 'insurance',
  },
  {
    name: 'Current Affairs',
    value: 'currentaffairs',
  },
  {
    name: 'History',
    value: 'history',
  },
];

export default function SubjectList(props) {
  const {homeScreenStyles} = useStyles();
  const {examType} = props.route.params;

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
        Select a Subject
      </UIText>
      <View style={homeScreenStyles.bodyShaded}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {subjectList.map((subject) => (
            <TouchableOpacity
              key={subject.value}
              style={homeScreenStyles.menu}
              onPress={() => {
                props.navigation.navigate('TakeExam', {
                  examType,
                  subject: subject.value,
                });
              }}>
              <UIText type="small">{subject.name}</UIText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
}
