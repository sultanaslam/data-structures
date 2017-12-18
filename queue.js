function Queue() {

  this.storage = [];

};

Queue.prototype.add = function(value) {
	this.storage.push(value);
}

Queue.prototype.remove = function() {
	if (this.storage.length) {
		return this.storage.shift();
	}else{
		console.log('Queue is Empty.');
	}
}

Queue.prototype.size = function() {
	return this.storage.length;
}

var que = new Queue();
