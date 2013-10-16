"use strict";

GoalVisualizations.ProgressChart = function(selector, data){
	this.createChart = function (){
		var chart = d3.select(selector).append('svg')
			.attr('class', 'progress-chart');
			//.attr('width', 100)
			//.attr('height', 20 * data.length);
	}
};