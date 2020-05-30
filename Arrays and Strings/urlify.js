/**
 * Solution 1 - Treverse string array
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Replace all spaces in a string with its safe ASCII encoded value
 *
 * @param {string} string - ASCII (128 characters)
 * @returns {string} encoded string
 */
function urlify(string = '') {
    // Assertions
    console.assert(typeof string === 'string' && string !== '', 'Parameter should be a valid non-empty string');

    // Gracefully handle type and Falsy values
    if (typeof string !== 'string' || string === '') {
        console.error('Parameter should be a valid non-empty string');
        return false;
    }

    const encodedArray = string.trim().split('');

    for (let i = 0; i < encodedArray.length; i++) {
        if (encodedArray[i] === ' ') {
            encodedArray[i] = '%20';
        }
    }

    return encodedArray.join('');
}

/**
 * Solution 2 - Native methods
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Replace all spaces in a string with its safe ASCII encoded value
 *
 * @param {string} string - ASCII (128 characters)
 * @returns {string} encoded string
 */
function urlify(string = '') {
    // Assertions
    console.assert(typeof string === 'string' && string !== '', 'Parameter should be a valid non-empty string');

    // Gracefully handle type and Falsy values
    if (typeof string !== 'string' || string === '') {
        console.error('Parameter should be a valid non-empty string');
        return false;
    }

    // return encodeURI(string.trim());
    return string.trim().replace(/ /g, '%20');
}


// Test cases (black box - unit testing)
const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: urlify('hello world'), expected: 'hello%20world' },
    { assert: urlify('Mr John Smith  '), expected: 'Mr%20John%20Smith' },
    
    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: urlify('h '), expected: 'h' },
    { assert: urlify('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium          '), expected: 'Sed%20ut%20perspiciatis%20unde%20omnis%20iste%20natus%20error%20sit%20voluptatem%20accusantium' },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: urlify(), expected: false },
    { assert: urlify(0), expected: false },
    { assert: urlify(''), expected: false },
    { assert: urlify([]), expected: false },
    { assert: urlify({}), expected: false },
    { assert: urlify(NaN), expected: false },
    { assert: urlify(null), expected: false },
    { assert: urlify(false), expected: false },
    { assert: urlify(new Set()), expected: false },
    { assert: urlify(new Map()), expected: false },
    { assert: urlify(undefined), expected: false },
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

