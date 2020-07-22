import React from 'react';
import {Svg, Path, Circle, Ellipse} from 'react-native-svg';
import {scale} from '../styles';

export default function FemaleAvatar({size = 0.1}) {
  return (
    <Svg
      width={scale(size * 676)}
      height={scale(size * 676)}
      viewBox="0 0 676 676">
      <Path
        d="M938,450a337.10014,337.10014,0,0,1-24.55,126.7c-.04.09-.07.17-.11.26v.01a336.51307,336.51307,0,0,1-42.79,75.64q-5.055,6.75-10.43,13.22c-1.31,1.58-2.64,3.15-3.97,4.7q-10.275,11.925-21.62,22.85-2.64,2.54994-5.34,5.04c-.42.39-.84.77-1.26,1.16a337.81887,337.81887,0,0,1-27.65,22.7q-9.675,7.155-19.86,13.59-2.235,1.425-4.5,2.8-3.93,2.4-7.93,4.69-5.22,3-10.57,5.81c-1.44.77-2.88995,1.51-4.34,2.25-2.12,1.09-4.25,2.14-6.4,3.17-.37.18-.74.36-1.11.53-1.4.68-2.82,1.34-4.24,2a334.89638,334.89638,0,0,1-57.46,20.39c-.11.03-.21.05-.32.08-1.29.33-2.59.65-3.89.96-.97.24-1.95.47-2.93.69a2.48782,2.48782,0,0,1-.37.09c-2.01.47-4.02.92-6.05,1.33-1.14.24-2.28.48-3.42.71-.69.15-1.39.28-2.08.41-.87.17-1.73.33-2.6.5-.48.1-.96.18-1.45.26-1.1.2-2.2.4-3.29.59-1.86.32-3.74.63-5.61.91-1.36.21-2.71.41-4.07.6-1.6.23-3.2.44-4.81.64-.44.07-.88.12-1.32.17q-.85491.10492-1.71.21c-1.15.14-2.3.27-3.46.39-.6.07-1.19.13-1.79.19q-1.71.18-3.42.33c-1.47.13995-2.94.26-4.42.38-1.8.14-3.59.27-5.4.38-1.16.07-2.32.14-3.49.2-2.98.16-5.96.27-8.96.35-1.49.04-2.99.07-4.49.09h-.03c-1.49.02-2.99.03-4.49.03a339.151,339.151,0,0,1-45.45-3.04q-16.575-2.22-32.62-6.02c-.43-.1-.86-.2-1.28-.31-1.08-.25-2.15-.52-3.22-.79-.95-.24-1.89-.49-2.84-.74a335.35735,335.35735,0,0,1-70.6-27.19c-.11-.06-.23-.12-.34-.18-.65-.34-1.29-.67-1.93-1.02q-2.115-1.11-4.21-2.26-11.925-6.55507-23.24-14.02-2.91-1.905-5.76-3.87c-.61-.42-1.21-.84-1.81-1.26-.63-.44-1.26-.88-1.88-1.32q-2.475-1.755-4.92-3.55-10.125-7.44-19.65-15.61a339.74031,339.74031,0,0,1-59.16-65.85Q312.315,628.19,304.71,614.59A336.38981,336.38981,0,0,1,262,450c0-186.67,151.33-338,338-338S938,263.33,938,450Z"
        transform="translate(-262 -112)"
        fill="#6c63ff"
      />
      <Path
        d="M654.35,778.63c1.08-.25,2.15-.52,3.22-.79.95-.24,1.89-.49,2.84-.74.05-1.99.12006-4.18.19-6.55.59-18.56,1.98-48.44,5.26-84.44q.27-2.895.54-5.83c1.17-12.2,2.54-25.03,4.18-38.33.05-.44.11-.87.16-1.31,1.33-10.78,2.84-21.85,4.54-33.13q1.78491-11.835,3.86-23.93c.1-.56.2-1.13.3-1.69.4-2.33.81-4.65,1.23-6.99,1.17-6.51,2.42-13.06,3.73-19.61,4.61-23.04,10.1-46.22,16.65-68.77a550.90913,550.90913,0,0,1,24.53-68.61,338.80588,338.80588,0,0,1,26.74-49.83c.15-.23.3-.45.45-.68,13.15-19.81,28.18-36.62,45.34-49.19l-3.56-4.86q-24.66,18.075-45.24,48.1c-.07.1-.13.19-.2.29A327.43692,327.43692,0,0,0,722.19,410a527.39526,527.39526,0,0,0-25.68,69.37q-9.84,33.03-17.65,71.57-2.74494,13.575-5.24,27.82c-.28,1.62-.56,3.24-.84,4.87,0,.02-.01.05-.01.07-.43,2.5-.84,5-1.26,7.53q-1.56006,9.555-2.94,18.96-2.13,14.49-3.85,28.48-.56991,4.62-1.1,9.17-.75,6.42-1.42,12.67-.945,8.7-1.73,17.03l-.15,1.53c-.08.88-.16,1.76-.24,2.63C656.02,725.49,654.75,760.86,654.35,778.63Z"
        transform="translate(-262 -112)"
        opacity="0.2"
      />
      <Path
        d="M731.01,749.91c.11-.06.23-.12.34-.18,2.06-1.07,4.1-2.16,6.14-3.28.67-7.98,1.57-16.75,2.75-25.97.25-1.9.5-3.83.78-5.77.13995-1.04.29-2.09.44-3.15,1.18-8.12,2.58-16.5,4.26-24.92,6.83-34.36,18.17-69.48,37-91.16,1.01-1.17,2.04-2.29,3.11005-3.38a67.66245,67.66245,0,0,1,8.61-7.55l-3.56-4.85a77.071,77.071,0,0,0-11.8,10.79q-1.875,2.085-3.66,4.34c-17.33,21.81-28.15,54.1-34.88995,86.07-1.76,8.34-3.24,16.67005-4.5,24.78q-.48,3.18-.92,6.3C733.16,725.72,731.87,738.7,731.01,749.91Z"
        transform="translate(-262 -112)"
        opacity="0.2"
      />
      <Circle cx="569.73826" cy="175.98167" r="30.08857" opacity="0.2" />
      <Circle cx="560.0486" cy="434.99083" r="30.08857" opacity="0.2" />
      <Path
        d="M712.28551,338.52139c6.38046,35.99732-7.70456,68.59225-7.70456,68.59225s-24.42979-25.76825-30.81025-61.76557,7.70457-68.59225,7.70457-68.59225S705.90506,302.52407,712.28551,338.52139Z"
        transform="translate(-262 -112)"
        opacity="0.2"
      />
      <Path
        d="M812.28234,423.97122c-34.33494,12.555-68.83676,4.498-68.83676,4.498s21.16612-28.41279,55.50106-40.96784,68.83675-4.498,68.83675-4.498S846.61728,411.41617,812.28234,423.97122Z"
        transform="translate(-262 -112)"
        opacity="0.2"
      />
      <Path
        d="M818.10466,653.333c-24.066,8.80008-48.28314,3.0594-48.28314,3.0594s14.80161-20.00841,38.86762-28.80849,48.28314-3.0594,48.28314-3.0594S842.17067,644.53292,818.10466,653.333Z"
        transform="translate(-262 -112)"
        opacity="0.2"
      />
      <Path
        d="M701.96,648.27l1.22.63C703.06006,650.2,702.77,651,701.96,648.27Z"
        transform="translate(-262 -112)"
        fill="#2f2e41"
      />
      <Path
        d="M703.57007,648.69c.01.14.02991.29.03992.43l-.43006-.22c.01-.13.02-.27.04-.41C703.32007,646.74,703.19995,644.67,703.57007,648.69Z"
        transform="translate(-262 -112)"
        fill="#2f2e41"
      />
      <Circle cx="311.68289" cy="324.64092" r="164.20902" fill="#2f2e41" />
      <Circle cx="325.20044" cy="382.71266" r="99.44441" fill="#d0cde1" />
      <Path
        d="M814.27,685.31l-.12.03-23.13,5.55-48.16,11.56-6.57,1.58L663.05,721.6l-6.22,1.5L479.14,765.74a333.63858,333.63858,0,0,1-35.15-15.83c-.11-.06-.23-.12-.34-.18-.65-.34-1.29-.67-1.93-1.02q-2.115-1.11-4.21-2.26-11.925-6.55507-23.24-14.02-2.91-1.905-5.76-3.87c-.61-.42-1.21-.84-1.81-1.26-.63-.44-1.26-.88-1.88-1.32q-2.475-1.755-4.92-3.55c17.26-31.37,58.36-52.22,99.46-63.63,31.02-8.62,37.84-36.95,37.25-62.16a146.9523,146.9523,0,0,0-1.46-17.18,167.47773,167.47773,0,0,0-5.96-26.74l99.45,3.32,10.26,23.64a53.49156,53.49156,0,0,0-.27,7.82c.78,19.39,12.75,31.93,27.52,40.02,1.92,1.05005,3.89,2.03,5.89,2.94,24.22,11.01,52.73,11.76,52.73,11.76a101.52,101.52,0,0,1,26.09.49q3.15.48,6.12,1.15A88.13944,88.13944,0,0,1,789.09,658.23a91.60126,91.60126,0,0,1,10.41,8.63A82.67563,82.67563,0,0,1,814.27,685.31Z"
        transform="translate(-262 -112)"
        fill="#d0cde1"
      />
      <Path
        d="M829.19,698.42c-.42.39-.84.77-1.26,1.16a337.81887,337.81887,0,0,1-27.65,22.7q-9.675,7.155-19.86,13.59-2.235,1.425-4.5,2.8-3.93,2.4-7.93,4.69-5.22,3-10.57,5.81c-1.44.77-2.88995,1.51-4.34,2.25-2.12,1.09-4.25,2.14-6.4,3.17-.37.18-.74.36-1.11.53l-4.23-3.51,49.68-60.72,9.99-12.21s3.99,0,13.14,6.66a130.9934,130.9934,0,0,1,14.3,12.34C828.69,697.93,828.94,698.17,829.19,698.42Z"
        transform="translate(-262 -112)"
        fill="#d0cde1"
      />
      <Path
        d="M828.49,697.74a11.39223,11.39223,0,0,1-.56,1.84,337.81887,337.81887,0,0,1-27.65,22.7,117.95015,117.95015,0,0,1-25.79,6.13s.75,3.76,1.43,10.26q-3.93,2.4-7.93,4.69-5.22,3-10.57,5.81c-1.44.77-2.88995,1.51-4.34,2.25-2.12,1.09-4.25,2.14-6.4,3.17-.37.18-.74.36-1.11.53-1.4.68-2.82,1.34-4.24,2a334.89638,334.89638,0,0,1-57.46,20.39c-.11.03-.21.05-.32.08-1.29.33-2.59.65-3.89.96-.97.24-1.95.47-2.93.69a2.48782,2.48782,0,0,1-.37.09c-2.01.47-4.02.92-6.05,1.33-1.14.24-2.28.48-3.42.71-.69.15-1.39.28-2.08.41-.87.17-1.73.33-2.6.5-.48.1-.96.18-1.45.26-1.1.2-2.2.4-3.29.59-1.86.32-3.74.63-5.61.91-1.36.21-2.71.41-4.07.6-1.6.23-3.2.44-4.81.64-.44.07-.88.12-1.32.17q-.85491.10492-1.71.21c-1.15.14-2.3.27-3.46.39-.6.07-1.19.13-1.79.19q-1.71.18-3.42.33c-1.47.13995-2.94.26-4.42.38-1.8.14-3.59.27-5.4.38-1.16.07-2.32.14-3.49.2-2.98.16-5.96.27-8.96.35-1.49.04-2.99.07-4.49.09h-.03c-1.49.02-2.99.03-4.49.03a339.151,339.151,0,0,1-45.45-3.04q-16.575-2.22-32.62-6.02c-.43-.1-.86-.2-1.28-.31-1.08-.25-2.15-.52-3.22-.79-.95-.24-1.89-.49-2.84-.74a335.35735,335.35735,0,0,1-70.6-27.19c-.11-.06-.23-.12-.34-.18-.65-.34-1.29-.67-1.93-1.02,54.89-12.79,141.63-32.96,216.9-50.24q3.165-.72,6.29-1.44c27.8-6.38,53.84-12.32,75.87006-17.29q3.42-.765,6.69995-1.5c23.67-5.32,42.05005-9.36,52.02-11.38a81.48836,81.48836,0,0,1,8.14-1.43l20.81,32.25Z"
        transform="translate(-262 -112)"
        fill="#2f2e41"
      />
      <Circle cx="161.4491" cy="205.85142" r="48.91333" fill="#2f2e41" />
      <Circle cx="461.91668" cy="191.87618" r="48.91333" fill="#2f2e41" />
      <Path
        d="M671.50954,282.91333a48.91227,48.91227,0,0,1,43.67262-48.62417,48.91338,48.91338,0,1,0,0,97.24833A48.91227,48.91227,0,0,1,671.50954,282.91333Z"
        transform="translate(-262 -112)"
        fill="#2f2e41"
      />
      <Path
        d="M368.796,357.41647a48.91227,48.91227,0,0,1-2.83554-65.296,48.91337,48.91337,0,1,0,68.06011,69.46264A48.91226,48.91226,0,0,1,368.796,357.41647Z"
        transform="translate(-262 -112)"
        fill="#2f2e41"
      />
      <Path
        d="M573.68289,359.77712c-57.88732,0-104.81427,27.37407-104.81427,61.14166,0,15.10906,9.43269,28.91775,25.003,39.58556l20.1779-14.62031-5.48723,22.90446c2.27682,1.05513,4.60162,2.07636,7.02643,3.02019l30.1437-35.16776v43.20369a175.95757,175.95757,0,0,0,27.95047,2.21583c57.88732,0,104.81427-27.37407,104.81427-61.14166S631.57021,359.77712,573.68289,359.77712Z"
        transform="translate(-262 -112)"
        fill="#2f2e41"
      />
      <Path
        d="M675.00335,303.87618s-7.59666,34.93809,39.87428,48.91333Z"
        transform="translate(-262 -112)"
        fill="#2f2e41"
      />
      <Path
        d="M468.86862,310.23519s17.469,39.06051-34.93809,56.52955Z"
        transform="translate(-262 -112)"
        fill="#2f2e41"
      />
      <Ellipse
        cx="489.41344"
        cy="514.60154"
        rx="8.28703"
        ry="19.88888"
        transform="translate(-382.60837 38.98959) rotate(-15.63946)"
        fill="#d0cde1"
      />
      <Ellipse
        cx="688.30226"
        cy="498.02747"
        rx="19.88888"
        ry="8.28703"
        transform="translate(-113.09381 1042.41397) rotate(-86.47577)"
        fill="#d0cde1"
      />
    </Svg>
  );
}
