const fs = require("fs");
const ProgrammMemory = require("./SirMemory/main");
const ProgrammExecutor = require("./SirComands/main");

const memory = new ProgrammMemory(fs.readFileSync(process.argv[2], "utf8"));
const executor = new ProgrammExecutor(memory);

let i = 0;
while (memory.read("$" + i) != "endscript" && i != memory.length()) {
    const command = memory.read("$" + i);
    const opperands_count = executor[command].length;

    const result = executor[command](
        ...memory.readChunk("$" + (i + 1), "$" + (opperands_count + i + 1))
    );
    i = result ? result : i + 1 + opperands_count;  // goto handler
}
