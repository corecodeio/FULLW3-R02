const promedio = (numbers)=>{
    if (numbers.length===0) return 0;
    return numbers.reduce((prev,curr)=> prev+curr)/numbers.length
}

const PI = 3.14

const areaCirculo = (radio) =>{
    return PI*Math.pow(radio,2)
}
//console.log(promedio([1,2,3,4,5,6]))
//console.log(module)
//module.exports = promedio // {}  ()=>{}

module.exports = {
    promedio, // promedio: promedio
    PI,
    areaCirculo
}