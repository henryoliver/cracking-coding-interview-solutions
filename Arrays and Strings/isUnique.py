def hasUniqueCharacters(string=''):
    '''
    Solution 1 - Set tracking

    O(n) time | O(1) space

    Determine if a string has all unique characters.

    string: ASCII simple string (128 characters)
    return: True if unique characters, otherwise false
    '''
    # Assertions
    assert isinstance(string, str), 'Argument should be a valid string'

    # Assuming ASCII not extended
    if (len(string) > 128):
        return False

    charSet = set()

    for char in string:
        if (char in charSet):
            return False
        else:
            charSet.add(char)

    return True

def hasUniqueCharacters(string=''):
    '''
    Solution 2 - Sort comparing neighbors

    O(n) time | O(1) space

    Determine if a string has all unique characters.

    string: ASCII simple string (128 characters)
    return: True if unique characters, otherwise false
    '''
    # Assertions
    assert isinstance(string, str), 'Argument should be a valid string'

    # Assuming ASCII not extended
    if (len(string) > 128):
        return False

    sortedString = sorted(string)

    for i in range(len(sortedString)):
        if (sortedString[i] == sortedString[i - 1]):
            return False

    return True

# Test cases (black box - unit testing)
testCases = [
    { 'assert': hasUniqueCharacters('abcdef'), 'expected': True },
    { 'assert': hasUniqueCharacters('hello'), 'expected': False },
    { 'assert': hasUniqueCharacters('world'), 'expected': True },
    { 'assert': hasUniqueCharacters('abcdefa'), 'expected': False },
    { 'assert': hasUniqueCharacters('23ds2'), 'expected': False },
    { 'assert': hasUniqueCharacters('hb 627jh=j ()'), 'expected': False },
    
    # Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { 'assert': hasUniqueCharacters(), 'expected': True },
    # { 'assert': hasUniqueCharacters(1234), 'expected': False },

    # Extremes
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


