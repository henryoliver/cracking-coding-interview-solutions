/**
 * Solution - Append first string to itself and search for second string on it
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Checks if str2 is a rotation of str1
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean} True if str1 and str2 are rotated versions of eachother, otherwise false
 */
function isStringRotation(str1 = '', str2 = '') {
    // Gracefully handle type and Falsy values
    if (typeof str1 !== 'string' || typeof str2 !== 'string' || str1 === '' || str2 === '') {
        console.error('Parameter should be a valid non-empty string');
        return false;
    }

    if (str1.length !== str2.length) {
        return false;
    }

    return str1.concat(str1).includes(str2);
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: isStringRotation('abcde', 'cdeab'), expected: true },
    { assert: isStringRotation('abcde', 'abced'), expected: false },
    { assert: isStringRotation('waterbottle', 'erbottlewat'), expected: true },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: isStringRotation(), expected: false },
    { assert: isStringRotation(0), expected: false },
    { assert: isStringRotation(''), expected: false },
    { assert: isStringRotation([]), expected: false },
    { assert: isStringRotation({}), expected: false },
    { assert: isStringRotation(NaN), expected: false },
    { assert: isStringRotation(null), expected: false },
    { assert: isStringRotation(false), expected: false },
    { assert: isStringRotation(new Set()), expected: false },
    { assert: isStringRotation(new Map()), expected: false },
    { assert: isStringRotation(undefined), expected: false }
];

// Run tests
testCases.forEach((test, index) => {
    const currentTest = `# Test ${index + 1}`;

    console.group(currentTest);
    console.log('Actual:', test.assert);
    console.log('Expected:', test.expected);
    console.log(test.assert === test.expected ? '🤘 Test PASSED 🤘' : '👎 Test FAILED 👎', '\n');
    console.groupEnd(currentTest);
});

