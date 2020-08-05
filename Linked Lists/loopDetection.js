/**
 * Solution 1 - Set tracking
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Detect a loop in the linked list and returns the node at the beginning of the loop
 *
 * @param {object} linkedList
 * @returns {object} Node at the beginning of the detected loop
 */
function detectLoop(linkedList = {}) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0) {
        console.error('Parameters must be a valid non-empty object');
        return false;
    }

    const nodesSet = new Set();

    let currNode = linkedList;

    while (currNode !== null) {
        if (nodesSet.has(JSON.stringify(currNode))) {
            return currNode;
        }

        nodesSet.add(JSON.stringify(currNode));
        currNode = currNode.next;
    }

    return null;
}

/**
 * Solution 2 - Parallel pointers (fast/slow)
 *
 * Complexity Analysis
 * O(n) time | O(1) space
 *
 * Detect a loop in the linked list and returns the node at the beginning of the loop
 *
 * @param {object} linkedList
 * @returns {object} Node at the beginning of the detected loop
 */
function detectLoop(linkedList = {}) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0) {
        console.error('Parameters must be a valid non-empty object');
        return false;
    }

    let slowPointer = linkedList;
    let fastPointer = linkedList;

    // Find meeting point
    while (fastPointer !== null && fastPointer.next !== null) {
        if (slowPointer === fastPointer) {
            break;
        }

        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }

    // No meeting point
    if (fastPointer === null || fastPointer.next === null) {
        return null;
    }

    // Move slow pointer to head and keep fast pointer at meeting point
    slowPointer = linkedList;

    while (slowPointer !== fastPointer) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next;
    }

    return fastPointer;
}

