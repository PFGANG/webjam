import wordsjson from '../data/candidates.json';
const sortArray = require('sort-array')

const useless = [
    '', 'a', 'la', 'el', 'y', 'de', 'para', 'si', 'no', 'una', 'uno', 'un', 'las', 'es', 'los', 'al', 'por', 'lo',
    'del', 'que', 'con', 'su', 'en', 'se', 'rt', 'q', 'aqui', 'esto', 'esta', 'este'
]

const getCandidatesWords = (arr) => {
    
    const wordsCandidates = {};
    arr.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.created_at) - new Date(a.created_at);
      });
    for(let i in arr){
        if (i > 3000){
            break;
        }
        let tempWords = arr[i].text.replace(/[!\.,:;\?]/g, '').split(" ").reduce(function(count, word) {
            if (!useless.includes(word.toLowerCase())){
                count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
            }
            return count;
            }, {});

        if (wordsCandidates.hasOwnProperty(arr[i].account)){
            // https://stackoverflow.com/questions/67390960/javascript-how-to-merge-two-objects-and-sum-the-values-of-the-same-key
            wordsCandidates[arr[i].account] = Object.entries(tempWords).reduce((acc, [key, value]) => 
            // if key is already in map1, add the values, otherwise, create new pair
            ({ ...acc, [key]: (acc[key] || 0) + value })
        , { ...wordsCandidates[arr[i].account]});
        } else {
            wordsCandidates[arr[i].account] = tempWords;
        }
        
    }

    for (let i in wordsCandidates){
        const keys = Object.keys(wordsCandidates[i]);
        const values = Object.values(wordsCandidates[i]);
        const result = [];

        for(let i in keys){
            if (values[i] > 20){
                result.push({text: keys[i], value: values[i], rotate: Math.random() < 0.5 ? 0 : 90});
            }
        }
        wordsCandidates[i] = result;
    }
    return wordsCandidates;
    
}

export default getCandidatesWords;
