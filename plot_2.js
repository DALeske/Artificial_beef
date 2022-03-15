console.log(cityGrowths);

// sort cities in descending order
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// select top 5 growth
var topFiveCities = sortedCities.slice(0,5);

// create separate arrays for the city names and population growth
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

//use Plotly to create a bar chart with the arrays

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  // TOP 5 by population
// Sort
var sortedPop = cityGrowths.sort((a,b) =>
a.population - b.population).reverse(); 

// select top 7 population
var topSevenPop = sortedPop.slice(0,7);

// create separate arrays for the city names and population
var topSevenPopNames = topSevenPop.map(city => city.City);
var topSevenPopPop = topSevenPop.map(city => parseInt(city.population));

// Craete Bar Graph
var trace = {
    x: topSevenPopNames,
    y: topSevenPopPop,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Largest Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population"}
  };
  Plotly.newPlot("bar-plot2", data, layout);