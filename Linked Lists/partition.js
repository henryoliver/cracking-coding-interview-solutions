import { factoryLinkedListNode as createNode } from '../../Data Structures/linkedList.js';

/**
 * Solution 1 - Stable approach - Two partitions (left/right) not chaging linked list order
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Partition a linked list around a value x
 *
 * @param {object} linkedList
 * @param {number} partition
 * @returns {object} Linked list re-arranged partition by x
 */
function partition(linkedList = {}, partition = 0) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0 || typeof partition !== 'number' || partition < 0) {
        console.error('Parameters must be a valid non-empty object and a positive valid number');
        return false;
    }

    const leftPartition = createNode();
    const rightPartition = createNode();

    let leftCurrNode = leftPartition;
    let rightCurrNode = rightPartition;

    let currNode = linkedList;

    while (currNode !== null) {
        if (currNode.data < partition) {
            leftCurrNode.next = currNode;
            leftCurrNode = leftCurrNode.next;
        } else {
            rightCurrNode.next = currNode;
            rightCurrNode = rightCurrNode.next;
        }

        currNode = currNode.next;
    }

    rightCurrNode.next = null;
    leftCurrNode.next = rightPartition.next;

    return leftPartition.next;
}

/**
 * Solution 2 - Not Stable approach - Rearrange the elements growing the linked list at the head and tail
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Partition a linked list around a value x
 *
 * @param {object} linkedList
 * @param {number} partition
 * @returns {object} Linked list re-arranged partition by x
 */
function partition(linkedList = {}, partition = 0) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0 || typeof partition !== 'number' || partition < 0) {
        console.error('Parameters must be a valid non-empty object and a positive valid number');
        return false;
    }

    let head = linkedList;
    let tail = linkedList;

    while (linkedList !== null) {
        let next = linkedList.next;

        if (linkedList.data < partition) {
            linkedList.next = head;
            head = linkedList;
        } else {
            tail.next = linkedList;
            tail = linkedList;
        }

        linkedList = next;
    }

    tail.next = null;

    return head;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { 
        assert: JSON.stringify(partition({ data: 5, next: { data: 2, next: { data: 10, next: null } } }, 5)),
        expected: JSON.stringify({ data: 2, next: { data: 5, next: { data: 10, next: null } } }),
    },
    { 
        assert: JSON.stringify(partition({ data: 1, next: { data: 5, next: { data: 4, next: { data: 3, next: { data: 2, next: null } } } } }, 3)),
        expected: JSON.stringify({ data: 1, next: { data: 2, next: { data: 5, next: { data: 4, next: { data: 3, next: null } } } } }),
    },
    { 
        assert: JSON.stringify(partition({ data: 9, next: { data: 2, next: { data: 6, next: { data: 4, next: { data: 3, next: null } } } } }, 4)),
        expected: JSON.stringify({ data: 2, next: { data: 3, next: { data: 9, next: { data: 6, next: { data: 4, next: null } } } } }),
    },
    { 
        assert: JSON.stringify(partition({ data: 14, next: { data: 2, next: { data: 8, next: { data: 6, next: { data: 3, next: { data: 1, next: { data: 11, next: null } } } } } } }, 8)),
        expected: JSON.stringify({ data: 2, next: { data: 6, next: { data: 3, next: { data: 1, next: { data: 14, next: { data: 8, next: { data: 11, next: null } } } } } } }),
    },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { 
        assert: JSON.stringify(partition({ data: 1, next: null }, 2)),
        expected: JSON.stringify({ data: 1, next: null }),
    },
    { 
        assert: JSON.stringify(partition({ data: 10, next: { data: 100, next: null } }, 34)),
        expected: JSON.stringify({ data: 10, next: { data: 100, next: null } }),
    },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: partition(), expected: false },
    { assert: partition(0), expected: false },
    { assert: partition(''), expected: false },
    { assert: partition([]), expected: false },
    { assert: partition({}), expected: false },
    { assert: partition(NaN), expected: false },
    { assert: partition(null), expected: false },
    { assert: partition(false), expected: false },
    { assert: partition(new Set()), expected: false },
    { assert: partition(new Map()), expected: false },
    { assert: partition(undefined), expected: false },
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
