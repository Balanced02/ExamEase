import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale, useStyles} from '../styles';

export default function PointsSvg({size = 1}) {
  const {textColor} = useStyles();
  return (
    <Svg
      width={scale(size * 24)}
      height={scale(size * 24)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6H6V2H8V6ZM8 22V12H9C10.1046 12 11 11.1046 11 10V9C11 7.89543 10.1046 7 9 7H5C3.89543 7 3 7.89543 3 9V10C3 11.1046 3.89543 12 5 12H6V22H8ZM18 22V17H19C20.1046 17 21 16.1046 21 15V14C21 12.8954 20.1046 12 19 12H15C13.8954 12 13 12.8954 13 14V15C13 16.1046 13.8954 17 15 17H16V22H18ZM16 11H18V2H16V11ZM5 9V10H9V9H5ZM15 15V14H19V15H15Z"
        fill={textColor || 'black'}
      />
    </Svg>
  );
}