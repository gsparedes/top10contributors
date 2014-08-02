module.exports.topContributors = require('./lib/top-contributors').topcontributors;

if (!module.parent) {

    var program = require('commander');

    program
      .version('0.0.1')
      .on('--help',
        function () {
            console.log('  Usage:');
            console.log('');
            console.log('    $ top-contributors "repo/name"');
            console.log('');
        })
      .parse(process.argv);


    if (!program.args.length) {
        program.help();
        process.exit(0);
    }

    var target = program.args[0];

    var GC = module.exports.topContributors;

    GC.list(target, function (err, data) {

        if (err) { throw err; }

        console.log(data);

        process.exit(0);
    });
}
