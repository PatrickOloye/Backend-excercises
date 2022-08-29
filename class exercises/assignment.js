class Temperature {
    
    //convert Celsius to Fahrenheit 
    convertToFah = (Celsius) => {
        let fahrenheit;
        fahrenheit = (Celsius * 9/5) + 32
        return fahrenheit
    }

    //convert to censius
    convertToCel = (fahrenheit) => {
        let celsius;
        celsius = (fahrenheit - 32) / 1.8
        return celsius
    }
    

};

let Temp1 = new Temperature();
let Temp2 = new Temperature();

console.log(Temp1.convertToFah(20));
console.log(Temp2.convertToCel(10));

