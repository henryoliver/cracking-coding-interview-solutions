def partition(linkedList={}, partition=0):
    '''
    Solution 1 - Stable approach - Two partitions (left/right) not chaging linked list order

    Complexity Analysis
    O(n) time | O(n) space

    Partition a linked list around a value x

    dict: linkedList 
    integer: partition
    return: Linked list re-arranged partition by x    
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False or not isinstance(partition, int) or partition < 0):
        print('Arguments should be a valid non-empty dictionary and a positive valid integer')
        return False

    leftPartition = { 'data': float('inf'), 'next': None }
    rightPartition = { 'data': float('inf'), 'next': None }

    leftCurrNode = leftPartition
    rightCurrNode = rightPartition

    currNode = linkedList

    while (currNode != None):
        if (currNode['data'] < partition):
            leftCurrNode['next']= currNode
            leftCurrNode = leftCurrNode['next']
        else:
            rightCurrNode['next'] = currNode
            rightCurrNode = rightCurrNode['next']

        currNode = currNode['next']

    rightCurrNode['next'] = None
    leftCurrNode['next'] = rightPartition['next']

    return leftPartition['next']

def partition(linkedList={}, partition=0):
    '''
    Solution 2 - Not Stable approach - Rearrange the elements growing the linked list at the head and tail

    Complexity Analysis
    O(n) time | O(1) space

    Partition a linked list around a value x

    dict: linkedList 
    integer: partition
    return: Linked list re-arranged partition by x    
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False or not isinstance(partition, int) or partition < 0):
        print('Arguments should be a valid non-empty dictionary and a positive valid integer')
        return False

    head = linkedList
    tail = linkedList

    while (linkedList != None):
        linkedListNext = linkedList['next']

        if (linkedList['data'] < partition):
            linkedList['next']= head
            head = linkedList
        else:
            tail['next'] = linkedList
            tail = linkedList

        linkedList = linkedListNext

    tail['next'] = None

    return head

# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 
        'assert': partition({ 'data': 5, 'next': { 'data': 2, 'next': { 'data': 9, 'next': { 'data': 0, 'next': None } } } }, 5),
        'expected': { 'data': 2, 'next': { 'data': 0, 'next': { 'data': 5, 'next': { 'data': 9, 'next': None } } } } 
    },
    { 
        'assert': partition({ 'data': 53, 'next': { 'data': 92, 'next': { 'data': 23, 'next': { 'data': 19, 'next': { 'data': 84, 'next': None } } } } }, 23),
        'expected': { 'data': 19, 'next': { 'data': 53, 'next': { 'data': 92, 'next': { 'data': 23, 'next': { 'data': 84, 'next': None } } } } } 
    },
    { 
        'assert': partition({ 'data': 83, 'next': { 'data': 12, 'next': { 'data': 87, 'next': { 'data': 33, 'next': { 'data': 54, 'next': None } } } } }, 87),
        'expected': { 'data': 83, 'next': { 'data': 12, 'next': { 'data': 33, 'next': { 'data': 54, 'next': { 'data': 87, 'next': None } } } } } 
    },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': partition(), 'expected': False },
    { 'assert': partition(0), 'expected': False },
    { 'assert': partition(''), 'expected': False },
    { 'assert': partition([]), 'expected': False },
    { 'assert': partition(()), 'expected': False },
    { 'assert': partition({}), 'expected': False },
    { 'assert': partition(None), 'expected': False },
    { 'assert': partition(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


