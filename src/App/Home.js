/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Image} from 'react-native';
import {useStyles, scale} from '../assets/styles';
import UIText from '../components/UIText';
import FemaleAvatar from '../assets/icons/FemaleAvatar';
import PointsSvg from '../assets/icons/PointsSvg';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SettingsSvg from '../assets/icons/SettingsSvg';
import images from '../assets/images/images';
import Layout from '../components/Layout';
import AppContext from '../../AppContext';

const subjectList = [
  {
    name: 'English',
    value: 'english',
    icon: 'English',
  },
  {
    name: 'Mathematics',
    value: 'mathematics ',
    icon: 'Calculator',
  },
];

const scienceSubject = [
  {
    name: 'Biology',
    value: 'biology ',
    icon: 'Biology',
  },
  {
    name: 'Physics',
    value: 'physics',
    icon: 'Physics',
  },
  {
    name: 'Chemistry',
    value: 'chemistry',
    icon: 'Chemistry',
  },
];

const otherSubjects = [
  {
    name: 'History',
    value: 'history ',
    icon: 'History',
  },
  {
    name: 'Government',
    value: 'government ',
    icon: 'Government',
  },
];

export default function Home(props) {
  const {homeScreenStyles} = useStyles();
  const {points} = useContext(AppContext);
  return (
    <Layout imageBackground>
      <View style={homeScreenStyles.headerContainer}>
        <FemaleAvatar />
        <View style={homeScreenStyles.nameContainer}>
          <UIText>Hi,</UIText>
          <UIText type="bold">Guest</UIText>
        </View>
        <TouchableOpacity
          style={homeScreenStyles.iconContainer}
          onPress={() => {
            props.navigation.navigate('ColourPicker');
          }}>
          <SettingsSvg />
        </TouchableOpacity>
      </View>
      <View style={homeScreenStyles.iconTextContainer}>
        <View style={homeScreenStyles.iconContainer}>
          <PointsSvg />
        </View>
        <View style={homeScreenStyles.nameContainer}>
          <UIText type="small">Acquired Points:</UIText>
          <UIText type="bold">{points}</UIText>
        </View>
      </View>
      <ScrollView
        // style={homeScreenStyles.container}
        contentContainerStyle={{
          flex: 1,
        }}>
        <View style={homeScreenStyles.bodyShaded}>
          <View style={homeScreenStyles.subjectContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <UIText type="small">General Subjects:</UIText>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('SubjectList');
                }}
                style={{
                  paddingHorizontal: scale(10),
                }}>
                <UIText type="light">See All</UIText>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {subjectList.map((sub, i) => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('ExamType', {
                      subject: sub.value,
                    });
                  }}
                  key={`${sub.name}-${i}`}
                  style={[homeScreenStyles.card, homeScreenStyles.subjectCard]}>
                  <Image
                    source={sub.icon ? images[sub.icon] : images.Calculator}
                    style={{
                      width: scale(50),
                      height: scale(50),
                      marginBottom: scale(10),
                    }}
                  />
                  <UIText>{sub.name}</UIText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={homeScreenStyles.subjectContainer}>
            <View>
              <UIText type="small">Sciences:</UIText>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {scienceSubject.map((sub, i) => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('ExamType', {
                      subject: sub.value,
                    });
                  }}
                  key={`${sub.name}-${i}`}
                  style={[homeScreenStyles.card, homeScreenStyles.subjectCard]}>
                  <Image
                    source={sub.icon ? images[sub.icon] : images.Calculator}
                    style={{
                      width: scale(50),
                      height: scale(50),
                      marginBottom: scale(10),
                    }}
                  />
                  <UIText>{sub.name}</UIText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={homeScreenStyles.subjectContainer}>
            <View>
              <UIText type="small">Art and Commercial:</UIText>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {otherSubjects.map((sub, i) => (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('ExamType', {
                      subject: sub.value,
                    });
                  }}
                  key={`${sub.name}-${i}`}
                  style={[homeScreenStyles.card, homeScreenStyles.subjectCard]}>
                  <Image
                    source={sub.icon ? images[sub.icon] : images.Calculator}
                    style={{
                      width: scale(50),
                      height: scale(50),
                      marginBottom: scale(10),
                    }}
                  />
                  <UIText>{sub.name}</UIText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}
