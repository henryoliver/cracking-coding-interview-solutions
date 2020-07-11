def kthToLast(linkedList={}, k=0):
    '''
    Solution - Find length and move pointer node till half length

    Complexity Analysis
    O(n) time | O(1) space - Iterative

    Delete a node in the middle of the linked list

    dict: linkedList 
    return: Linked list without the middle node
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False):
        print('Argument should be a valid non-empty dictionary')
        return False

    currNode = linkedList
    linkedListLength = 0

    # Get linked list length
    while (currNode != None):
        currNode = currNode['next']
        linkedListLength += 1

    # Handle minimal boundary cases
    if (linkedListLength < 3):
        return linkedList


    currNodeIndex = 1
    middleNodeIndex = linkedListLength // 2

    prevNode = linkedList
    currNode = linkedList['next']

    # Traverse linked list till its middle
    while (currNodeIndex <= middleNodeIndex):
        # Remove the middle node
        if (currNodeIndex == middleNodeIndex):
            prevNode['next'] = currNode['next']
            break

        prevNode = currNode
        currNode = currNode['next']

        currNodeIndex += 1

    return linkedList

# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': None } } } }), 'expected': { 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'd', 'next': None } } } },
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': None } } } } }), 'expected': { 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': None } } } } },
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': { 'data': 'f', 'next': None } } } } } }), 'expected': { 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'e', 'next': { 'data': 'f', 'next': None } } } } } },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    { 'assert': kthToLast({ 'data': 'a', 'next': None }), 'expected': { 'data': 'a', 'next': None } },
    { 'assert': kthToLast({ 'data': 'a', 'next': { 'data': 'b', 'next': None } }), 'expected': { 'data': 'a', 'next': { 'data': 'b', 'next': None } } },

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


