const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    const finalresult = document.querySelector('#finalresult');
    

    if(height < 0 || height === "" || isNaN(height))
    {
        result.innerHTML =`Please enter a valid height: ${height}`;
    
    } 
    else if(weight < 0 || weight === "" || isNaN(weight))
    {
        result.innerHTML =`Please enter a valid weight: ${weight}`;
    }
    else{
       const  BMI =  (weight/((height*height)/10000)).toFixed(2);
       //To print the calcukated BMI
       result.innerHTML =`<span>Your BMI is : ${BMI}</span>`;

       if(BMI<18.6)
        finalresult.innerHTML = `You are Underweight according to your BMI`;
        else if (BMI>=18.6 && BMI<=24.9)
            finalresult.innerHTML = `You are Healthy according to your BMI`;
        else 
        finalresult.innerHTML = `You are Overweight. Please pay attention to your health`;
    }

    //To print the final result based on Weight Guide

    
});