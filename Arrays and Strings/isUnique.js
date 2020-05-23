/**
 * Solution 1 - Set tracking
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Determine if a string has all unique characters.
 *
 * @param {string} ASCII simple string (128 characters)
 * @returns {boolean} True if unique characters, otherwise false
 */
function hasUniqueCharacters(string = '') {
    // Assertions
    console.assert(typeof string === 'string', 'Argument should be a valid string');

    // Assuming ASCII not extended (128 characters)
    if (string.length > 128) {
        return false;
    }

    let charSet = new Set();

    for (let char of string) {
        if (charSet.has(char)) {
            return false;
        } else {
            charSet.add(char);
        }
    }

    return true;
}

/**
 * Solution 2 - Sort comparing neighbors
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Determine if a string has all unique characters.
 *
 * @param {string} ASCII simple string (128 characters)
 * @returns {boolean} True if unique characters, otherwise false
 */
function hasUniqueCharacters(string = '') {
    // Assertions
    console.assert(typeof string === 'string', 'Argument should be a valid string');

    // Assuming ASCII not extended (128 characters)
    if (string.length > 128) {
        return false;
    }

    const sortedArray = string.split('').sort((a, b) => a.localeCompare(b));

    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i - 1]) {
            return false;
        }
    }

    return true;
}


// Test cases (black box - unit testing)
const testCases = [
    { assert: hasUniqueCharacters('abcdef'), expected: true },
    { assert: hasUniqueCharacters('hello'), expected: false },
    { assert: hasUniqueCharacters('1234567890'), expected: true },
    { assert: hasUniqueCharacters('jklpoiuqwerzxcvmnsadf'), expected: true },
    { assert: hasUniqueCharacters('AaBbCcDdeFg1234567890(*&^%$#@!)'), expected: true },
    
    // Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { assert: hasUniqueCharacters(), expected: true },
    // { assert: hasUniqueCharacters(123), expected: false },
    // { assert: hasUniqueCharacters(null), expected: false },
    // { assert: hasUniqueCharacters([1, 2, 3, 4]), expected: [] },

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

