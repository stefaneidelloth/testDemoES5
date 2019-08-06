define([

], function(

){
	
	var Foo = function (name) {
		this.name = name;
	};
	
	Foo.prototype.fooMethod = function () {
		return 'fooMethod';
	}
	
	Foo.prototype.overridableMethod = function () {
		return 'foo';
	}
	
	return Foo;
	
});
