const FloatBase = require("./floatbase");

const BinaryConverter = require("../Binary/binary");
const BinaryFloat = require("../Binary/binaryfloat");

const { arrayFill, arrayPreFill, binaryLog } = require("../Utils/utils");

const { POWER_OFFSET, POWER_LEN, MANTISA_LEN } = require("../Utils/constants");

class NormalFloat extends FloatBase {
    constructor(number) {
        const sign = number > 0 ? 0 : 1;
        const mantisa = Math.abs(number);
        
        const power = Math.min(POWER_OFFSET + 1, Math.floor(binaryLog(mantisa)));
        
        super(sign, NormalFloat._initPower(power), NormalFloat._initMantisa(mantisa, power));
    }

    toDecimal() {
        return super.toDecimal(1)
    }

    static _initMantisa(number, power) {
        const [int, float] = [...BinaryConverter.convertToBin(number)];
        const [, mantisa] = [...(power >= 0
            ? BinaryFloat.expDivide(int, float, power)
            : BinaryFloat.expMultiply(int, float, -power))];
        
        if (mantisa.length <= MANTISA_LEN)
            return arrayFill(MANTISA_LEN, mantisa);
        return BinaryFloat.roundBinNumber(mantisa, MANTISA_LEN);
    }

    static _initPower(power) {
        const actual_power = power + POWER_OFFSET;
        const [int,] = [...BinaryConverter.convertToBin(actual_power)];
        return arrayPreFill(POWER_LEN, int);
    }
}

module.exports = NormalFloat;
