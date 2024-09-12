// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    const newArray = [];
    for (let i = 0; i < matrix.length; i += 1) {
        if ((i + 1) % 2 === 0) {
            newArray.push(...matrix[i].reverse());
        }
        newArray.push(...matrix[i]);
    }
    return matrix.flat();
};
