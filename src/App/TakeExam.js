/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, LayoutAnimation, Platform, UIManager} from 'react-native';
import {useStyles, scaleVertical} from '../assets/styles';
import UIText from '../components/UIText';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import BackSvg from '../assets/icons/BackSvg';
import Layout from '../components/Layout';
import FetchData from '../components/FetchData';
import Button from '../components/Button';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TakeExam(props) {
  const {homeScreenStyles} = useStyles();
  const [data, setData] = useState(null);
  const [examMode, setExamMode] = useState(false);

  const {examType, subject} = props.route.params;

  return (
    <Layout imageBackground>
      <View
        style={[
          homeScreenStyles.headerContainer,
          {alignItems: 'center', marginBottom: -scaleVertical(10)},
        ]}>
        <TouchableOpacity
          style={homeScreenStyles.iconContainer}
          onPress={props.navigation.goBack}>
          <BackSvg />
        </TouchableOpacity>
        {examMode && (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <UIText type="bold" style={homeScreenStyles.centerText}>
              Taking Exam
            </UIText>
          </View>
        )}
      </View>
      {!examMode && (
        <UIText type="bold" style={homeScreenStyles.centerText}>
          Instruction
        </UIText>
      )}
      <View style={homeScreenStyles.bodyShaded}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}>
          <FetchData
            url={`subject=${subject}&type=${examType}`}
            onSuccess={(result) => setData(result?.data)}
          />
          <View
            style={{
              justifyContent: 'center',
              flex: 1,
            }}>
            <View style={homeScreenStyles.card}>
              <UIText style={homeScreenStyles.paragraph}>
                1. There are {data?.length ?? '...'} questions in this section
                and you ought to answer all within the time limit.
              </UIText>
              <UIText style={homeScreenStyles.paragraph}>
                2. You have 50mins to answer all questions, after 50 mins the
                test automatically submits.
              </UIText>
              <UIText style={homeScreenStyles.paragraph}>
                3. You don't need your internet connection at this point and to
                retake this exam.
              </UIText>
              <UIText style={homeScreenStyles.paragraph}>
                4. Keep practcing and always check the questions and answer
                after you are done. Good Luck
              </UIText>
            </View>
          </View>
          <View>
            <Button
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                setExamMode(!examMode);
              }}
              text={'Start Exam'}
              loading={!data}
            />
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
}
