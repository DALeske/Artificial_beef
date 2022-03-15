
// Line plot
// #1
//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// #2
//Plotly.newPlot("coolplot", [{x: [10,15,20,25,30], y: [30,20,25,15,10]}]);

// Alternate #1
// var line = {
//     x: [1, 2, 3], 
//     y: [10, 20, 30]
// };
// Plotly.newPlot("plotArea", [line]);





//Bar graph
// converted from line
//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30],type: "bar"}]);

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
var layout = {
    title: "Luncheon Survey",
    xaxis: { title: "Food Option" },
    yaxis: { title: "Number of Respondents" }
};
Plotly.newPlot("plotArea", [trace], layout);



// Drink plot
// var data = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };
// var layout = {
//     title: "Preference of Nonalcoholic Beverages",
//     xaxis: { title: "Type of drink" },
//     yaxis: { title: "Percent of drinks ordered" }
// };
// Plotly.newPlot("coolplot", [data], layout);


// Pie
// var data = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"
// };
// var layout = {
//     title: "Preference of Nonalcoholic Beverages",
//     xaxis: { title: "Type of drink" },
//     yaxis: { title: "Percent of drinks ordered" }
// };
// Plotly.newPlot("coolplot", [data], layout);


// Scatter plots
var data = {
    x:[1,2,3,4,5,6,7,8],
    y:[2,3,2,4,5,7,6,9],
    mode:'markers',
    type:'scatter'
};
var layout = {
    title: "Random Scatter Plot",
    xaxis: { title: "X values" },
    yaxis: { title: "Y values" }
};
Plotly.newPlot("coolplot",[data],layout);

