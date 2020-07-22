import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale, useStyles} from '../styles';

export default function BackSvg({size = 1}) {
  const {textColor} = useStyles();
  return (
    <Svg
      width={scale(size * 21)}
      height={scale(size * 20)}
      viewBox="0 0 21 20"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.481445 10L11 19.2038V13.8718C14.3098 13.5189 17.0461 14.4603 19.2929 16.7071L21 18.4142V16C21 9.73446 17.5487 6.33141 11 6.02302V0.796234L0.481445 10ZM3.51863 10L9.00004 5.20377V8H10C15.2007 8 18.0505 9.85103 18.7988 13.7165C16.2556 12.0145 13.2502 11.4445 9.83564 12.0136L9.00004 12.1529V14.7962L3.51863 10Z"
        fill={textColor || 'black'}
      />
    </Svg>
  );
}
