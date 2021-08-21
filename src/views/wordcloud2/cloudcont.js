import React, {useState, useEffect} from 'react';
//import TransitionCloud from './cloud';
//import WordCloud from "react-d3-cloud";
import {Button} from 'antd';
import tweets from '../../data/tweets_mini.json';
import WordCloud from './d3cloud';

const useless = [
    '', 'a', 'la', 'el', 'y', 'de', 'para', 'si', 'no', 'una', 'uno', 'un', 'las', 'es', 'los', 'al', 'por', 'lo',
    'del', 'que', 'con', 'su', 'en', 'se', 'rt'
]

const getWordValues = (arr) => {
    let temp_arr = arr.map((d) => {
        if (d.text !== undefined){
            //https://stackoverflow.com/questions/40102199/counting-words-in-javascript-and-push-it-into-an-object
            return d.text.replace(/[!\.,:;\?]/g, '').split(" ").reduce(function(count, word) {
                count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
            
                return count;
                }, {});
        } else {
            return [];
        }
    });
    // https://stackoverflow.com/questions/55874797/sum-values-of-matching-keys-in-array-of-objects/55874868
    let wordsCount = temp_arr.reduce((acc, statsFields) => {
        Object.entries(statsFields).forEach(([key, value]) => acc[key] = (acc[key] || 0) + value);
        return acc;
    }, {});
    
    return wordsCount;
};

const filterWords = (arr) => {
    const words = getWordValues(arr);
    // https://stackoverflow.com/questions/5072136/javascript-filter-for-objects
    Object.filter = (obj, predicate) => 
    Object.assign(...Object.keys(obj)
                    .filter( key => predicate(obj[key]) )
                    .map( key => ({ [key]: obj[key] }) ) );

    const filtered = Object.filter(words, count => count > 5);

    const keys = Object.keys(filtered);
    const values = Object.values(filtered);
    const result = [];

    for(let i in keys){
        if (!useless.includes(keys[i].toLowerCase())){
            result.push({text: keys[i], size: values[i], rotate: Math.random() < 0.5 ? 0 : 90});
        }
    }
    return result;
}

const data_1 = filterWords(tweets)
console.log(data_1);

export default function CloudContainer() {

    const [dataset, setData] = useState([]);
    
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

    const data_2 = [
        { text: "Hey", value: 1000, rotate: 90 },
        { text: "lol", value: 200, rotate: 90 },
        { text: "first impression", value: 800, rotate: 90 },
        { text: "very cool", value: 1000000, rotate: 0 }
    ];
    let change = false;

    //const wordScale = rd3.Scale.Linear().range([10, 60]);

    const fontSizeMapper = (word) => {
        return word.value//wordScale(Math.log2(word.value) * 5);
    };
    const rotate = (word) => word.rotate;

    const uwu = <WordCloud data={data_1}/>
    console.log(uwu)
    //uwu.createWordCloud().update(data_1)
 
    return(
        <div>
            {/* <TransitionCloud data={data_1} fontSizeMapper={fontSizeMapper} rotate={rotate} /> */}
            {uwu}
            <Button
                    type="primary"
                    size="large"
                    onClick={() => {if(change){
                                        setData(data_2);
                                    } else {
                                        setData(data_1);
                                    };
                                    change = !change;
                    }}
                    style={{
                      backgroundColor: "blue",
                      textAlign: "center",
                      marginTop: "10px",
                      borderRadius: "10px",
                      fontSize: "15px",
                      color: "white"
                    }}
                    danger
                  >
                    Cambiar wea
                  </Button>
        </div>
    )
}
