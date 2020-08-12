import { factoryStack as createStack } from '../../Data Structures/stack.js';

/**
 * Solution
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Use a single array to implement three stacks
 *
 * @param {array} array
 * @returns {object} Three stacks
 */
function threeInOne(array = []) {
    // Gracefully handle type and Falsy values
    if (Array.isArray(array) === false || array.length === 0) {
        console.error('Parameter should be a valid non-empty array');
        return false;
    }

    const stacks = [];
    const stacksMaxLength = Math.floor(array.length / 3);

    let currStack = createStack();
    let stackLimitIndex = stacksMaxLength;

    array.forEach((item, index) => {
        currStack.push(item);

        if (stackLimitIndex === index + 1) {
            stacks.push(currStack.peek());
            currStack = createStack();

            if (stacks.length < stacksMaxLength) {
                stackLimitIndex += stacksMaxLength;
            } else {
                stackLimitIndex = array.length;
            }
        }
    });

    return stacks;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    {
        assert: JSON.stringify(threeInOne([1, 2, 3, 4, 5, 6])),
        expected: JSON.stringify([
            { data: 2, next: { data: 1, next: null } },
            { data: 4, next: { data: 3, next: null } },
            { data: 6, next: { data: 5, next: null } }
        ])
    },
    {
        assert: JSON.stringify(threeInOne([1, 2, 3, 4, 5, 6, 7])),
        expected: JSON.stringify([
            { data: 2, next: { data: 1, next: null } },
            { data: 4, next: { data: 3, next: null } },
            { data: 7, next: { data: 6, next: { data: 5, next: null } } }
        ])
    },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    // { assert: threeInOne(), expected: false },
    // { assert: threeInOne(0), expected: false },
    // { assert: threeInOne(''), expected: false },
    // { assert: threeInOne([]), expected: false },
    // { assert: threeInOne({}), expected: false },
    // { assert: threeInOne(NaN), expected: false },
    // { assert: threeInOne(null), expected: false },
    // { assert: threeInOne(false), expected: false },
    // { assert: threeInOne(new Set()), expected: false },
    // { assert: threeInOne(new Map()), expected: false },
    // { assert: threeInOne(undefined), expected: false },
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
