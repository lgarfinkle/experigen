// database connection 


Experiment.prototype.loadUserID = function () {

	var data = [16, "WXN16"];
	
	this.userFileName = data[0];
	this.userCode = data[1];	

	return true;
}


Experiment.prototype.loadItems = function () {
	var e = this;
	$.get("data/items.txt", function(data) {
		// in here, "this" is not the experiment!!!
		// it's some jquery thing
		var lines = data.split("\n");
		var fields = lines[0].split("\t");
		for (var i=1; i<lines.length; i++) {
			var line = lines[i].split("\t");
			var item = {};
			for (var j=0; j<line.length; j++) {
				item[ fields[j] ] = line[j];
			}
			item.screentype = e.TRIAL;
			e.items.push(item);
		}
	});
	return true;
}

Experiment.prototype.loadFrameSentences = function () {
	var e = this;
	$.get("data/frames.txt", function(data) {
		// in here, "this" is not the experiment!!!
		// it's some jquery thing
		e.frames = data.split("\n");
	});
	return true;
}