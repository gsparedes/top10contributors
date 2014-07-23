var topContributors = require('../lib/top-contributors'),
	events = require('events');

exports['Format'] = function(test) {
test.equal(topContributors.validate('winjs/winjs'), true)
test.done();
}