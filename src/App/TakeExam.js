/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {View, LayoutAnimation, Platform, UIManager} from 'react-native';
import {useStyles, scaleVertical, scale, fonts} from '../assets/styles';
import UIText from '../components/UIText';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import BackSvg from '../assets/icons/BackSvg';
import FilterSvg from '../assets/icons/FilterSvg';
import Layout from '../components/Layout';
import FetchData from '../components/FetchData';
import Button from '../components/Button';
import QuestionComponent from '../components/QuestionComponent';
import PreviousNextButton from '../components/PreviousNextButton';
import QuestionIndexes from '../components/QuestionIndexes';
import CloseSvg from '../assets/icons/CloseSvg';
import AppContext from '../../AppContext';
import Timer from '../components/Timer';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function TakeExam(props) {
  const {homeScreenStyles} = useStyles();
  const [data, setData] = useState(null);
  const [ready, setReady] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [examMode, setExamMode] = useState(false);
  const [resultMode, setResultMode] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showIndexes, setShowIndexes] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  const {points, dispatch} = useContext(AppContext);

  const {examType, subject} = props.route.params;

  const nextQuestion = () =>
    setCurrentQuestionIndex(
      currentQuestionIndex === data?.length - 1
        ? data.length - 1
        : currentQuestionIndex + 1,
    );

  const setAnswer = (questionId, answerKey) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerKey,
    });
  };

  const submitAnswers = () => {
    let correctAnswers = 0;
    data.map((dat) => {
      if (selectedAnswers[dat.id] === dat.answer) {
        correctAnswers += 1;
      }
    });
    dispatch({
      points: Number(points)
        ? Number(points) + correctAnswers
        : Number(correctAnswers),
    });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setScore(correctAnswers);
    setExamMode(false);
    setResultMode(true);
  };

  const onFetchSuccess = (result) => {
    if (!ready) {
      console.log('updated');
      setData(result?.data);
    }
    if (!result || !result.data || !result.data.length) {
      console.log('Nothing found');
      setEmpty(true);
    }
    setReady(true);
  };

  return (
    <Layout imageBackground>
      <View
        style={[
          homeScreenStyles.headerContainer,
          {alignItems: 'center', marginBottom: -scaleVertical(10)},
        ]}>
        <View>
          <TouchableOpacity
            style={homeScreenStyles.iconContainer}
            onPress={props.navigation.goBack}>
            <BackSvg />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {examMode && (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <UIText type="bold" style={homeScreenStyles.centerText}>
                Taking Exam
              </UIText>
              {!reviewMode ? <Timer onSubmit={submitAnswers} /> : null}
            </View>
          )}
        </View>
      </View>
      {!examMode && !resultMode ? (
        <UIText type="bold" style={homeScreenStyles.centerText}>
          Instruction
        </UIText>
      ) : null}
      {empty ? (
        <View style={homeScreenStyles.emptyView}>
          <UIText style={homeScreenStyles.centerText}>
            Cannot find Questions for this subject, we're uploading more
            questions. Please check back later
          </UIText>
          <Button text="Go Back" onPress={() => props.navigation.goBack()} />
        </View>
      ) : (
        <View style={homeScreenStyles.bodyShaded}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <FetchData
              url={`subject=${subject}&type=${examType}`}
              onSuccess={onFetchSuccess}
            />
            {!examMode && !resultMode ? (
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <View style={homeScreenStyles.card}>
                  <UIText style={homeScreenStyles.paragraph}>
                    1. There are {data?.length ?? '...'} questions in this
                    section and you ought to answer all within the time limit.
                  </UIText>
                  <UIText style={homeScreenStyles.paragraph}>
                    2. You have 🕓 50 minutes to answer all questions, after 50
                    mins the test automatically submits.
                  </UIText>
                  <UIText style={homeScreenStyles.paragraph}>
                    3. You don't need your internet connection at this point and
                    to retake this exam.
                  </UIText>
                  <UIText style={homeScreenStyles.paragraph}>
                    4. Keep practcing, come back for more random questions and
                    always check the questions and answer after you are done.
                    Good Luck
                  </UIText>
                </View>
              </View>
            ) : null}
            {examMode ? (
              <View
                style={{
                  flex: 1,
                }}>
                <QuestionComponent
                  question={data ? data[currentQuestionIndex].question : ''}
                  section={data ? data[currentQuestionIndex].section : ''}
                  questionNumber={currentQuestionIndex + 1}
                  answers={data ? data[currentQuestionIndex].option : {}}
                  reviewMode={reviewMode}
                  correctAnswer={
                    data ? data[currentQuestionIndex].answer : null
                  }
                  setAnswer={(answerKey) => {
                    setAnswer(
                      data ? data[currentQuestionIndex].id : '',
                      answerKey,
                    );
                    nextQuestion();
                  }}
                  userAnswer={
                    selectedAnswers[data ? data[currentQuestionIndex].id : '']
                  }
                />
              </View>
            ) : null}
            {resultMode ? (
              <View>
                <View
                  style={{
                    alignItems: 'center',
                    marginVertical: scale(20),
                  }}>
                  <View
                    style={{
                      height: scale(20),
                      width: scale(250),
                      borderRadius: scale(20),
                      backgroundColor: 'red',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: scale(20),
                        width: scale((score / data.length) * 250),
                        borderRadius: scale(20),
                        backgroundColor: 'green',
                        alignItems: 'center',
                      }}>
                      {score > 10 ? <UIText>{score}</UIText> : null}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    paddingHorizontal: scale(50),
                    marginBottom: scale(20),
                  }}>
                  <UIText
                    style={{
                      textAlign: 'center',
                      fontSize: scale(fonts.h1.fontSize),
                    }}
                    type="bold">
                    {(score / data.length) * 100}%
                  </UIText>
                </View>
                <View>
                  <UIText
                    style={[
                      homeScreenStyles.centerText,
                      {
                        marginBottom: scale(10),
                      },
                    ]}>
                    Result Breakdown
                  </UIText>
                  <QuestionIndexes
                    data={data}
                    selectedAnswers={selectedAnswers}
                    onlyCorrect
                  />
                </View>
                <View style={homeScreenStyles.row}>
                  <Button
                    text="End"
                    inverted
                    buttonStyle={homeScreenStyles.submit}
                  />
                  <Button
                    text="Review Answers"
                    buttonStyle={homeScreenStyles.submit}
                    onPress={() => {
                      setResultMode(false);
                      setReviewMode(true);
                      setExamMode(true);
                    }}
                  />
                </View>
              </View>
            ) : null}
            <View>
              {!resultMode ? (
                !examMode ? (
                  <Button
                    onPress={() => {
                      LayoutAnimation.configureNext(
                        LayoutAnimation.Presets.spring,
                      );
                      setExamMode(!examMode);
                    }}
                    text={'Start Exam'}
                    loading={!data}
                    disabled={!data || !data.length}
                  />
                ) : (
                  <PreviousNextButton
                    prevQuestion={() =>
                      setCurrentQuestionIndex(
                        currentQuestionIndex === 0
                          ? 0
                          : currentQuestionIndex - 1,
                      )
                    }
                    nextQuestion={nextQuestion}
                  />
                )
              ) : null}
            </View>
          </ScrollView>
          <View style={homeScreenStyles.row}>
            {examMode ? (
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                  setShowIndexes(!showIndexes);
                }}
                style={homeScreenStyles.indexContainer}>
                <View>
                  {!showIndexes ? <FilterSvg size={0.9} /> : <CloseSvg />}
                </View>
                <UIText type="small">
                  {'  '}
                  {!showIndexes ? 'Select Question' : 'Close'}
                </UIText>
              </TouchableOpacity>
            ) : null}
            {examMode ? (
              <Button
                text={!reviewMode ? 'Submit' : 'Done'}
                buttonStyle={homeScreenStyles.submit}
                onPress={
                  !reviewMode ? submitAnswers : () => props.navigation.goBack()
                }
              />
            ) : null}
          </View>
          {showIndexes ? (
            <QuestionIndexes
              data={data}
              selectedAnswers={selectedAnswers}
              onSelect={setCurrentQuestionIndex}
            />
          ) : null}
        </View>
      )}
    </Layout>
  );
}
