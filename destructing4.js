let array=[1,2,3,4,5];

function randomElement(array)
{
    let [first,second,...rest]=array;
   
let last=rest.pop();
return [first,second,last];
}

const result=randomElement(array);
console.log(result);