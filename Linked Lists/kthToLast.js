/**
 * Solution 1 - Find length and set head and tail pointers
 *
 * Complexity Analysis
 * O(n) time | O(1) space - Iterative
 * O(n) time | O(n) space - Recursive
 *
 * Find the kth to last element of a given singly linked list
 *
 * @param {object} linkedList
 * @param {number} k
 * @returns {string} Linked list data on position k
 */
function kthToLast(linkedList = {}, k = 0) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0 || typeof k !== 'number' || k < 0) {
        console.error('Parameters must be a valid non-empty object and a valid positive number');
        return false;
    }

    // Get linked list length interactively
    let linkedListLength = 0;
    let currNode = linkedList; // Head

    while (currNode !== null) {
        linkedListLength++;
        currNode = currNode.next;
    }

    // Get linked list length recursively
    const getLinkListLength = (linkedList = {}, linkedListLength = 0) => {
        // Base case
        if (linkedList === null) {
            return linkedListLength;
        }

        return getLinkListLength(linkedList.next, linkedListLength + 1);
    };

    // Handle out of boundary cases
    if (linkedListLength <= k || getLinkListLength(linkedList) <= k) {
        return false;
    }

    let kthToLastData;
    let potentialKthIndex = linkedListLength - 1;
    // let potentialKthIndex = getLinkListLength(linkedList) - 1;

    currNode = linkedList;

    while (currNode !== null) {
        if (potentialKthIndex === k) {
            kthToLastData = currNode.data;
            break;
        }

        potentialKthIndex--;
        currNode = currNode.next;
    }

    return kthToLastData;
}

/**
 * Solution 2 - Two pointers moving parallel with K nodes apart
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Find the kth to last element of a given singly linked list
 *
 * @param {object} linkedList
 * @param {number} k
 * @returns {string} Linked list data on position k
 */
function kthToLast(linkedList = {}, k = 0) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0 || typeof k !== 'number' || k < 0) {
        console.error('Parameters must be a valid non-empty object and a valid positive number');
        return false;
    }

    let pointerNodeOne = linkedList;
    let pointerNodeTwo = linkedList;

    let pointerTwo = 0;

    // Move the second node pointer kth
    while (pointerTwo < k && pointerNodeTwo.next !== null) {
        pointerNodeTwo = pointerNodeTwo.next;
        pointerTwo++;
    }

    // Move both node pointer parallel till second reaches tail
    while (pointerNodeTwo.next !== null) {
        pointerNodeTwo = pointerNodeTwo.next;
        pointerNodeOne = pointerNodeOne.next;
    }

    return pointerNodeOne.data;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: kthToLast({ data: 'a', next: { data: 'b', next: { data: 'c', next: null } } }, 0), expected: 'c' },
    { assert: kthToLast({ data: 'a', next: { data: 'b', next: { data: 'c', next: null } } }, 1), expected: 'b' },
    { assert: kthToLast({ data: 'a', next: { data: 'b', next: { data: 'c', next: null } } }, 2), expected: 'a' },
    { assert: kthToLast({ data: 'a', next: { data: 'b', next: { data: 'c', next: { data: 'd', next: null } } } }, 3), expected: 'a' },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: kthToLast({ data: 'a', next: null }, 1), expected: false },
    { assert: kthToLast({ data: 'a', next: null }, -1), expected: false },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: kthToLast(), expected: false },
    { assert: kthToLast(0), expected: false },
    { assert: kthToLast(''), expected: false },
    { assert: kthToLast([]), expected: false },
    { assert: kthToLast({}), expected: false },
    { assert: kthToLast(NaN), expected: false },
    { assert: kthToLast(null), expected: false },
    { assert: kthToLast(false), expected: false },
    { assert: kthToLast(new Set()), expected: false },
    { assert: kthToLast(new Map()), expected: false },
    { assert: kthToLast(undefined), expected: false },
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
