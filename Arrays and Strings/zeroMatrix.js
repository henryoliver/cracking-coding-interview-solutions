/**
 * Solution 1 - Track zero's position
 *
 * Complexity Analysis
 * O(n^2) time | O(n) space
 *
 * If element in a non-square (M x N) matrix is zero, its entire row and column should be set to zero
 *
 * @param {array} matrix - Two dimensional array
 * @returns {array} Matrix with zeros
 */
function zeroMatrix(matrix = []) {
    // Gracefully handle type and Falsy values
    if (Array.isArray(matrix) === false || matrix.length === 0) {
        console.error('Parameter should be a valid non-empty array');
        return false;
    }

    const m = matrix.length; // Rows
    const n = matrix[0].length; // Columns

    const trackedZeros = [];

    // Traverse matrix and save/track each zero location
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                trackedZeros.push([i, j]);
            }
        }
    }

    // Set tracked zero row/column to zero
    for (let i = 0; i < trackedZeros.length; i++) {
        const currZeroRow = trackedZeros[i][0];
        const currZeroCol = trackedZeros[i][1];

        let row = 0;

        while (row < m) {
            matrix[row][currZeroCol] = 0;
            row++;
        }

        let col = 0;

        while (col < n) {
            matrix[currZeroRow][col] = 0;
            col++;
        }
    }

    return matrix;
}

/**
 * Solution 2 - Flag zeros and turn it's rows and columns to zero
 *
 * Complexity Analysis
 * O(n^2) time | O(1) space
 *
 * If element in a non-square (M x N) matrix is zero, its entire row and column should be set to zero
 *
 * @param {array} matrix - Two dimensional array
 * @returns {array} Matrix with zeros
 */
function zeroMatrix(matrix = []) {
    // Gracefully handle type and Falsy values
    if (Array.isArray(matrix) === false || matrix.length === 0) {
        console.error('Parameter should be a valid non-empty array');
        return false;
    }

    const m = matrix.length; // Rows
    const n = matrix[0].length; // Columns

    // Traverse matrix and flag ('zero') each zero location
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = 'zero';
            }
        }
    }

    // Traverse matrix again and replace 'zero' rows/columns with zeros
    for  (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 'zero') {
                matrix[i][j] = 0;

                let row = 0;

                while (row < m) {
                    if (matrix[row][j] !== 'zero') {
                        matrix[row][j] = 0;
                    }
                    row++;
                }

                let col = 0;

                while (col < n) {
                    if (matrix[i][col] !== 'zero') {
                        matrix[i][col] = 0;
                    }
                    col++;
                }
            }
        }
    }

    return matrix;
}

const testCases = [
    // Normal
    // Data that is typical (expected) and should be accepted by the system.
    { assert: JSON.stringify(zeroMatrix([[1, 0], [1, 1]])), expected: JSON.stringify([[0, 0], [1, 0]]) },
    { assert: JSON.stringify(zeroMatrix([[1, 0, 3], [4, 5, 6], [7, 0, 9]])), expected: JSON.stringify([[0, 0, 0], [4, 0, 6], [0, 0, 0]]) },
    { assert: JSON.stringify(zeroMatrix([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])), expected: JSON.stringify([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]) }, 
    { assert: JSON.stringify(zeroMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [ 9, 10, 11, 12], [13, 14, 15, 16]])), expected: JSON.stringify([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]) },
    { assert: JSON.stringify(zeroMatrix([[1, 2, 3, 4, 0], [6, 0, 8, 9, 10], [11, 12, 13, 14, 15], [16, 0, 18, 19, 20], [21, 22, 23, 24, 25]])), expected: JSON.stringify([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [11, 0, 13, 14, 0], [0, 0, 0, 0, 0], [21, 0, 23, 24, 0]]) },

    // Boundary data (extreme data, edge case)
    // Data at the upper or lower limits of expectations that should be accepted by the system.
    { assert: JSON.stringify(zeroMatrix([[0, 1]])), expected: JSON.stringify([[0, 0]]) },
    { assert: JSON.stringify(zeroMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 0], [17, 18, 19, 20]])), expected: JSON.stringify([[1, 0, 3, 0], [5, 0, 7, 0], [0, 0, 0, 0], [0, 0, 0, 0], [17, 0, 19, 0]]) },

    // Abnormal data (erroneous data)
    // Data that falls outside of what is acceptable and should be rejected by the system.
    { assert: zeroMatrix(), expected: false },
    { assert: zeroMatrix(0), expected: false },
    { assert: zeroMatrix(''), expected: false },
    { assert: zeroMatrix([]), expected: false },
    { assert: zeroMatrix({}), expected: false },
    { assert: zeroMatrix(NaN), expected: false },
    { assert: zeroMatrix(null), expected: false },
    { assert: zeroMatrix(false), expected: false },
    { assert: zeroMatrix(new Set()), expected: false },
    { assert: zeroMatrix(new Map()), expected: false },
    { assert: zeroMatrix(undefined), expected: false }
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

