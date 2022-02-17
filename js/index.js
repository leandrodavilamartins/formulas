import {sum, getData} from './functions.js';

console.log(sum(3,4));

getData().then( res => {
    console.log(res.docs);
})