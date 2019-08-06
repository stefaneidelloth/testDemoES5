define([
	'src/baa'
], function(
	Baa
){
	var Qux = function (name) {
		this._super.call(this, name);
	}

	Qux.prototype = Object.create(Baa.prototype);
	Qux.prototype._super = Baa;
	Qux.prototype.constructor = Qux;	
	
	Qux.prototype.quxMethod = function () {
		return 'quxMethod';
	}
	
	Qux.prototype.overridableMethod = function () {
		return 'qux';
	}
	
	return Qux;		
});