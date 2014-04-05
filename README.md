### top-contributors.js (0.0.0)

A [_Node.js_][nodejs] module providing a list of the top 10 contributors for your git repository.

This module utilizes the GitHub API to query a particular repository, based on user input, to list
the top 10 contributors.

#### Usage

$ npm install -g top-contributors

$ node top-contributors.js "repo/name"

#### Example

$ node top-contributors.js "winjs/winjs"

which gives you a sorted array of results:

List of Contributors to winjs/winjs ordered by the number of contributions.
Rank     User          # Of Contributions
1        phosphoer             59
2        jseanxu               44
3        banguero              14
4        AmazingJaze           13
5        TheWrathOfConst       11
6        pgills                 8
7        rigdern                3
8        dlannoye               1
9        jessebeach             1
10       xirzec                 1

#### Dependencies
* [lodash.js][lodash]
* [text-table.js] [text-table]
* [commander.js] [commander]
* [request.js] [request]

#### Developing Dependencies
* [nodeunit.js] [nodeunit]