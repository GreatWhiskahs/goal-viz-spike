"use strict";

GoalVisualizations.ProgressBar = function(selector, data){
	this.selector = selector && typeof selector === 'string' ? 
		selector : '';
	this.data = data && data.value ? 
		data : { value : 1 };

	this.createBar = function (){
		var svg = d3.select(selector);
		var progress = svg.select('.progress');
		var progressBar = svg.select('.progressBar');

		progress
			.transition()
			.attr("width", data * 10)
			.ease(quad, 1000);
	}


	this.createBar();
	return;
};