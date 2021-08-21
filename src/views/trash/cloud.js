import React from "react";
import { render } from "react-dom";
import WordCloud from "react-d3-cloud";
import rd3 from 'react-d3-library';
import useD3Transition from 'use-d3-transition'


const data = {};

data.width = 500;
data.height = 500;

data.dataset = [
  { text: "Hey", value: 1000, rotate: 90 },
  { text: "lol", value: 200, rotate: 90 },
  { text: "first impression", value: 800, rotate: 90 },
  { text: "very cool", value: 1000000, rotate: 0 },
  { text: "duck", value: 30, rotate: 0 },
  { text: "duck", value: 90, rotate: 0 },
  { text: "duck", value: 100, rotate: 0 },
  { text: "duck", value: 1001, rotate: 90 },
  { text: "duck", value: 320, rotate: 90 }
];

//const wordScale = rd3.Scale.Linear().range([10, 60]);

const fontSizeMapper = (word) => {
    return Math.log2(word.value) * 5;//wordScale(Math.log2(word.value) * 5);
};
const rotate = (word) => word.rotate;

// export default function Cloud(){
//     return (
//         <div>
//             <WordCloud data={data.dataset} fontSizeMapper={fontSizeMapper} rotate={rotate} />
//         </div>
//     )
// };

const TransitionCloud = ({data, fontSizeMapper, rotate, ...attr}) => {
    const {ref, attrState} = useD3Transition({
        attrsToTransitionTo: {data, fontSizeMapper, rotate},
        deps: [data, fontSizeMapper, rotate],
    })

    return (
        <WordCloud
            {...attr}

            ref={ref}
            data={attrState.data}
            fontSizeMapper={attrState.fontSizeMapper}
            rotate={attrState.rotate}
        />
    )
}

export default TransitionCloud;