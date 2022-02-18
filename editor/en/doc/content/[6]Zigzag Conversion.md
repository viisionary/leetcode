<p>The string <code>"PAYPALISHIRING"</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)</p>

<pre>
P   A   H   N
A P L S I I G
Y   I   R
</pre>

<p>And then read line by line: <code>"PAHNAPLSIIGYIR"</code></p>

<p>Write the code that will take a string and make this conversion given a number of rows:</p>

<pre>
string convert(string s, int numRows);
</pre>

<p> </p>
<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = "PAYPALISHIRING", numRows = 3
<strong>Output:</strong> "PAHNAPLSIIGYIR"
</pre>

<p><strong>Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = "PAYPALISHIRING", numRows = 4
<strong>Output:</strong> "PINALSIGYAHRPI"
<strong>Explanation:</strong>
P     I    N
A   L S  I G
Y A   H R
P     I
</pre>

<p><strong>Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = "A", numRows = 1
<strong>Output:</strong> "A"
</pre>

<p> </p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 <= s.length <= 1000</code></li>
	<li><code>s</code> consists of English letters (lower-case and upper-case), <code>','</code> and <code>'.'</code>.</li>
	<li><code>1 <= numRows <= 1000</code></li>
</ul>
<div><div>Related Topics</div><div><li>String</li></div></div><br><div><li>👍 3354</li><li>👎 7796</li></div>
