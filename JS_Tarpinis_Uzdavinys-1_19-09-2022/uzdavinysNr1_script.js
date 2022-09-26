//1-1
const carsList = cars.filter((obj) => {
    return obj.Miles_per_Gallon;
  });
  console.log(carsList);

//1-2
//1-3
//1-4

//1-5
cars.sort((a, b)=>{
    return a.Weight_in_lbs -b.Weight_in_lbs
})

//1-6
const carsUSA = cars.filter(item => item.Origin === "USA");
console.log(carsUSA);
