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
        return string;
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
        return string;
    }

    // return encodeURI(string.trim());
    return string.trim().replace(/ /g, '%20');
}


// Test cases (black box - unit testing)
const testCases = [
    { assert: urlify('hello world'), expected: 'hello%20world' },
    { assert: urlify('Mr John Smith  '), expected: 'Mr%20John%20Smith' },
    
    // Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { assert: urlify(), expected: '' },
    { assert: urlify(0), expected: 0 },
    { assert: urlify(''), expected: '' },
    { assert: urlify([]), expected: [] },
    { assert: urlify({}), expected: {} },
    { assert: urlify(NaN), expected: NaN },
    { assert: urlify(null), expected: null },
    { assert: urlify(false), expected: false },
    { assert: urlify(undefined), expected: undefined },

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

