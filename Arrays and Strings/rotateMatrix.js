/**
 * Solution 1 - Transpose Matrix by transforming rows into columns swapping diagonally.
 *
 * Complexity Analysis
 * O(n^2) time | O(1) space
 *
 * Rotate the matrix by 90 degrees clockwise.
 *
 * @param {array} matrix - Two dimensional array
 * @returns {array} Rotated clockwise matrix
 */
function rotateMatrix(matrix = []) {
    // Gracefully handle type and Falsy values
    if (Array.isArray(matrix) === false || matrix.length === 0) {
        console.error('Parameter should be a valid non-empty array');
        return false;
    }

    // Check if it's a perfect square matrix
    if (matrix.length < 2 || matrix.length !== matrix[0].length) {
        console.error('Parameter should be a valid perfect square matrix');
        return matrix;
    }

    const n = matrix.length;

    // Step 1 - Transpose Matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Step 2 - Swap/Flip rows edges
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }

    return matrix;
}

/**
 * Solution 2 - Four-way edges swap from outermost layer to innermost.
 *
 * Complexity Analysis
 * O(n^2) time | O(1) space
 *
 * Rotate the matrix by 90 degrees clockwise.
 *
 * @param {array} matrix - Two dimensional array
 * @returns {array} Rotated clockwise matrix
 */
function rotateMatrix(matrix = []) {
    // Gracefully handle type and Falsy values
    if (Array.isArray(matrix) === false || matrix.length === 0) {
        console.error('Parameter should be a valid non-empty array');
        return false;
    }

    // Check if it's a perfect square matrix
    if (matrix.length < 2 || matrix.length !== matrix[0].length) {
        console.error('Parameter should be a valid perfect square matrix');
        return matrix;
    }

    const n = matrix.length;

    // i = Layer (outermost to innermost)
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = i; j < n - 1 - i; j++) {
            // [T, x, x, R]
            // [x, x, x, x]
            // [x, x, x, x]
            // [L, x, x, B]

            // Save top
            const top = matrix[i][j]; // matrix[row][col]

            // Left -> Top
            matrix[i][j] = matrix[n - 1 - j][i];

            // Bottom -> Left
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];

            // Right -> Bottom
            matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
            
            // Top -> Right
            matrix[j][n - 1 - i] = top;
        }
    }

    return matrix;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: JSON.stringify(rotateMatrix([[0, 1], [2, 3]])), expected: JSON.stringify([[2, 0], [3, 1]]) },
    { assert: JSON.stringify(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])), expected: JSON.stringify([[7, 4, 1], [8, 5, 2], [9, 6, 3]]) },
    { assert: JSON.stringify(rotateMatrix([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]])), expected: JSON.stringify([[15, 13, 2, 5], [14, 3, 4, 1],[12, 6, 8, 9], [16, 7, 10, 11]]) },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: JSON.stringify(rotateMatrix([[0, 1]])), expected: JSON.stringify([[0, 1]]) },
    { assert: JSON.stringify(rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])), expected: JSON.stringify([[21, 16, 11, 6, 1], [22, 17, 12, 7, 2], [23, 18, 13, 8, 3], [24, 19, 14, 9, 4], [25, 20, 15, 10, 5]]) },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: rotateMatrix(), expected: false },
    { assert: rotateMatrix(0), expected: false },
    { assert: rotateMatrix(''), expected: false },
    { assert: rotateMatrix([]), expected: false },
    { assert: rotateMatrix({}), expected: false },
    { assert: rotateMatrix(NaN), expected: false },
    { assert: rotateMatrix(null), expected: false },
    { assert: rotateMatrix(false), expected: false },
    { assert: rotateMatrix(new Set()), expected: false },
    { assert: rotateMatrix(new Map()), expected: false },
    { assert: rotateMatrix(undefined), expected: false }
];

// Run tests
testCases.forEach((test, index) => {
    const currentTest = `# Test ${index + 1}`;

    console.group(currentTest);
    console.log('Actual:', test.assert);
    console.log('Expected:', test.expected);
    console.log(test.assert === test.expected ? '🤘 Test PASSED 🤘' : '👎 Test FAILED 👎', '\n');
    console.groupEnd(currentTest);
});

