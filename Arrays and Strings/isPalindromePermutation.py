def isPalindromePermutation(string=''):
    '''
    Solution 1 - Hash table

    Complexity Analysis
    O(n) time | O(n) space

    Check if it is a permutation of a palindrome

    string: string - ASCII (128 characters)
    return: boolean
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(string, str) or string == ''):
        print('Argument should be a valid non-empty string')
        return string

    charsMap = dict()

    for char in string.lower():
        if (char == ' '):
            continue

        if (char in charsMap):
            charsMap[char] += 1
        else:
            charsMap[char] = 1

    oddCount = 0

    for char in charsMap:
        if (charsMap[char] % 2 == 1):
            oddCount += 1

    return oddCount <= 1


# Test cases (black box - unit testing)
testCases = [
    { 'assert': isPalindromePermutation('Wow'), 'expected': True },
    { 'assert': isPalindromePermutation('Anna'), 'expected': True },
    { 'assert': isPalindromePermutation('Kayak'), 'expected': True },
    { 'assert': isPalindromePermutation('1abcba1'), 'expected': True },
    { 'assert': isPalindromePermutation('AbCdcBa'), 'expected': True },
    { 'assert': isPalindromePermutation('Repaper'), 'expected': True },
    { 'assert': isPalindromePermutation('abcdefg'), 'expected': False },
    { 'assert': isPalindromePermutation('Tact Coa'), 'expected': True },
    { 'assert': isPalindromePermutation('Ab Cd cBa'), 'expected': True },
    { 'assert': isPalindromePermutation('ab c d efg'), 'expected': False },
    { 'assert': isPalindromePermutation('Hello World'), 'expected': False },

    # Boundary conditions (empty lists, singleton list, large numbers, small numbers)
    { 'assert': isPalindromePermutation(), 'expected': '' },
    { 'assert': isPalindromePermutation(0), 'expected': 0 },
    { 'assert': isPalindromePermutation(''), 'expected': '' },
    { 'assert': isPalindromePermutation([]), 'expected': [] },
    { 'assert': isPalindromePermutation(()), 'expected': () },
    { 'assert': isPalindromePermutation({}), 'expected': {} },
    { 'assert': isPalindromePermutation(None), 'expected': None },
    { 'assert': isPalindromePermutation(False), 'expected': False },

    # Extremes
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


