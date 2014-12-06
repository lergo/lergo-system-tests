var logger = require('log4js').getLogger('index.spec');
var expect = require('expect');

logger.info('running sanity tests');


describe('system tests', function(){
    it('should run tests', function(){
        expect(5).toBe(5);
    })
});