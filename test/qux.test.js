define([
	'squire'
], function (
	Squire
) {	
	
	describe('Qux', function(){
		
		var sut;		
		
		beforeEach(function(done){	

			var injector = new Squire();			
			injector.mock('src/baa', createBaaMock());

			injector.require([
				'src/qux'
			], function(
				Qux
			){				
				sut = new Qux('qux');
				done();	
			});	
						
		});
		
		it('quxMethod', function(){			
			expect(sut.quxMethod('a')).toEqual('quxMethod');
		});	

		it('baaMethod', function(){			
			expect(sut.baaMethod('b')).toEqual('baaMockedMethod');
		});	

		it('overridableMethod', function(){			
			expect(sut.overridableMethod('c')).toEqual('qux');
		});		

		function createBaaMock(){
			var BaaMock = function (name) {
				this.name = name;
			};
			BaaMock.prototype.baaMethod = function () {
				return 'baaMockedMethod';
			}
			return BaaMock;
		}		
		
	});	
	
});	