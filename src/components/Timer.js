import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import UIText from './UIText';

export default function Timer({onSubmit}) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    var duration = 60 * 50;
    var timer = duration,
      minutes,
      seconds;
    let interval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      setTime(minutes + ':' + seconds);

      if (--timer < 0) {
        clearInterval(interval);
        onSubmit();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <UIText>{time}</UIText>
    </View>
  );
}
