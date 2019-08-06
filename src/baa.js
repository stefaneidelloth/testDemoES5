define([
	'src/foo'
], function(
	Foo
){
	var Baa = function (name) {
		this._super.call(this, name);
	}

	Baa.prototype = Object.create(Foo.prototype);	
	Baa.prototype._super = Foo;
	Baa.prototype.constructor = Baa;
	
	Baa.prototype.baaMethod = function () {
		return 'baaMethod';
	}
	
	Baa.prototype.overridableMethod = function () {
		return 'baa';
	}
	
	return Baa;		
});
	