/**
 * Solution
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Determine if the two linked lists intersects
 *
 * @param {object} linkedListOne
 * @param {object} linkedListTwo
 * @returns {object} Intersected node
 */
function threeInOne(linkedListOne = {}, linkedListTwo = {}) {
    // Gracefully handle type and Falsy values
    if (
        typeof linkedListOne !== 'object' ||
        Object.keys(linkedListOne || {}).length === 0 ||
        typeof linkedListTwo !== 'object' ||
        Object.keys(linkedListTwo || {}).length === 0
    ) {
        console.error('Parameters must be a valid non-empty object');
        return false;
    }

    let linkListOneLength = 0;
    let linkListTwoLength = 0;

    let currNodeOne = linkedListOne;
    let currNodeTwo = linkedListTwo;

    // Traverse both linked lists till their tails and get lengths
    while (currNodeOne.next !== null || currNodeTwo.next !== null) {
        if (currNodeOne.next !== null) {
            linkListOneLength += 1;
            currNodeOne = currNodeOne.next;
        }

        if (currNodeTwo.next !== null) {
            linkListTwoLength += 1;
            currNodeTwo = currNodeTwo.next;
        }
    }

    // Check last nodes equality to make sure both intersects at some point
    if (JSON.stringify(currNodeOne) !== JSON.stringify(currNodeTwo)) {
        return null;
    }

    // Reset current nodes
    currNodeOne = linkedListOne;
    currNodeTwo = linkedListTwo;

    // Traverse both again pairing current node and comparing it
    while (currNodeOne !== null || currNodeTwo !== null) {
        if (linkListOneLength > linkListTwoLength) {
            linkListOneLength -= 1;
            currNodeOne = currNodeOne.next;
        } else if (linkListTwoLength > linkListOneLength) {
            linkListTwoLength -= 1;
            currNodeTwo = currNodeTwo.next;
        } else {
            if (JSON.stringify(currNodeOne) === JSON.stringify(currNodeTwo)) {
                return currNodeOne;
            }

            linkListOneLength -= 1;
            linkListTwoLength -= 1;

            currNodeOne = currNodeOne.next;
            currNodeTwo = currNodeTwo.next;
        }
    }
}


const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    {
        assert: JSON.stringify(
            threeInOne(
                { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: null } } } },
                { data: 0, next: { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: null } } } } }
            )
        ),
        expected: JSON.stringify({ data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: null } } } }),
    },
    {
        assert: JSON.stringify(
            threeInOne(
                { data: 0, next: { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: { data: 5, next: null } } } } } },
                { data: 2, next: { data: 3, next: { data: 4, next: { data: 5, next: null } } } }
            )
        ),
        expected: JSON.stringify({ data: 2, next: { data: 3, next: { data: 4, next: { data: 5, next: null } } } }),
    },
    {
        assert: threeInOne(
            { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: null } } } },
            { data: 0, next: { data: 1, next: { data: 2, next: { data: 3, next: { data: 4, next: { data: 5, next: null } } } } } }
        ),
        expected: null,
    },
    {
        assert: JSON.stringify(
            threeInOne(
                { data: 3, next: { data: 1, next: { data: 5, next: { data: 9, next: { data: 7, next: { data: 2, next: { data: 1, next: null } } } } } } },
                { data: 4, next: { data: 6, next: { data: 7, next: { data: 2, next: { data: 1, next: null } } } } }
            )
        ),
        expected: JSON.stringify({ data: 7, next: { data: 2, next: { data: 1, next: null } } }),
    },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    {
        assert: JSON.stringify(threeInOne({ data: 1, next: null }, { data: 1, next: null })),
        expected: JSON.stringify({ data: 1, next: null })
    },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: threeInOne(), expected: false },
    { assert: threeInOne(0), expected: false },
    { assert: threeInOne(''), expected: false },
    { assert: threeInOne([]), expected: false },
    { assert: threeInOne({}), expected: false },
    { assert: threeInOne(NaN), expected: false },
    { assert: threeInOne(null), expected: false },
    { assert: threeInOne(false), expected: false },
    { assert: threeInOne(new Set()), expected: false },
    { assert: threeInOne(new Map()), expected: false },
    { assert: threeInOne(undefined), expected: false },
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
