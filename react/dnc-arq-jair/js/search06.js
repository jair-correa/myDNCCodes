let height = 1.70;
let weight= 70;

function calculateIMC(imc){
    let imcValue = weight / Math.pow(height, 2);
    if (imcValue < 18.5){
        imc = 'Underweight';
    }
    else if(imcValue >= 18.5 && imcValue < 24.9){
        imc ='Normal weight';
    }
    else if(imcValue >= 25 && imcValue < 29.9){
        imc = 'Overweight';
    
    }
    else if(imcValue >= 30 && imcValue < 34.9){
        imc = 'Obesity class I';
    }

  return imc;  
}

console.log(calculateIMC());