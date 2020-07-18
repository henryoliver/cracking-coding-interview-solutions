import { factoryLinkedListNode as createNode } from '../../Data Structures/linkedList.js';

/**
 * Solution - Traverse lists in parallel suming the nodes
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Adds the two numbers and returns the sum as a linked list
 *
 * @param {object} linkedListOne
 * @param {object} linkedListTwo
 * @returns {object} Linked list with sumup numbers
 */
function sumLists(linkedListOne = {}, linkedListTwo = {}) {
    // Gracefully handle type and Falsy values
    if (typeof linkedListOne !== 'object' || Object.keys(linkedListOne || {}).length === 0 || typeof linkedListTwo !== 'object' || Object.keys(linkedListTwo || {}).length === 0) {
        console.error('Parameters must be a valid non-empty object');
        return false;
    }

    const sumLinkedList = createNode({ data: 0 });
    let currSumLinkedList = sumLinkedList;

    let currNodeOne = linkedListOne;
    let currNodeTwo = linkedListTwo;

    let carryOver = 0

    while (currNodeOne !== null || currNodeTwo !== null || carryOver > 0) {
        let sum = 0;

        if (currNodeOne) {
            sum += currNodeOne.data;
            currNodeOne = currNodeOne.next;
        }

        if (currNodeTwo) {
            sum += currNodeTwo.data;
            currNodeTwo = currNodeTwo.next;
        }

        sum += carryOver;
        carryOver = Math.floor(sum / 10);

        currSumLinkedList.next = createNode({ data: Number(sum % 10) });
        currSumLinkedList = currSumLinkedList.next;
    }

    return sumLinkedList.next;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { 
        assert: JSON.stringify(sumLists({ data: 5, next: { data: 2, next: { data: 4, next: null } } }, { data: 3, next: { data: 8, next: { data: 1, next: null } } })),
        expected: JSON.stringify({ data: 8, next: { data: 0, next: { data: 6, next: null } } })
    },
    { 
        assert: JSON.stringify(sumLists({ data: 8, next: { data: 5, next: { data: 7, next: null } } }, { data: 2, next: { data: 9, next: { data: 0, next: null } } })),
        expected: JSON.stringify({ data: 0, next: { data: 5, next: { data: 8, next: null } } })
    },
    { 
        assert: JSON.stringify(sumLists({ data: 9, next: { data: 8, next: { data: 7, next: null } } }, { data: 4, next: { data: 9, next: { data: 0, next: { data: 8, next: null } } } })),
        expected: JSON.stringify({ data: 3, next: { data: 8, next: { data: 8, next: { data: 8, next: null } } } })
    },
    { 
        assert: JSON.stringify(sumLists(
            { data: 5, next: { data: 1, next: { data: 8, next: { data: 9, next: { data: 8, next: null }} } } },
            { data: 4, next: { data: 9, next: { data: 0, next: { data: 8, next: null } } } }
        )),
        expected: JSON.stringify({ data: 9, next: { data: 0, next: { data: 9, next: { data: 7, next: { data: 9, next: null } } } } })
    },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { 
        assert: JSON.stringify(sumLists({ data: 1, next: null }, { data: 1, next: null })),
        expected: JSON.stringify({ data: 2, next: null })
    },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: sumLists(), expected: false },
    { assert: sumLists(0), expected: false },
    { assert: sumLists(''), expected: false },
    { assert: sumLists([]), expected: false },
    { assert: sumLists({}), expected: false },
    { assert: sumLists(NaN), expected: false },
    { assert: sumLists(null), expected: false },
    { assert: sumLists(false), expected: false },
    { assert: sumLists(new Set()), expected: false },
    { assert: sumLists(new Map()), expected: false },
    { assert: sumLists(undefined), expected: false },
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
