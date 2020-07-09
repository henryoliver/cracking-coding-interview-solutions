def kthToLast(linkedList={}, k=0):
    '''
    Solution 1 - Find length and set head / tail pointers

    Complexity Analysis
    O(n) time | O(1) space - Iterative
    O(n) time | O(n) space - Recursive

    Find the kth to last element of a given singly linked list

    dict: linkedList 
    integer: k
    return: Linked list data on position k 
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False or not isinstance(k, int) or k < 0):
        print('Arguments should be a valid non-empty dictionary and a valid positive integer')
        return False

    # Get linked list length interactively
    linkedListLength = 0
    currNode = linkedList # Head

    while (currNode != None):
        linkedListLength += 1
        currNode = currNode['next']

    # Get linked list length recursively
    def getLinkListLength(linkedList={}, linkedListLength=0):
        # Base case
        if (linkedList == None):
            return linkedListLength

        return getLinkListLength(linkedList['next'], linkedListLength + 1)

    # Handle out of boundary cases
    if (linkedListLength <= k or getLinkListLength(linkedList) <= k):
        return False

    currNode = linkedList
    potentialKthIndex = linkedListLength - 1
    # potentialKthIndex = getLinkListLength(linkedList) - 1

    while (currNode != None):
        if (potentialKthIndex == k):
            kthToLastData = currNode['data']
            break

        potentialKthIndex -= 1
        currNode = currNode['next']

    return kthToLastData

def kthToLast(linkedList={}, k=0):
    '''
    Solution 2 - Two node pointers moving parallel with K nodes apart

    Complexity Analysis
    O(n) time | O(1) space

    Find the kth to last element of a given singly linked list

    dict: linkedList 
    integer: k
    return: Linked list data on position k 
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False or not isinstance(k, int) or k < 0):
        print('Arguments should be a valid non-empty dictionary and a valid positive integer')
        return False

    pointerNodeOne = linkedList
    pointerNodeTwo = linkedList

    pointerTwo = 0

    # Move the second node pointer kth
    while (pointerTwo < k and pointerNodeTwo['next'] != None):
        pointerNodeTwo = pointerNodeTwo['next']
        pointerTwo += 1

    # Move both node poiters parallel till second reaches tail
    while (pointerNodeTwo['next'] != None):
        pointerNodeTwo = pointerNodeTwo['next']
        pointerNodeOne = pointerNodeOne['next']

    return pointerNodeOne['data']

# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': { 'data': 'f', 'next': None } } } } } }, 0), 'expected': 'f' },
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': { 'data': 'f', 'next': None } } } } } }, 1), 'expected': 'e' },
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': { 'data': 'f', 'next': None } } } } } }, 2), 'expected': 'd' },
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': { 'data': 'f', 'next': None } } } } } }, 3), 'expected': 'c' },
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': { 'data': 'f', 'next': None } } } } } }, 4), 'expected': 'b' },
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': { 'data': 'f', 'next': None } } } } } }, 5), 'expected': 'a' },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    { 'assert': kthToLast({ 'data': 'a', 'next': None }, 100), 'expected': False },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': kthToLast(), 'expected': False },
    { 'assert': kthToLast(0), 'expected': False },
    { 'assert': kthToLast(''), 'expected': False },
    { 'assert': kthToLast([]), 'expected': False },
    { 'assert': kthToLast(()), 'expected': False },
    { 'assert': kthToLast({}), 'expected': False },
    { 'assert': kthToLast(None), 'expected': False },
    { 'assert': kthToLast(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


