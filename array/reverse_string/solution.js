https://leetcode.com/problems/reverse-string/
var reverseString = function (s) {
    const n = s.length;
    let j = n - 1;
    for (let i = 0; i < n / 2; i++) {
        let a = s[i];
        s[i] = s[j];
        s[j] = a;

        j--;
    }
    return s;
};