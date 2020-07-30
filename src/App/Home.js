/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useStyles} from '../assets/styles';
import UIText from '../components/UIText';
import FemaleAvatar from '../assets/icons/FemaleAvatar';
import PointsSvg from '../assets/icons/PointsSvg';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SettingsSvg from '../assets/icons/SettingsSvg';
import Layout from '../components/Layout';

export default function Home(props) {
  const {homeScreenStyles} = useStyles();
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
          <UIText type="bold">0</UIText>
        </View>
      </View>
      <ScrollView
        // style={homeScreenStyles.container}
        contentContainerStyle={{
          flex: 1,
        }}>
        <View style={homeScreenStyles.bodyShaded}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ExamType');
            }}>
            <UIText type="small">Subject List</UIText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
}
