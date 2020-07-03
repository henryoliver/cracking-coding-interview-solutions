/**
 * Solution 1 - Set track
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Remove duplicates from linked list
 *
 * @param {object} linkedList
 * @returns {object} Linked list with no duplicates
 */
function removeDups(linkedList = {}) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0) {
        console.error('Parameter should be a valid non-empty object');
        return false;
    }

    const trackedData = new Set();

    let prevNode;
    let currNode = linkedList; // head

    // Traverse linked list till its tail
    while (currNode !== null) {
        if (trackedData.has(currNode.data)) {
            prevNode.next = currNode.next;
        } else {
            trackedData.add(currNode.data);
            prevNode = currNode;
        }

        currNode = currNode.next;
    }

    return linkedList;
}

/**
 * Solution 2 - Inner loop
 *
 * Complexity Analysis
 * O(n^2) time | O(1) space
 *
 * Remove duplicates from linked list
 *
 * @param {object} linkedList
 * @returns {object} Linked list with no duplicates
 */
function removeDups(linkedList = {}) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0) {
        console.error('Parameter should be a valid non-empty object');
        return false;
    }

    let currNode = linkedList; // head

    // Traverse linked list till its tail
    while (currNode !== null) {
        let prevInnerNode = currNode;
        let innerNode = currNode.next;

        while (innerNode !== null) {
            if (currNode.data === innerNode.data) {
                prevInnerNode.next = innerNode.next;
            }

            prevInnerNode = innerNode;
            innerNode = innerNode.next;
        }

        currNode = currNode.next;
    }

    return linkedList;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: JSON.stringify(removeDups({ data: 'a', next: { data: 'b', next: { data: 'a', next: null } } })), expected: JSON.stringify({ data: 'a', next: { data: 'b', next: null } }) },
    { assert: JSON.stringify(removeDups({ data: 'a', next: { data: 'b', next: { data: 'c', next: { data: 'd', next: null } } } })), expected: JSON.stringify({ data: 'a', next: { data: 'b', next: { data: 'c', next: { data: 'd', next: null } } } }) },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: JSON.stringify(removeDups({ data: 'a', next: null })), expected: JSON.stringify({ data: 'a', next: null }) },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: removeDups(), expected: false },
    { assert: removeDups(0), expected: false },
    { assert: removeDups(''), expected: false },
    { assert: removeDups([]), expected: false },
    { assert: removeDups({}), expected: false },
    { assert: removeDups(NaN), expected: false },
    { assert: removeDups(null), expected: false },
    { assert: removeDups(false), expected: false },
    { assert: removeDups(new Set()), expected: false },
    { assert: removeDups(new Map()), expected: false },
    { assert: removeDups(undefined), expected: false }
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

