def rotateMatrix(matrix=[]):
    '''
    Solution 1 - Transpose Matrix by transforming rows into columns swapping it diagonally.

    Complexity Analysis
    O(n^2) time | O(1) space

    Rotate the matrix by 90 degrees clockwise.

    list: matrix - Two-dimensional list
    return: List matrix rotated clockwise matrix
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(matrix, list) or len(matrix) == 0):
        print('Arguments should be a valid non-empty list')
        return False

    # Check if it's a perfect square matrix
    if (len(matrix) < 2 or len(matrix) != len(matrix[0])):
        print('Argument should be a valid perfect-square matrix')
        return matrix

    n = len(matrix)

    # Step 1 - Transpose Matrix
    for i in range(n):
        for j in range(i):
            temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp

    # Step 2 - Swap/Flip rows edges
    for i in range(n):
        for j in range(n // 2):
            temp = matrix[i][j]
            matrix[i][j] = matrix[i][n - 1 - j]
            matrix[i][n - 1 - j] = temp

    return matrix

def rotateMatrix(matrix=[]):
    '''
    Solution 2 - For-way edges swap from outermost layer to innermost.

    Complexity Analysis
    O(n^2) time | O(1) space

    Rotate the matrix by 90 degrees clockwise.

    list: matrix - Two-dimensional list
    return: List matrix rotated clockwise matrix
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(matrix, list) or len(matrix) == 0):
        print('Arguments should be a valid non-empty list')
        return False

    # Check if it's a perfect square matrix
    if (len(matrix) < 2 or len(matrix) != len(matrix[0])):
        print('Argument should be a valid perfect-square matrix')
        return matrix

    n = len(matrix)

    # Step 1 - Transpose Matrix
    for i in range(n // 2):
        for j in range(i, n - 1 - i):
            # [T, x, x, R]
            # [x, x, x, x]
            # [x, x, x, x]
            # [L, x, x, B]

            # Save top
            top = matrix[i][j] # matrix[row][col]

            # Left -> Top
            matrix[i][j] = matrix[n - 1 - j][i]

            # Bottom -> Left
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]

            # Right -> Bottom
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]

            # Top -> Right
            matrix[j][n - 1 - i] = top

    return matrix

# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 'assert': rotateMatrix([[0, 1], [2, 3]]), 'expected': [[2, 0], [3, 1]] },
    { 'assert': rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 'expected': [[7, 4, 1], [8, 5, 2], [9, 6, 3]] },
    { 'assert': rotateMatrix([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]), 'expected': [[15, 13, 2, 5], [14, 3, 4, 1],[12, 6, 8, 9], [16, 7, 10, 11]] },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    { 'assert': rotateMatrix([[0, 1]]), 'expected': [[0, 1]] },
    { 'assert': rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), 'expected': [[21, 16, 11, 6, 1], [22, 17, 12, 7, 2], [23, 18, 13, 8, 3], [24, 19, 14, 9, 4], [25, 20, 15, 10, 5]] },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': rotateMatrix(), 'expected': False },
    { 'assert': rotateMatrix(0), 'expected': False },
    { 'assert': rotateMatrix(''), 'expected': False },
    { 'assert': rotateMatrix([]), 'expected': False },
    { 'assert': rotateMatrix(()), 'expected': False },
    { 'assert': rotateMatrix({}), 'expected': False },
    { 'assert': rotateMatrix(None), 'expected': False },
    { 'assert': rotateMatrix(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'Expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


