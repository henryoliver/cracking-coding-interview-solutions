import sys
sys.path.append('../../Data Structures')

from stack import Stack

def isPalindrome(linkedList={}):
    '''
    Solution 1 - Hash map

    Complexity Analysis
    O(n) time | O(n) space

    Check if a linked list is a palindrome

    dict: linkedList
    return: True if its palindrome
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False):
        print('Argument should be a valid non-empty dictionary')
        return False

    charsMap = dict()
    currNode = linkedList

    while (currNode != None):
        char = currNode['data']
        charLower = char.lower()

        currNode = currNode['next']

        if (char == ' '):
            continue

        if (charLower in charsMap):
            charsMap[charLower] += 1
        else:
            charsMap[charLower] = 1

    oddCount = 0

    for char in charsMap.values():
        if (char % 2 == 1):
            oddCount += 1

    return oddCount <= 1

def isPalindrome(linkedList={}):
    '''
    Solution 2 - Reverse string

    Complexity Analysis
    O(n) time | O(n) space

    Check if a linked list is a palindrome

    dict: linkedList
    return: True if its palindrome
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False):
        print('Argument should be a valid non-empty dictionary')
        return False

    slowPointer = linkedList
    fastPointer = linkedList

    middleNode = None

    stringFirstHalf = ''
    stringSecondHalf = ''

    while (slowPointer != None):
        if (fastPointer != None and fastPointer['next'] != None):
            stringFirstHalf = slowPointer['data'] + stringFirstHalf

            middleNode = slowPointer['next']
            fastPointer = fastPointer['next']['next']
        else:
            stringSecondHalf += slowPointer['data']

        slowPointer = slowPointer['next']

    # Fast pointer will NOT be NULL if there is odd elements in the linked list
    if (fastPointer != None):
        stringFirstHalf = middleNode['data'] + stringFirstHalf

    return stringFirstHalf.lower() == stringSecondHalf.lower()

def isPalindrome(linkedList={}):
    '''
    Solution 3 - Runner slow/fast pointers creating a stack

    Complexity Analysis
    O(n) time | O(n) space

    Check if a linked list is a palindrome

    dict: linkedList
    return: True if its palindrome
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(linkedList, dict) or bool(linkedList) == False):
        print('Argument should be a valid non-empty dictionary')
        return False

    charsStack = Stack()

    slowPointer = linkedList
    fastPointer = linkedList

    middleNode = None

    while (slowPointer != None):
        if (fastPointer != None and fastPointer['next'] != None):
            charsStack.push(slowPointer['data'])

            middleNode = slowPointer['next']
            fastPointer = fastPointer['next']['next']
        else:
            # Skip middle node in odd linked list
            if (fastPointer != None and middleNode == slowPointer):
                slowPointer = slowPointer['next']
                continue

            charStack = charsStack.pop()

            if (slowPointer['data'].lower() != charStack.lower()):
                return False

        slowPointer = slowPointer['next']

    return True


# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    {
        'assert': isPalindrome({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'b', 'next': { 'data': 'a', 'next': None } } } }),
        'expected': True,
    },
    {
        'assert': isPalindrome({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'b', 'next': { 'data': 'a', 'next': None } } } } }),
        'expected': True,
    },
    {
        'assert': isPalindrome({ 'data': 'a', 'next': { 'data': 'b', 'next': { 'data': 'c', 'next': { 'data': 'd', 'next': { 'data': 'e', 'next': None } } } } }),
        'expected': False
    },
    {
        'assert': isPalindrome({ 'data': 'K', 'next': { 'data': 'a', 'next': { 'data': 'y', 'next': { 'data': 'a', 'next': { 'data': 'k', 'next': None } } } } }),
        'expected': True
    },
    {
        'assert': isPalindrome({ 'data': 'R', 'next': { 'data': 'e', 'next': { 'data': 'p', 'next': { 'data': 'a', 'next': { 'data': 'p', 'next': { 'data': 'e', 'next': { 'data': 'r', 'next': None } } } } } } }),
        'expected': True
    },
    {
        'assert': isPalindrome({ 'data': 'T', 'next': { 'data': 'a', 'next': { 'data': 'c', 'next': { 'data': 'o', 'next': { 'data': 'C', 'next': { 'data': 'a', 'next': { 'data': 't', 'next': None } } } } } } }),
        'expected': True
    },
    {
        'assert': isPalindrome({ 'data': 'T', 'next': { 'data': 'a', 'next': { 'data': 'c', 'next': { 'data': 'o', 'next': { 'data': 'C', 'next': { 'data': 'a', 'next': { 'data': 't', 'next': { 'data': 'w', 'next': None } } } } } } } }),
        'expected': False
    },
    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    # {
    #     'assert': isPalindrome({ 'data': 'a', 'next': None }),
    #     'expected': True
    # },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': isPalindrome(), 'expected': False },
    { 'assert': isPalindrome(0), 'expected': False },
    { 'assert': isPalindrome(''), 'expected': False },
    { 'assert': isPalindrome([]), 'expected': False },
    { 'assert': isPalindrome(()), 'expected': False },
    { 'assert': isPalindrome({}), 'expected': False },
    { 'assert': isPalindrome(None), 'expected': False },
    { 'assert': isPalindrome(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test['assert'] == test['expected'] else '👎 Test FAILED 👎', '\n')


