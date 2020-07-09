def removeDups(linkedList={}):
    '''
    Solution 1 - Set track

    Complexity Analysis
    O(n) time | O(n) space

    Remove duplicates from linked list

    dict: linkedList 
    return: Linked list with no duplicates
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False):
        print('Arguments should be a valid non-empty dictionary')
        return False

    trackedData = set()

    prevNode = dict()
    currNode = linkedList # head

    # Traverse linked list till its tail
    while (currNode != None):
        if (currNode['data'] in trackedData):
            prevNode['next'] = currNode['next']
        else:
            trackedData.add(currNode['data'])
            prevNode = currNode

        currNode = currNode['next']

    return linkedList

def removeDups(linkedList={}):
    '''
    Solution 2 - Inner loop

    Complexity Analysis
    O(n^2) time | O(1) space

    Remove duplicates from linked list

    dict: linkedList 
    return: Linked list with no duplicates
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False):
        print('Arguments should be a valid non-empty dictionary')
        return False

    currNode = linkedList # head

    # Traverse linked list till its tail
    while (currNode != None):
        prevInnerNode = currNode
        innerNode = currNode['next']

        while (innerNode != None):
            if (currNode['data'] == innerNode['data']):
                prevInnerNode['next'] = innerNode['next']

            prevInnerNode = innerNode
            innerNode = innerNode['next']

        currNode = currNode['next']

    return linkedList

# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 'assert': removeDups({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'a', 'next': None } } }), 'expected': { 'data': 'a', 'next': { 'data': 'b', 'next': None } } },
    { 'assert': removeDups({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': None } } } }), 'expected': { 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': None } } } } },
    { 'assert': removeDups({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'b', 'next': None } } } } } }), 'expected': { 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': None } } } } },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    { 'assert': removeDups({ 'data': 'a', 'next': None }), 'expected': { 'data': 'a', 'next': None } },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': removeDups(), 'expected': False },
    { 'assert': removeDups(0), 'expected': False },
    { 'assert': removeDups(''), 'expected': False },
    { 'assert': removeDups([]), 'expected': False },
    { 'assert': removeDups(()), 'expected': False },
    { 'assert': removeDups({}), 'expected': False },
    { 'assert': removeDups(None), 'expected': False },
    { 'assert': removeDups(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


