let result = [];
let cities = [
  { name: "hyd", population: 500 },
  { name: "nagpur", poputation: "200" },
  { name: "Mumbai", population: 600 },
];
for (let i = 0; i < cities.length; i++) {
  if (cities[i].population === 500) {
    result.push(cities[i].name);
  }
}
console.log(result);
let resultCity=cities.filter(function(e){
    return e.population===500;
})
console.log(resultCity)
