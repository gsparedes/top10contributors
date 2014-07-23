### top-contributors.js (0.0.0)

A [_Node.js_][nodejs] module providing a list of the top 10 contributors for your git repository.

This module utilizes the GitHub API to query a particular repository, based on user input, to list
the top 10 contributors.

#### Usage

$ node index.js "user/reponame"

#### Example

$ node index.js "winjs/winjs"

which gives you a sorted array of results:

List of Contributors to winjs/winjs ordered by the number of contributions.
<table>
	<tr>
		<td><b>Rank</b></td>     
		<td><b>User</b></td>
		<td><b># Of Contributions</b></td>
	</tr>
	<tr>
		<td style="text-align:center;">1</td>
		<td>phosphoer</td>
		<td style="text-align:center;">59</td>
	</tr>
	<tr>
		<td style="text-align:center;">2</td>
		<td>jseanxu</td>
		<td style="text-align:center;">44</td>
	</tr>
	<tr>
		<td style="text-align:center;">3</td>
		<td>banguero</td>
		<td style="text-align:center;">14</td>
	</tr>
	<tr>
		<td style="text-align:center;">4</td>
		<td>AmazingJaze</td>
		<td style="text-align:center;">13</td>
	</tr>
	<tr>
		<td style="text-align:center;">5</td>
		<td>TheWrathOfConst</td>
		<td style="text-align:center;">11</td>
	</tr>
	<tr>
		<td style="text-align:center;">6</td>
		<td>pgills</td>
		<td style="text-align:center;">8</td>
	</tr>
	<tr>
		<td style="text-align:center;">7</td>
		<td>rigdern</td>
		<td style="text-align:center;">3</td>
	</tr>
	<tr>
		<td style="text-align:center;">8</td>
		<td>dlannoye</td>
		<td style="text-align:center;">1</td>
	</tr>
	<tr>
		<td style="text-align:center;">9</td>
		<td>jessebeach</td>
		<td style="text-align:center;">1</td>
	</tr>
	<tr>
		<td style="text-align:center;">10</td>
		<td>xirzec</td>
		<td style="text-align:center;">1</td>
	</tr>
</table>

#### Dependencies
* [lodash.js][lodash]
* [text-table.js] [text-table]
* [commander.js] [commander]
* [request.js] [request]

#### Developing Dependencies
* [nodeunit.js] [nodeunit]