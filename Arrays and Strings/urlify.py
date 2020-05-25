def urlify(string=''):
    '''
    Solution 1 - Treverse string array

    Complexity Analysis
    O(n) time | O(n) space

    Replace all spaces in a string with its safe ASCII encoded value

    string: string - ASCII (128 characters)
    return: Encoded string
    '''
    # Assertions
    # assert isinstance(string, str) and string != '', 'Argument should be a valid non-empty string'

    # Gracefully handle type and Falsy values
    if (not isinstance(string, str) or string == ''):
        print('Argument should be a valid non-empty string')
        return string

    encodedArray = list(string.strip())

    for i in range(len(encodedArray)):
        if (encodedArray[i] == ' '):
            encodedArray[i] = '%20'

    return ''.join(encodedArray)


# Test cases (black box - unit testing)
testCases = [
    { 'assert': urlify('hello world'), 'expected': 'hello%20world' },
    { 'assert': urlify('Mr John Smith  '), 'expected': 'Mr%20John%20Smith' },

    # Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { 'assert': urlify(), 'expected': '' },
    { 'assert': urlify(0), 'expected': 0 },
    { 'assert': urlify(''), 'expected': '' },
    { 'assert': urlify([]), 'expected': [] },
    { 'assert': urlify(()), 'expected': () },
    { 'assert': urlify({}), 'expected': {} },
    { 'assert': urlify(None), 'expected': None },
    { 'assert': urlify(False), 'expected': False },

    # Extremes
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


