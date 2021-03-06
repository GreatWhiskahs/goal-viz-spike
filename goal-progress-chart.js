"use strict";

GoalVisualizations.ProgressChart = function(selector, data){
	var createChart = function(){
		var margin = {top: 20, right: 20, bottom: 30, left: 50},
		    width = 700 - margin.left - margin.right,
		    height = 300 - margin.top - margin.bottom;

		var chart = d3.select(selector);

		var x = d3.scale.linear()
		    .range([0, width]);

		var y = d3.scale.linear()
		    .range([height, 0]);

		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left");

		var line = d3.svg.line()
		    .x(function(d) { return x(d.x); })
		    .y(function(d) { return y(d.y); });

		chart.attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  	.append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		x.domain([0,10]);
		y.domain([0,30]);

		chart.append("g")
		  .attr("class", "x axis")
		  .attr("transform", "translate(0," + height + ")")
		  .call(xAxis);

		chart.append("g")
		  .attr("class", "y axis")
		  .call(yAxis)
		.append("text")
		  .attr("transform", "rotate(-90)")
		  .attr("y", 6)
		  .attr("dy", ".71em")
		  .style("text-anchor", "end")
		  .text("Progress (%)");

		chart.append("path")
		  .attr("class", "line")
		  .attr("stroke-dasharray","5,5")
		  .attr("d", line(data[0].points.slice(0,2)))
		  .transition()
		  .duration(1000)
		  .ease("linear")
		  .attr("d", line(data[0].points));

		chart.append("path")
		  .attr("class", "line")
		  .attr("d", line(data[1].points.slice(0,2)))
		  .transition()
		  .duration(1000)
		  .ease("linear")
		  .attr("d", line(data[1].points));

	}


	createChart();
	return;
};