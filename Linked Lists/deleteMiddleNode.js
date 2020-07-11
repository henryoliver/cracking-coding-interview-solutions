/**
 * Solution - Find length and move pointer node till half length
 *
 * Complexity Analysis
 * O(n) time | O(1) space - Iterative
 *
 * Delete a node in the middle of the linked list
 *
 * @param {object} linkedList
 * @returns {object} Linked list without the middle node
 */
function deleteMiddleNode(linkedList = {}) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0) {
        console.error('Parameter must be a valid non-empty object');
        return false;
    }

    let currNode = linkedList;
    let linkedListLength = 0;

    // Get linked list length
    while (currNode !== null) {
        currNode = currNode.next;
        linkedListLength++;
    }

    // Handle minimal boundary case
    if (linkedListLength < 3) {
        return linkedList;
    }

    const middleNodeIndex = Math.floor(linkedListLength / 2);

    let currNodeIndex = 1;

    let prevNode = linkedList;
    currNode = linkedList.next;

    // Traverse linkedList till its middle
    while (currNodeIndex <= middleNodeIndex) {
        // Remove middle node
        if (currNodeIndex === middleNodeIndex) {
            prevNode.next = currNode.next;
            break;
        }

        prevNode = currNode;
        currNode = currNode.next;

        currNodeIndex++;
    }

    return linkedList;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { 
        assert: JSON.stringify(deleteMiddleNode({ data: 'a', next: { data: 'b', next: { data: 'c', next: null } } })),
        expected: JSON.stringify({ data: 'a', next: { data: 'c', next: null } })
    },
    { 
        assert: JSON.stringify(deleteMiddleNode({ data: 'a', next: { data: 'b', next: { data: 'c', next: { data: 'd', next: null } } } })),
        expected: JSON.stringify({ data: 'a', next: { data: 'b', next: { data: 'd', next: null } } })
    },
    { 
        assert: JSON.stringify(deleteMiddleNode({ data: 'a', next: { data: 'b', next: { data: 'c', next: { data: 'd', next: { data: 'e', next: null } } } } })),
        expected: JSON.stringify({ data: 'a', next: { data: 'b', next: { data: 'd', next: { data: 'e', next: null } } } })
    },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: JSON.stringify(deleteMiddleNode({ data: 'a', next: null })), expected: JSON.stringify({ data: 'a', next: null }) },
    { assert: JSON.stringify(deleteMiddleNode({ data: 'a', next: { data: 'b', next: null } })), expected: JSON.stringify({ data: 'a', next: { data: 'b', next: null } }) },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: deleteMiddleNode(), expected: false },
    { assert: deleteMiddleNode(0), expected: false },
    { assert: deleteMiddleNode(''), expected: false },
    { assert: deleteMiddleNode([]), expected: false },
    { assert: deleteMiddleNode({}), expected: false },
    { assert: deleteMiddleNode(NaN), expected: false },
    { assert: deleteMiddleNode(null), expected: false },
    { assert: deleteMiddleNode(false), expected: false },
    { assert: deleteMiddleNode(new Set()), expected: false },
    { assert: deleteMiddleNode(new Map()), expected: false },
    { assert: deleteMiddleNode(undefined), expected: false },
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
