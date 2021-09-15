import React from 'react';
import Svg, {Defs, Stop, Path, LinearGradient} from 'react-native-svg';

export default function Blob() {
  return (
    <Svg width="500" height="500" id="blobSvg">
      <Defs>
        <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#DA6944" stopOpacity="1" />
          <Stop offset="1" stopColor="#5941A9" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Path
        id="blob"
        d="M425.5,318.5Q413,387,349,418.5Q285,450,218,436Q151,422,98,373.5Q45,325,61.5,256Q78,187,113.5,131Q149,75,219.5,48Q290,21,321,92.5Q352,164,395,207Q438,250,425.5,318.5Z"
        fill="url(#gradient)"
      />
    </Svg>
  );
}
