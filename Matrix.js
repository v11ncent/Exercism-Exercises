const string = '9 8 7\n5 3 2\n6 6 7\n';
const stringMatrix = new Matrix(string);
console.log(stringMatrix.getColumns);

class Matrix {
    matrix = [];
    columns = [];
    rows = [];
    
    constructor(string) {
        this.setMatrix = string;
        this.setColumns = this.matrix;
        this.setRows = '';
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
            columnsArray.push(matrix[i]);
            for (let j = 0; j < matrix.length; j++) {
                columnsArray.push(matrix[j]);
            }
        }

        this.columns = columnsArray;
    }

    set setRows(value) {
        this.rows = value;
    }
}
