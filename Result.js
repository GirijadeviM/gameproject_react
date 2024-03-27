import React from "react";
function Result({secretNum,term}){

    let result;
    if (term){
    if(secretNum < term){
    result='Higher';
     }
    else if(term<secretNum){
    result='Lower';
   }
   else if(term==secretNum){
    result='Correct!!!!!!!';
   }
   else
   {
    result="Enter the Valid Input";
   }
}
   return(
    <>
    <h3>You Guessed:{result}</h3>
    </>
)
}
export default Result;
