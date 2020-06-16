/**
 * Solution 1
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Perform basic string compression
 *
 * @param {string}
 * @returns {string}
 */
function stringCompression(string = '') {
    // Assertions
    console.assert(typeof string === 'string' && string !== '', 'Parameter string should be a valid non-empty string');

    // Gracefully handle type and Falsy values
    if (typeof string !== 'string' || string === '') {
        console.error('Parameter should be a valid non-empty string');
        return false;
    }

    const compressedChars = [];

    let i = 0;

    while (i < string.length) {
        const currentChar = string[i];

        let charCount = 1;

        let j = i + 1;

        while (j < string.length && currentChar === string[j]) {
            charCount += 1;
            j++;
        }

        compressedChars.push(currentChar, charCount);

        i = j;
    }

    return (compressedChars.length < string.length) ? compressedChars.join('') : string;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: stringCompression('abbcccdddd'), expected: 'a1b2c3d4' },
    { assert: stringCompression('aabcccccaaa'), expected: 'a2b1c5a3' },
    { assert: stringCompression('abcdefghijkl'), expected: 'abcdefghijkl' },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: stringCompression('a'), expected: 'a' },
    { assert: stringCompression('abcdefghijklmnopqrstuvxzyw'), expected: 'abcdefghijklmnopqrstuvxzyw' },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: stringCompression(), expected: false },
    { assert: stringCompression(0), expected: false },
    { assert: stringCompression(''), expected: false },
    { assert: stringCompression([]), expected: false },
    { assert: stringCompression({}), expected: false },
    { assert: stringCompression(NaN), expected: false },
    { assert: stringCompression(null), expected: false },
    { assert: stringCompression(false), expected: false },
    { assert: stringCompression(new Set()), expected: false },
    { assert: stringCompression(new Map()), expected: false },
    { assert: stringCompression(undefined), expected: false }
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

