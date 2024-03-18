const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height`;
    } else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2); // BMI formula is weight / (height * height) in meters
        results.innerHTML = `<p>Your BMI is: ${bmi}</p>`;
    }
});
