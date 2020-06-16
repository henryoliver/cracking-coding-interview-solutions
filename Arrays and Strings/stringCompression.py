def stringCompression(string=''):
    '''
    Solution 1

    Complexity Analysis
    O(n) time | O(1) space

    Perform basic string compression

    string: string
    return: string
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(string, str) or string == ''):
        print('Arguments should be a valid non-empty strings')
        return False

    compressedChars = [];

    i = 0

    while (i < len(string)):
        charCount = 1
        currentChar = string[i]

        j = i + 1

        while (j < len(string) and currentChar == string[j]):
            j += 1
            charCount += 1

        compressedChars.extend([currentChar, str(charCount)])

        i = j

    return ''.join(compressedChars) if (len(compressedChars) < len(string)) else string


# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 'assert': stringCompression('abbcccdddd'), 'expected': 'a1b2c3d4' },
    { 'assert': stringCompression('aabcccccaaa'), 'expected': 'a2b1c5a3' },
    { 'assert': stringCompression('abcdefghijkl'), 'expected': 'abcdefghijkl' },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    { 'assert': stringCompression('a'), 'expected': 'a' },
    { 'assert': stringCompression('abcdefghijklmnopqrstuvxzyw'), 'expected': 'abcdefghijklmnopqrstuvxzyw' },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': stringCompression(), 'expected': False },
    { 'assert': stringCompression(0), 'expected': False },
    { 'assert': stringCompression(''), 'expected': False },
    { 'assert': stringCompression([]), 'expected': False },
    { 'assert': stringCompression(()), 'expected': False },
    { 'assert': stringCompression({}), 'expected': False },
    { 'assert': stringCompression(None), 'expected': False },
    { 'assert': stringCompression(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


