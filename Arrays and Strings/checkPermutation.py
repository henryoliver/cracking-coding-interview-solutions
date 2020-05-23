def checkPermutation(strA='', strB=''):
    '''
    Solution 1 - Sort and compare

    Complexity Analysis
    O(n + m) time | O(1) space

    Decide if one is a permutation of the other

    string: strA - ASCII (128 characters)
    string: strB - ASCII (128 characters)
    return: True if first and second strings are permutations otherwise false
    '''
    # Assertions
    assert isinstance(strA, str), 'Argument should be a valid string'
    assert isinstance(strB, str), 'Argument should be a valid string'

    if (len(strA) != len(strB)):
        return False

    compA = ''.join(sorted(strA))
    compB = ''.join(sorted(strB))

    return compA == compB

def checkPermutation(strA='', strB=''):
    '''
    Solution 2 - Hash Map track 

    Complexity Analysis
    O(n + m) time | O(n) space

    Decide if one is a permutation of the other

    string: strA - ASCII (128 characters)
    string: strB - ASCII (128 characters)
    return: True if first and second strings are permutations otherwise false
    '''
    # Assertions
    assert isinstance(strA, str), 'Argument should be a valid string'
    assert isinstance(strB, str), 'Argument should be a valid string'

    if (len(strA) != len(strB)):
        return False

    charsMap = dict()

    for char in strA:
        if (char in charsMap):
            charsMap[char] += 1
        else:
            charsMap[char] = 1

    for char in strB:
        if (char in charsMap):
            charsMap[char] -= 1

            if (charsMap.get(char) < 0):
                return False
        else:
            return False

    return True


# Test cases (black box - unit testing)
testCases = [
    { 'assert': checkPermutation('hello', 'olleh'), 'expected': True },
    { 'assert': checkPermutation('abcdef', 'fedcba'), 'expected': True },
    { 'assert': checkPermutation('aabbcdef', 'fedcbbaa'), 'expected': True },
    { 'assert': checkPermutation('1234567812345678', '8877665544332211'), 'expected': True },
    { 'assert': checkPermutation('1122334455667788', '9911223344556677'), 'expected': False },
    
    # Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    
    # Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { 'assert': checkPermutation(), 'expected': True },
    # { 'assert': checkPermutation(1234), 'expected': False },

    # Extremes
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


