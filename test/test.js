var topContributors = require('../lib/top-contributors'),
	events = require('events');

exports['Format'] = function(test) {
test.equal(topContributors.validate('winjs/winjs'), true)
test.done();
}

/*exports['Read a Repo Name'] = function (test) {
    test.expect(1);
    var ev = new events.EventEmitter();

    process.openStdin = function () { return ev; };
    process.exit = test.done;

    console.log = function (str) {
        test.equal(str, 'validate: true');
    };

    topContributors.read();
    ev.emit('data', 'test/test');
};*/