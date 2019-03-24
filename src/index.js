module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
  	for (let col = 0; col < 9; col++) {
  		if (matrix[row][col] == 0) {
  			for (let value = 1; value <= 9; value++) {
  				if (possibleValueRow(row, value) && possibleValueCol(col, value) && possibleValueSquare(row, col, value)) {
  					matrix[row][col] = value;
  					if (solveSudoku(matrix)) {
  						return matrix;
  					} else {
  						matrix[row][col] = 0;
  					}
  				}
  			}
  			return false;
  		}
  	}
  }

  function possibleValueCol(col, value) {
  	for (let i = 0; i < 9; i++) {
  		if (matrix[i][col] == value) {
  			return false;
  		}
  	}
  	return true;
  }

   function possibleValueRow(row, value) {
  	for (let i = 0; i < 9; i++) {
  		if (matrix[row][i] == value) {
  			return false;
  		}
  	}
  	return true;
  }

  function possibleValueSquare(row, col, value) {
    let j = (Math.floor(col / 3) * 3);
    let i = (Math.floor(row / 3) * 3);
    for (let i1 = 0; i1 < 3; i1++) {
      for (let j1 = 0; j1 < 3; j1++) {
        if (matrix[i + i1][j + j1] == value) {
          return false;
        }
      }
    }
  	return true;
  }

   return matrix;
}
