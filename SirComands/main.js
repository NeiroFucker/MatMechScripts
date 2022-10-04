const prompt = require("prompt-sync")();

class ProgrammExecutor {
    constructor(memory_obj) {
        this._memory_obj = memory_obj;
    }

    // Variables operations

    initval(value, index) {
        this._memory_obj.write(parseInt(value), index);
    }

    copy(first_index, out_index) {
        this.initval(this._memory_obj.read(first_index), out_index);
    }

    // Console operations

    consolein(index) {
        const answer = prompt("Введите значение: ");
        this._memory_obj.write(parseInt(answer), index);
    }

    consoleout(index) {
        console.log(this._memory_obj.read(index));
    }

    // goto operations

    goif(if_index, go_index) {
        return this._memory_obj.read(if_index)
            ? parseInt(go_index[0] != "$" ? go_index : go_index.substring(1))
            : undefined;
    }

    goto(go_index) {
        return parseInt(go_index[0] != "$" ? go_index : go_index.substring(1));
    }

    // Math operations

    incriment(index) {
        this._memory_obj.write(this._memory_obj.read(index) + 1, index);
    }

    sumnums(first_index, seconde_index, out_index) {
        this._binaryOperation(
            first_index,
            seconde_index,
            out_index,
            (num1, num2) => num1 + num2
        );
    }

    subnums(first_index, seconde_index, out_index) {
        this._binaryOperation(
            first_index,
            seconde_index,
            out_index,
            (num1, num2) => num1 - num2
        );
    }

    // Logical operations

    isless(first_index, seconde_index, out_index) {
        this._binaryOperation(
            first_index,
            seconde_index,
            out_index,
            (num1, num2) => num1 < num2
        );
    }

    islessequal(first_index, seconde_index, out_index) {
        this._binaryOperation(
            first_index,
            seconde_index,
            out_index,
            (num1, num2) => num1 <= num2
        );
    }

    isequal(first_index, seconde_index, out_index) {
        this._binaryOperation(
            first_index,
            seconde_index,
            out_index,
            (num1, num2) => num1 === num2
        );
    }

    _binaryOperation(first_index, seconde_index, out_index, operation) {
        const num1 = this._memory_obj.read(first_index);
        const num2 = this._memory_obj.read(seconde_index);

        return this._memory_obj.write(operation(num1, num2), out_index);
    }
}

module.exports = ProgrammExecutor;
