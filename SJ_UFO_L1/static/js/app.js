// BUILD TABLE

var tbody = d3.select("tbody");
var table = d3.select("table");
table.attr("class", "table table-striped");

var ufoData = data;

ufoData.forEach(({datetime, city, state, country, shape, durationMinutes, comments}) => {
    var row = tbody.append("tr");
    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(durationMinutes);
    row.append("td").text(comments);
});

// FILTER ON DATE

var button = d3.select("#button");

button.on("click", function() {
    var inputElement = d3.select("#date");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(ufoData);

    var filteredData = ufoData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

})