/**
 * Solution 1 - Sort and compare
 *
 * Complexity Analysis
 * O(log n + log m) time (quicksort avg) | O(1) space
 *
 * Decide if one is a permutation of the other
 *
 * @param {string} strA - ASCII (128 characters)
 * @param {string} strB - ASCII (128 characters)
 * @returns {boolean} True if first and second strings are permutations otherwise false
 */
function checkPermutation(strA = '', strB = '') {
    // Assertions
    console.assert(typeof strA === 'string', 'Argument should be a valid string');
    console.assert(typeof strB === 'string', 'Argument should be a valid string');

    if (strA.length !== strB.length) {
        return false;
    }

    const compA = strA.split('').sort().join('');
    const compB = strB.split('').sort().join('');

    return compA === compB;
}

/**
 * Solution 2 - Hash Map track
 *
 * Complexity Analysis
 * O(n + m) time | O(n) space
 *
 * Decide if one is a permutation of the other
 *
 * @param {string} strA - ASCII (128 characters)
 * @param {string} strB - ASCII (128 characters)
 * @returns {boolean} True if first and second strings are permutations otherwise false
 */
function checkPermutation(strA = '', strB = '') {
    // Assertions
    console.assert(typeof strA === 'string', 'Argument should be a valid string');
    console.assert(typeof strB === 'string', 'Argument should be a valid string');

    if (strA.length !== strB.length) {
        return false;
    }

    let charsMap = new Map();

    for (let char of strA) {
        if (charsMap.has(char)) {
            charsMap.set(char, charsMap.get(char) + 1);
        } else {
            charsMap.set(char, 1);
        }
    }

    for (let char of strB) {
        if (charsMap.has(char)) {
            charsMap.set(char, charsMap.get(char) - 1)

            if (charsMap.get(char) < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}


// Test cases (black box - unit testing)
const testCases = [
    { assert: checkPermutation('hello', 'olleh'), expected: true },
    { assert: checkPermutation('abcdef', 'fedcba'), expected: true },
    { assert: checkPermutation('aabbcdef', 'fedcbbaa'), expected: true },
    { assert: checkPermutation('1234567812345678', '8877665544332211'), expected: true },
    { assert: checkPermutation('1122334455667788', '9911223344556677'), expected: false },
    
    // Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { assert: checkPermutation(), expected: true },
    { assert: checkPermutation(123), expected: false },
    // { assert: checkPermutation(null), expected: false },
    // { assert: checkPermutation([1, 2, 3, 4]), expected: [] },

    // Extremes
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

