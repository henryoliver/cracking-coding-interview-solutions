/**
 * Solution 1 - Hash map
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Check if it is a permutation of a palindrome
 *
 * @param {string} string - ASCII (128 characters)
 * @returns {boolean}
 */
function isPalindromePermutation(string = '') {
    // Assertions
    console.assert(typeof string === 'string' && string !== '', 'Parameter should be a valid non-empty string');

    // Gracefully handle type and Falsy values
    if (typeof string !== 'string' || string === '') {
        console.error('Parameter should be a valid non-empty string');
        return false;
    }

    let charsMap = new Map();

    for (let char of string.toLowerCase()) {
        if (char === ' ') {
            continue;
        }

        if (charsMap.has(char)) {
            charsMap.set(char, charsMap.get(char) + 1);
        } else {
            charsMap.set(char, 1);
        }
    }

    let oddCount = 0;

    for (const [key, value] of charsMap) {
        if (value % 2 === 1) {
            oddCount += 1;
        }
    }

    return oddCount <= 1;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: isPalindromePermutation('Wow'), expected: true },
    { assert: isPalindromePermutation('Anna'), expected: true },
    { assert: isPalindromePermutation('Kayak'), expected: true },
    { assert: isPalindromePermutation('1abcba1'), expected: true },
    { assert: isPalindromePermutation('AbCdcBa'), expected: true },
    { assert: isPalindromePermutation('Repaper'), expected: true },
    { assert: isPalindromePermutation('abcdefg'), expected: false },
    { assert: isPalindromePermutation('Tact Coa'), expected: true },
    { assert: isPalindromePermutation('Ab Cd cBa'), expected: true },
    { assert: isPalindromePermutation('ab c d efg'), expected: false },
    { assert: isPalindromePermutation('Hello World'), expected: false },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: isPalindromePermutation('a'), expected: true },
    { assert: isPalindromePermutation('tattarrattat tattarrattat tattarrattat'), expected: true },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: isPalindromePermutation(), expected: false },
    { assert: isPalindromePermutation(0), expected: false },
    { assert: isPalindromePermutation(''), expected: false },
    { assert: isPalindromePermutation([]), expected: false },
    { assert: isPalindromePermutation({}), expected: false },
    { assert: isPalindromePermutation(NaN), expected: false },
    { assert: isPalindromePermutation(null), expected: false },
    { assert: isPalindromePermutation(false), expected: false },
    { assert: isPalindromePermutation(new Set()), expected: false },
    { assert: isPalindromePermutation(new Map()), expected: false },
    { assert: isPalindromePermutation(undefined), expected: false },
];

// Run tests
testCases.forEach((test, index) => {
    const currentTest = `# Test ${index + 1}`;

    console.group(currentTest);
    console.log('Actual: ', test.assert);
    console.log('Expected: ', test.expected);
    console.log(test.assert === test.expected ? '🤘 Test PASSED 🤘' : '👎 Test FAILED 👎', '\n');
    console.groupEnd(currentTest);
});

