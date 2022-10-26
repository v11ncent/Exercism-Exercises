class Matrix {
    matrix = [];
    columns = [];
    rows = [];
    
    constructor(string) {
        this.setMatrix = string;
        this.setColumns = this.getMatrix;
        this.setRows = this.getMatrix;
    }

    get getMatrix() {
        return this.matrix;
    }

    get getColumns() {
        return this.columns;
    }

    get getRows() {
        return this.rows;
    }

    set setMatrix(string) {
        let stringArray = Array.from(string).filter(element => element !== ' ');
        let matrixArray = [];

        for (let i = 0; i < stringArray.length; i++) {
            let innerArray = [];
            
            for (let j = 0; j < stringArray.length; j++) {
                if (stringArray[j] == '\n') {
                    stringArray = stringArray.slice(j + 1);
                    break;
                }

                innerArray.push(stringArray[j]);
            }

            matrixArray.push(innerArray);
        }


        this.matrix = matrixArray;
    }

    set setColumns(matrix) {
        let columnsArray = [];

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                columnsArray.push(matrix[j][i]);
            }
        }

        this.columns = columnsArray;
    }

    set setRows(matrix) {
        let rowsArray = [];

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                rowsArray.push(matrix[i][j]);
            }
        }

        this.rows = rowsArray;
    }
}

const stringMatrix = new Matrix('9 8 7\n5 3 2\n6 6 7\n');

console.log(`Matrix: ${stringMatrix.getMatrix}`);
console.log(`Matrix rows: ${stringMatrix.getRows}`);
console.log(`Matrix columns: ${stringMatrix.getColumns}`);
