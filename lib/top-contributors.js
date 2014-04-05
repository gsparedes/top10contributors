var pkg = require('../package.json')
var path = require('path')
var request = require('request')
var exec = require('child_process').exec
var _  = require('lodash');
var table = require('text-table');
var log

function findRepo(repo, cb) {
  var repoURI = 'https://api.github.com/repos/'
  var options = { json: true, headers: { 'user-agent': pkg.name + '/' + pkg.version } }
  var url = repoURI + repo + '/contributors';
  request(url, options, onRepo)

  function onRepo(err, res, data) {
    var array = [];
    for (var i = 0; i < data.length; i++) {
      var user = data[i]
      var values = {
        'name' : user.login,
        'contributions' : user.contributions
      }
      array.push(values);
    }
    return cb(err, array);
  }
}

exports.validate = function (git_repo) {
  console.log(git_repo)
  var repoTest = git_repo.split('/');
  var correct = false;
  if (repoTest.length == 2)
    correct = true;
  return correct;
}

exports.read = function () {
    var stdin = process.openStdin();

    stdin.on('data', function (chunk) {
        var repo = chunk;
        var result = exports.validate(repo);
        console.log('validate: ' + result);
        process.exit();
    });
};

module.exports.topContributors = {

    list: function (git_repo, cb) {
      console.log('List of Contributors for ' +git_repo+ ' ordered by the number of contributions.')

      findRepo(git_repo, function(er, ppl) {
        var listOfContri = _.sortBy(ppl, function (committer) {
            return -committer.contributions;
        });

        var finalList = [];
        var header = ['Rank', 'User', '# Of Contributions']
        finalList.push(header);

        var nameList = _.map(listOfContri, 'name')
        var contriList = _.map(listOfContri, 'contributions')

        var size = listOfContri.length;
        if (size > 10)
          size = 10;
        for (var i = 0; i < size; i++) {
          var rank = i + 1;
          var name = nameList[i];
          var numOfContr = contriList[i];
          var value = [rank,name,numOfContr];
          finalList.push(value);
        };

        var t = table(finalList, {align: [ 'c', 'l', 'c' ]});
        console.log(t);
      })
    }
}
