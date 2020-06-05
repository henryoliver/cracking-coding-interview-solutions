/**
 * Solution 1 - Index pointers
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Check if the strings are one edit away
 *
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean}
 */
function oneEditAway(strA = '', strB = '') {
    // Assertions
    console.assert(typeof strA === 'string' && strA !== '', 'Parameter strA should be a valid non-empty string');
    console.assert(typeof strB === 'string' && strB !== '', 'Parameter strB should be a valid non-empty string');

    // Gracefully handle type and Falsy values
    if (typeof strA !== 'string' || strA === '' || typeof strB !== 'string' || strB === '') {
        console.error('Parameter should be a valid non-empty string');
        return false;
    }

    // Check for zero edits
    if (strA === strB) {
        return true;
    }

    // Check for more than 1 removal or insertion
    if (Math.abs(strA.length - strB.length) > 1) {
        return false;
    }

    const strOne = (strA.length <= strB.length) ? strA : strB;
    const strTwo = (strB.length >= strA.length) ? strB : strA;

    let indexOne = 0;
    let indexTwo = 0;

    let edited = false;

    do {
        const charOne = strOne[indexOne];
        const charTwo = strTwo[indexTwo];

        if  (charOne !== charTwo) {
            if (edited) {
                return false;
            }

            edited = true;

            if (strOne.length === strTwo.length) {
                indexOne++;
                indexTwo++;
            } else {
                indexTwo++;
            }
        } else {
            indexOne++;
            indexTwo++;
        }
    } while (indexOne < strOne.length && indexTwo < strTwo.length);

    return true;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: oneEditAway('abc', 'abcd'), expected: true },
    { assert: oneEditAway('pale', 'ple'), expected: true },
    { assert: oneEditAway('pale', 'bale'), expected: true },
    { assert: oneEditAway('pale', 'bake'), expected: false },
    { assert: oneEditAway('pales', 'pale'), expected: true },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: oneEditAway('a', 'a'), expected: true },
    { assert: oneEditAway('abcdefghijklmnopqrstuvxzyw', 'abcdefghijklmnopqrstuvxzywa'), expected: true },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: oneEditAway(), expected: false },
    { assert: oneEditAway(0), expected: false },
    { assert: oneEditAway(''), expected: false },
    { assert: oneEditAway([]), expected: false },
    { assert: oneEditAway({}), expected: false },
    { assert: oneEditAway(NaN), expected: false },
    { assert: oneEditAway(null), expected: false },
    { assert: oneEditAway(false), expected: false },
    { assert: oneEditAway(new Set()), expected: false },
    { assert: oneEditAway(new Map()), expected: false },
    { assert: oneEditAway(undefined), expected: false }
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

