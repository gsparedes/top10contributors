var pkg = require('../package.json')
var path = require('path')
var request = require('request')
var exec = require('child_process').exec
var _  = require('lodash');
var table = require('text-table');

// findRepo function accepts github repo and callback function
// Sets up API query and extracts data
// Pushes values into array in JSON form {name, contributions}
function findRepo(repo, cb) {
  var repoURI = 'https://api.github.com/repos/'
  var options = { json: true, headers: { 'user-agent': pkg.name + '/' + pkg.version } }
  var url = repoURI + repo + '/contributors';
  request(url, options, onRepo)

  function onRepo(err, res, data) {
    var array = [];
    if (data.message)
      throw new Error("Repo: '" +repo+ "' not found. Please retry.");
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

// Validate entered GitHub repository
// If repo follows: "test/test" returns true, else false
var validate = function (git_repo) {
  var repoTest = git_repo.split('/');
  var correct = false;
  if (repoTest.length == 2)
    correct = true;
  return correct;
}

// Export validate function for Unit test usage
exports.validate = validate;

module.exports.topContributors = {

    // Export function list, accepts github repo and callback as parametters
    // Will query github repo for top 10 contributors and display in formatted table
    list: function (git_repo, cb) {
      var valid = validate(git_repo);
      if (!valid)
        throw new Error("Invalid repo format: '"+git_repo+"' - Please use following format: 'user/reponame'");

      findRepo(git_repo, function(er, ppl) {
        var listOfContri = _.sortBy(ppl, function (committer) {
            return -committer.contributions;
        });

        console.log('List of Contributors for ' +git_repo+ ' ordered by the number of contributions.');

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
