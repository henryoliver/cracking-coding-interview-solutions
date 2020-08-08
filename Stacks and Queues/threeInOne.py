def intersect(linkedListOne={}, linkedListTwo={}):
    '''
    Solution 1 - Tail check and parallel comparison

    Complexity Analysis
    O(n) time | O(1) space

    Determine if the two linked lists intersects

    dict: linkedListOne
    dict: linkedListTwo
    return: Intersected node
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedListOne, dict) or bool(linkedListOne) == False or not isinstance(linkedListTwo, dict) or bool(linkedListTwo) == False):
        print('Arguments should be a valid non-empty dictionary')
        return False

    linkListOneLength = 0
    linkListTwoLength = 0

    currNodeOne = linkedListOne
    currNodeTwo = linkedListTwo

    # Traverse both linked lists till their tails and get lengths
    while (currNodeOne['next'] != None or currNodeTwo['next'] != None):
        if (currNodeOne['next'] != None):
            linkListOneLength += 1
            currNodeOne = currNodeOne['next']

        if (currNodeTwo['next'] != None):
            linkListTwoLength += 1
            currNodeTwo = currNodeTwo['next']

    # Check last nodes equality to make sure both intersects at some point
    if (currNodeOne != currNodeTwo):
        return None

    # Reset current nodes
    currNodeOne = linkedListOne
    currNodeTwo = linkedListTwo

    # Traverse both again pairing current node and comparing it
    while (currNodeOne != None or currNodeTwo != None):
        if (linkListOneLength > linkListTwoLength):
            linkListOneLength -= 1
            currNodeOne = currNodeOne['next']
        elif (linkListTwoLength > linkListOneLength):
            linkListTwoLength -= 1
            currNodeTwo = currNodeTwo['next']
        else:
            if (currNodeOne == currNodeTwo):
                return currNodeOne

            linkListOneLength -= 1
            linkListTwoLength -= 1

            currNodeOne = currNodeOne['next']
            currNodeTwo = currNodeTwo['next']

def intersect(linkedListOne={}, linkedListTwo={}):
    '''
    Solution 2 - Set tracking

    Complexity Analysis
    O(n) time | O(1) space

    Determine if the two linked lists intersects

    dict: linkedListOne
    dict: linkedListTwo
    return: Intersected node
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedListOne, dict) or bool(linkedListOne) == False or not isinstance(linkedListTwo, dict) or bool(linkedListTwo) == False):
        print('Arguments should be a valid non-empty dictionary')
        return False

    nodesSet = set()
    currNode = linkedListOne

    while (currNode != None):
        nodesSet.add(str(currNode))
        currNode = currNode['next']

    currNode = linkedListTwo

    while (currNode != None):
        if (str(currNode) in nodesSet):
            return currNode

        currNode = currNode['next']

    return None


# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    {
        'assert': 
            intersect(
                { 'data': 1, 'next': { 'data': 2, 'next': { 'data': 3, 'next': { 'data': 4, 'next': None } } } },
                { 'data': 0, 'next': { 'data': 1, 'next': { 'data': 2, 'next': { 'data': 3, 'next': { 'data': 4, 'next': None } } } } }
            ),
        'expected': { 'data': 1, 'next': { 'data': 2, 'next': { 'data': 3, 'next': { 'data': 4, 'next': None } } } },
    },
    {
        'assert': 
            intersect(
                { 'data': 0, 'next': { 'data': 1, 'next': { 'data': 2, 'next': { 'data': 3, 'next': { 'data': 4, 'next': { 'data': 5, 'next': None } } } } } },
                { 'data': 2, 'next': { 'data': 3, 'next': { 'data': 4, 'next': { 'data': 5, 'next': None } } } }
            ),
        'expected': { 'data': 2, 'next': { 'data': 3, 'next': { 'data': 4, 'next': { 'data': 5, 'next': None } } } },
    },
    {
        'assert': intersect(
            { 'data': 1, 'next': { 'data': 2, 'next': { 'data': 3, 'next': { 'data': 4, 'next': None } } } },
            { 'data': 0, 'next': { 'data': 1, 'next': { 'data': 2, 'next': { 'data': 3, 'next': { 'data': 4, 'next': { 'data': 5, 'next': None } } } } } }
        ),
        'expected': None,
    },
    {
        'assert': 
            intersect(
                { 'data': 3, 'next': { 'data': 1, 'next': { 'data': 5, 'next': { 'data': 9, 'next': { 'data': 7, 'next': { 'data': 2, 'next': { 'data': 1, 'next': None } } } } } } },
                { 'data': 4, 'next': { 'data': 6, 'next': { 'data': 7, 'next': { 'data': 2, 'next': { 'data': 1, 'next': None } } } } }
            ),
        'expected': { 'data': 7, 'next': { 'data': 2, 'next': { 'data': 1, 'next': None } } },
    },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    {
        'assert': intersect({ 'data': 1, 'next': None }, { 'data': 1, 'next': None }),
        'expected': { 'data': 1, 'next': None }
    },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': intersect(), 'expected': False },
    { 'assert': intersect(0), 'expected': False },
    { 'assert': intersect(''), 'expected': False },
    { 'assert': intersect([]), 'expected': False },
    { 'assert': intersect(()), 'expected': False },
    { 'assert': intersect({}), 'expected': False },
    { 'assert': intersect(None), 'expected': False },
    { 'assert': intersect(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test['assert'] == test['expected'] else '👎 Test FAILED 👎', '\n')


