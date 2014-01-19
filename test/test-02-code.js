/*global describe:true, it:true, before:true, after:true */

var demand = require('must');

var supermarked = require('../index');
var marked      = require('marked');
var hljs        = require('highlight.js');

describe('code highlighting', function()
{
	var input = 'This is text. \n```javascript\nfunction foo(bar, baz)\n{\n    return bar + baz;\n}\n```\n';

	it('handles code fences', function()
	{
		var output = supermarked(input, { langPrefix: 'hljs.lang-' });
		// console.log(output);

	});

	it('is a marked bug?', function()
	{
		var phase1 = hljs.highlight('javascript', input).value;
		// console.log(marked(phase1));

		//var output = marked(input);
		// console.log(output);
	});

	it('is not an hljs bug', function()
	{
		var r = hljs.highlight('javascript', input).value;
	});
});
