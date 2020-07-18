class Node(dict):
    def __init__(self, data=float('inf'), next=None):
        self.data = data
        self.next = next

def sumLists(linkedListOne={}, linkedListTwo={}):
    '''
    Solution - Traverse lists in parallel suming the nodes

    Complexity Analysis
    O(n) time | O(n) space

    Adds the two numbers and returns the sum as a linked list

    dict: linkedListOne
    dict: linkedListTwo
    return: Linked list with sumup numbers    
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedListOne, dict) or bool(linkedListOne) == False or not isinstance(linkedListTwo, dict) or bool(linkedListTwo) == False):
        print('Arguments should be a valid non-empty dictionary')
        return False

    sumLinkedList = Node(0)
    currSumLinkedList = sumLinkedList

    currNodeOne = linkedListOne
    currNodeTwo = linkedListTwo

    carryOver = 0

    while (currNodeOne != None or currNodeTwo != None or carryOver > 0):
        nodeSum = 0

        if (currNodeOne):
            nodeSum += currNodeOne['data']
            currNodeOne = currNodeOne['next']

        if (currNodeTwo):
            nodeSum += currNodeTwo['data']
            currNodeTwo = currNodeTwo['next']

        nodeSum += carryOver
        carryOver = nodeSum // 10

        currSumLinkedList['next'] = dict({ 'data': nodeSum % 10, 'next': None })
        currSumLinkedList = currSumLinkedList['next']

    return sumLinkedList['next']

# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 
        'assert': sumLists({ 'data': 5, 'next': { 'data': 2, 'next': { 'data': 4, 'next': None } } }, { 'data': 3, 'next': { 'data': 8, 'next': { 'data': 1, 'next': None } } }),
        'expected': { 'data': 8, 'next': { 'data': 0, 'next': { 'data': 6, 'next': None } } }
    },
    { 
        'assert': sumLists({ 'data': 8, 'next': { 'data': 5, 'next': { 'data': 7, 'next': None } } }, { 'data': 2, 'next': { 'data': 9, 'next': { 'data': 0, 'next': None } } }),
        'expected': { 'data': 0, 'next': { 'data': 5, 'next': { 'data': 8, 'next': None } } }
    },
    { 
        'assert': sumLists({ 'data': 9, 'next': { 'data': 8, 'next': { 'data': 7, 'next': None } } }, { 'data': 4, 'next': { 'data': 9, 'next': { 'data': 0, 'next': { 'data': 8, 'next': None } } } }),
        'expected': { 'data': 3, 'next': { 'data': 8, 'next': { 'data': 8, 'next': { 'data': 8, 'next': None } } } }
    },
    { 
        'assert': sumLists(
            { 'data': 5, 'next': { 'data': 1, 'next': { 'data': 8, 'next': { 'data': 9, 'next': { 'data': 8, 'next': None }} } } },
            { 'data': 4, 'next': { 'data': 9, 'next': { 'data': 0, 'next': { 'data': 8, 'next': None } } } }
        ),
        'expected': { 'data': 9, 'next': { 'data': 0, 'next': { 'data': 9, 'next': { 'data': 7, 'next': { 'data': 9, 'next': None } } } } }
    },
    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    { 
        'assert': sumLists({ 'data': 1, 'next': None }, { 'data': 1, 'next': None }),
        'expected': { 'data': 2, 'next': None }
    },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': sumLists(), 'expected': False },
    { 'assert': sumLists(0), 'expected': False },
    { 'assert': sumLists(''), 'expected': False },
    { 'assert': sumLists([]), 'expected': False },
    { 'assert': sumLists(()), 'expected': False },
    { 'assert': sumLists({}), 'expected': False },
    { 'assert': sumLists(None), 'expected': False },
    { 'assert': sumLists(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


