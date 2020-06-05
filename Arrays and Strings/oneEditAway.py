def oneEditAway(strA='', strB=''):
    '''
    Solution 1 - Index pointers

    Complexity Analysis
    O(n) time | O(1) space

    Check if the strings are one edit away

    string: strA
    string: strB
    return: boolean
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(strA, str) or strA == '' or not isinstance(strB, str) or strB == ''):
        print('Arguments should be a valid non-empty strings')
        return False

    # Check for zero edits
    if (strA == strB):
        return True

    # Check for more than 1 removal or insertion
    if (abs(len(strA) - len(strB)) > 1):
        return False

    strOne = strA if len(strA) <= len(strB) else strB
    strTwo = strB if len(strB) >= len(strA) else strA

    indexOne = 0
    indexTwo = 0

    edited = False

    while (indexOne < len(strOne) and indexTwo < len(strTwo)):
        charOne = strOne[indexOne]
        charTwo = strTwo[indexTwo]

        if (charOne != charTwo):
            if (edited):
                return False

            edited = True

            if (len(strOne) == len(strTwo)):
                indexOne += 1
                indexTwo += 1
            else:
                indexTwo += 1
        else:
            indexOne += 1
            indexTwo += 1

    return True


# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 'assert': oneEditAway('abc', 'abcd'), 'expected': True },
    { 'assert': oneEditAway('pale', 'ple'), 'expected': True },
    { 'assert': oneEditAway('pale', 'bale'), 'expected': True },
    { 'assert': oneEditAway('pale', 'bake'), 'expected': False },
    { 'assert': oneEditAway('pales', 'pale'), 'expected': True },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    { 'assert': oneEditAway('a', 'a'), 'expected': True },
    { 'assert': oneEditAway('abcdefghijklmnopqrstuvxzyw', 'abcdefghijklmnopqrstuvxzywa'), 'expected': True },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': oneEditAway(), 'expected': False },
    { 'assert': oneEditAway(0), 'expected': False },
    { 'assert': oneEditAway(''), 'expected': False },
    { 'assert': oneEditAway([]), 'expected': False },
    { 'assert': oneEditAway(()), 'expected': False },
    { 'assert': oneEditAway({}), 'expected': False },
    { 'assert': oneEditAway(None), 'expected': False },
    { 'assert': oneEditAway(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


