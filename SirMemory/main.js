class ProgrammMemory {
    constructor(programm_text) {
        this._memory = [];
        this._programm_len = 0;

        programm_text ? this.loadProgramm(programm_text) : undefined;
    }

    loadProgramm(programm_text) {
        this._memory = [];
        for (let command of programm_text.split("\n")) {
            this._memory.push(command.split(" ")[0]);

            for (let operands of command.split(" ").slice(1))
                this._memory.push(operands);
        }
        this._programm_len = this._memory.length;
    }

    length() {
        return this._memory.length;
    }

    write(data, memory_index) {
        this._memory[this._getActualIndex(memory_index)] = data;
    }

    read(memory_index) {
        return this._memory[this._getActualIndex(memory_index)];
    }

    readChunk(start, finish) {
        return this._memory.slice(
            this._getActualIndex(start),
            this._getActualIndex(finish)
        );
    }

    _getActualIndex(memory_index) {
        return memory_index[0] == "$"
            ? parseInt(memory_index.substring(1))
            : parseInt(memory_index) + this._programm_len;
    }
}

module.exports = ProgrammMemory;
