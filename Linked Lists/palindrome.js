import { factoryStack as createStack } from '../../Data Structures/stack.js';

/**
 * Solution 1 - Hash map
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Check if a linked list is a palindrome
 *
 * @param {object} linkedList
 * @returns {bool}
 */
function isPalindrome(linkedList = {}) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0) {
        console.error('Parameter must be a valid non-empty object');
        return false;
    }

    const charsMap = new Map();

    let currNode = linkedList;

    while (currNode !== null) {
        const { data } = currNode;
        const char = data.toLowerCase();

        currNode = currNode.next;

        if (char === ' ') {
            continue;
        }

        if (charsMap.has(char)) {
            charsMap.set(char, charsMap.get(char) + 1);
        } else {
            charsMap.set(char, 1);
        }
    }

    let oddCount = 0;

    for (const char of charsMap.values()) {
        if (char % 2 === 1) {
            oddCount += 1;
        }
    }

    return oddCount <= 1;
}

/**
 * Solution 2 - Reverse string
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Check if a linked list is a palindrome
 *
 * @param {object} linkedList
 * @returns {bool}
 */
function isPalindrome(linkedList = {}) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0) {
        console.error('Parameter must be a valid non-empty object');
        return false;
    }

    let slowPointer = linkedList;
    let fastPointer = linkedList;

    let middleNode = null;

    let stringFirstHalf = '';
    let stringSecondHalf = '';

    while (slowPointer !== null) {
        if (fastPointer !== null && fastPointer.next !== null) {
            stringFirstHalf = slowPointer.data + stringFirstHalf;

            middleNode = slowPointer.next;
            fastPointer = fastPointer.next.next;
        } else {
            stringSecondHalf += slowPointer.data;
        }

        slowPointer = slowPointer.next;
    }

    // Fast pointer will NOT be NULL if there is odd elements in the linked list
    if (fastPointer !== null) {
        stringFirstHalf = middleNode.data + stringFirstHalf;
    }

    return stringFirstHalf.toLowerCase() === stringSecondHalf.toLowerCase();
}

/**
 * Solution 3 - Runner slow/fast pointers creating a stack
 *
 * Complexity Analysis
 * O(n) time | O(n) space
 *
 * Check if a linked list is a palindrome
 *
 * @param {object} linkedList
 * @returns {bool}
 */
function isPalindrome(linkedList = {}) {
    // Gracefully handle type and Falsy values
    if (typeof linkedList !== 'object' || Object.keys(linkedList || {}).length === 0) {
        console.error('Parameter must be a valid non-empty object');
        return false;
    }

    const charsStack = createStack();

    let slowPointer = linkedList;
    let fastPointer = linkedList;

    let middleNode = null;

    while (slowPointer !== null) {
        if (fastPointer !== null && fastPointer.next !== null) {
            charsStack.push(slowPointer.data);

            middleNode = slowPointer.next;
            fastPointer = fastPointer.next.next;
        } else {
            // Skip middle node in odd linked list
            if (fastPointer !== null && (middleNode === slowPointer)) {
                slowPointer = slowPointer.next;
                continue;
            }

            const charStack = charsStack.pop();

            if (slowPointer.data.toLowerCase() !== charStack.value.toLowerCase()) {
                return false;
            }
        }

        slowPointer = slowPointer.next;
    }

    return true;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    {
        assert: isPalindrome({ data: 'a', next: { data: 'b', next: { data: 'b', next: { data: 'a', next: null } } } }),
        expected: true,
    },
    {
        assert: isPalindrome({ data: 'a', next: { data: 'b', next: { data: 'c', next: { data: 'b', next: { data: 'a', next: null } } } } }),
        expected: true,
    },
    {
        assert: isPalindrome({ data: 'a', next: { data: 'b', next: { data: 'c', next: { data: 'd', next: { data: 'e', next: null } } } } }),
        expected: false
    },
    {
        assert: isPalindrome({ data: 'K', next: { data: 'a', next: { data: 'y', next: { data: 'a', next: { data: 'k', next: null } } } } }),
        expected: true
    },
    {
        assert: isPalindrome({ data: 'R', next: { data: 'e', next: { data: 'p', next: { data: 'a', next: { data: 'p', next: { data: 'e', next: { data: 'r', next: null } } } } } } }),
        expected: true
    },
    {
        assert: isPalindrome({ data: 'T', next: { data: 'a', next: { data: 'c', next: { data: 'o', next: { data: 'C', next: { data: 'a', next: { data: 't', next: null } } } } } } }),
        expected: true
    },
    {
        assert: isPalindrome({ data: 'T', next: { data: 'a', next: { data: 'c', next: { data: 'o', next: { data: 'C', next: { data: 'a', next: { data: 't', next: { data: 'w', next: null } } } } } } } }),
        expected: false
    },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    {
        assert: isPalindrome({ data: 'a', next: null }),
        expected: true
    },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: isPalindrome(), expected: false },
    { assert: isPalindrome(0), expected: false },
    { assert: isPalindrome(''), expected: false },
    { assert: isPalindrome([]), expected: false },
    { assert: isPalindrome({}), expected: false },
    { assert: isPalindrome(NaN), expected: false },
    { assert: isPalindrome(null), expected: false },
    { assert: isPalindrome(false), expected: false },
    { assert: isPalindrome(new Set()), expected: false },
    { assert: isPalindrome(new Map()), expected: false },
    { assert: isPalindrome(undefined), expected: false },
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
