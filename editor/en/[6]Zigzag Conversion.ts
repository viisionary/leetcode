//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number 
//of rows like this: (you may want to display this pattern in a fixed font for 
//better legibility) 
//
// 
//P   A   H   N
//A P L S I I G
//Y   I   R
// 
//
// And then read line by line: "PAHNAPLSIIGYIR" 
//
// Write the code that will take a string and make this conversion given a 
//number of rows: 
//
// 
//string convert(string s, int numRows);
// 
//
// 
// Example 1: 
//
// 
//Input: s = "PAYPALISHIRING", numRows = 3
//Output: "PAHNAPLSIIGYIR"
// 
//
// Example 2: 
//
// 
//Input: s = "PAYPALISHIRING", numRows = 4
//Output: "PINALSIGYAHRPI"
//Explanation:
//P     I    N
//A   L S  I G
//Y A   H R
//P     I
// 
//
// Example 3: 
//
// 
//Input: s = "A", numRows = 1
//Output: "A"
// 
//
// 
// Constraints: 
//
// 
// 1 <= s.length <= 1000 
// s consists of English letters (lower-case and upper-case), ',' and '.'. 
// 1 <= numRows <= 1000 
// 
// Related Topics String 👍 3354 👎 7796


//leetcode submit region begin(Prohibit modification and deletion)
import {equal} from "assert";

function convert(s: string, numRows: number): string {
    //// 00 01 02 03 12 21 30 31 32 33 42 51 52
    ////P     I    N
    // //A   L S  I G
    // //Y A   H R
    // //P     I
    if (numRows === 1 || s.length < numRows) {
        return s;
    }
    const cache: any = []
    let i = 0;
    let j = 0;
    for (let i = 0; i < numRows; i++) {
        cache[i] = [];
    }
    let reverse = false;
    // let single = numRows - 2
    for (const sKey in s.split('')) {
        cache[j].push(s[sKey]);
        if (reverse === false) {
            j++;
        } else {
            j--;
        }
        if (j === numRows - 1 ||  j=== 0) {
            reverse = !reverse;
        }
    }
    return cache.map(item=>item.join('')).join('')
}

describe('convert', function () {
    it('PAYPALISHIRING', function () {
        equal(convert('PAYPALISHIRING', 4),'PINALSIGYAHRPI') //PINALSIGYAHRPI
    })
});
//leetcode submit region end(Prohibit modification and deletion)
