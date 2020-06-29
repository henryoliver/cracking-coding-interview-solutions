def isStringRotation(str1='', str2=''):
    '''
    Solution - Append first string to itself and search for second string on it

    Complexity Analysis
    O(n) time | O(1) space

    Checks if str2 is a rotation of str1

    string: str1 
    string: str2
    return: True if str1 and str2 are rotated versions of eachother, otherwise false
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(str1, str) or not isinstance(str2, str) or str1 == '' or str2 == ''):
        print('Arguments should be a valid non-empty strings')
        return False

    if (len(str1) != len(str2)):
        return False

    return str2 in ''.join((str1, str1))

# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 'assert': isStringRotation('abcde', 'cdeab'), 'expected': True },
    { 'assert': isStringRotation('abcde', 'abced'), 'expected': False },
    { 'assert': isStringRotation('waterbottle', 'erbottlewat'), 'expected': True },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': isStringRotation(), 'expected': False },
    { 'assert': isStringRotation(0), 'expected': False },
    { 'assert': isStringRotation(''), 'expected': False },
    { 'assert': isStringRotation([]), 'expected': False },
    { 'assert': isStringRotation(()), 'expected': False },
    { 'assert': isStringRotation({}), 'expected': False },
    { 'assert': isStringRotation(None), 'expected': False },
    { 'assert': isStringRotation(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


