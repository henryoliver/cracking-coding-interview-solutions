def zeroMatrix(matrix=[]):
    '''
    Solution 1 - Track zero's position

    Complexity Analysis
    O(n^2) time | O(n) space

    If element in a non-square (M x N) matrix is zero, its entire row 
    and column should be set to zero

    list: matrix - Two-dimensional list
    return: Matrix with zeros
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(matrix, list) or len(matrix) == 0):
        print('Arguments should be a valid non-empty list')
        return False

    m = len(matrix) # Rows
    n = len(matrix[0]) # Columns

    trackedZeros = list()

    # Traverse matrix and save/track each zero location
    for i in range(m):
        for j in range(n):
            if (matrix[i][j] == 0):
                trackedZeros.append([i, j])

    # Set tracked zero row/column to zero
    for i in range(len(trackedZeros)):
        currZeroRow = trackedZeros[i][0]
        currZeroCol = trackedZeros[i][1]

        row = 0

        while (row < m):
            matrix[row][currZeroCol] = 0
            row += 1

        col = 0

        while (col < n):
            matrix[currZeroRow][col] = 0
            col += 1

    return matrix

def zeroMatrix(matrix=[]):
    '''
    Solution 2 - Flag zeros and turn it's rows and columns to zero

    Complexity Analysis
    O(n^2) time | O(1) space

    If element in a non-square (M x N) matrix is zero, its entire row 
    and column should be set to zero

    list: matrix - Two-dimensional list
    return: Matrix with zeros
    '''
    # Gracefully handle type and Falsy values
    if (not isinstance(matrix, list) or len(matrix) == 0):
        print('Arguments should be a valid non-empty list')
        return False

    m = len(matrix) # Rows
    n = len(matrix[0]) # Columns

    # Traverse matrix and flag ('zero') each zero location
    for i in range(m):
        for j in range(n):
            if (matrix[i][j] == 0):
                matrix[i][j] = 'zero'

    # Traverse matrix again and replace 'zero' rows/columns with zeros
    for i in range(m):
        for j in range(n):
            if (matrix[i][j] == 'zero'):
                matrix[i][j] = 0

                row = 0

                while (row < m):
                    if (matrix[row][j] != 'zero'):
                        matrix[row][j] = 0
                    row += 1

                col = 0

                while (col < n):
                    if (matrix[i][col] != 'zero'):
                        matrix[i][col] = 0
                    col += 1

    return matrix

# Test cases (black box - unit testing)
testCases = [
    # Normal
    # Data that is typical (expected) and should be accepted by the system.
    { 'assert': zeroMatrix([[1, 0], [1, 1]]), 'expected': [[0, 0], [1, 0]] },
    { 'assert': zeroMatrix([[1, 0, 3], [4, 5, 6], [7, 0, 9]]), 'expected': [[0, 0, 0], [4, 0, 6], [0, 0, 0]] },
    { 'assert': zeroMatrix([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]), 'expected': [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]] }, 
    { 'assert': zeroMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [ 9, 10, 11, 12], [13, 14, 15, 16]]), 'expected': [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]] },
    { 'assert': zeroMatrix([[1, 2, 3, 4, 0], [6, 0, 8, 9, 10], [11, 12, 13, 14, 15], [16, 0, 18, 19, 20], [21, 22, 23, 24, 25]]), 'expected': [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [11, 0, 13, 14, 0], [0, 0, 0, 0, 0], [21, 0, 23, 24, 0]] },

    # Boundary data (extreme data, edge case)
    # Data at the upper or lower limits of expectations that should be accepted by the system.
    { 'assert': zeroMatrix([[0, 1]]), 'expected': [[0, 0]] },
    { 'assert': zeroMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 0], [17, 18, 19, 20]]), 'expected': [[1, 0, 3, 0], [5, 0, 7, 0], [0, 0, 0, 0], [0, 0, 0, 0], [17, 0, 19, 0]] },

    # Abnormal data (erroneous data)
    # Data that falls outside of what is acceptable and should be rejected by the system.
    { 'assert': zeroMatrix(), 'expected': False },
    { 'assert': zeroMatrix(0), 'expected': False },
    { 'assert': zeroMatrix(''), 'expected': False },
    { 'assert': zeroMatrix([]), 'expected': False },
    { 'assert': zeroMatrix(()), 'expected': False },
    { 'assert': zeroMatrix({}), 'expected': False },
    { 'assert': zeroMatrix(None), 'expected': False },
    { 'assert': zeroMatrix(False), 'expected': False }
]

# Run tests
for (index, test) in enumerate(testCases):
    print(f'# Test {index + 1}')
    print(f'Actual: {test["assert"]}')
    print(f'expected: {test["expected"]}')
    print('🤘 Test PASSED 🤘' if test["assert"] == test["expected"] else '👎 Test FAILED 👎', '\n')


