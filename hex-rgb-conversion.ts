import { string, number } from "prop-types";

interface decMapperTypes {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
    15: string;
    [key: string]: string;
}

interface hexMapperTypes {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    [key: string]: number;
}

interface colorCodeObject {
    r: number,
    g: number,
    b: number,
}

const DEC_TOHEX_MAP: decMapperTypes = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
}

const HEX_TODEC_MAP: hexMapperTypes = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
}

const divisor: number = 16

const getDec = (first: string, second: string): number => {
    return ((HEX_TODEC_MAP[first] * divisor) + HEX_TODEC_MAP[second])
}

const getHex = (code: number) => {
    const dividedByHex: number = Math.floor(code / divisor)
    const remainderHex: number = code % divisor
    const firstHex: string = DEC_TOHEX_MAP[dividedByHex];
    const secondHex: string =  DEC_TOHEX_MAP[remainderHex];
        return `${firstHex}${secondHex}`
}

//TODO: Implement hexToRgb
export const hexToRgb = (hex: string): colorCodeObject => {
    if (hex.length === 3) {
        return { r: getDec(hex[0], hex[0]), g: getDec(hex[1], hex[1]), b: getDec(hex[2], hex[2])}
    } else {
        return { r: getDec(hex[0], hex[1]), g: getDec(hex[2], hex[3]), b: getDec(hex[4], hex[5])}
    }
}

//TODO: Implement rgbToHex

export const rgbToHex = (r: number, g: number, b: number): string => {
    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;
    
    if (r < 0) r = 0;
    if (g < 0) g = 0;
    if (b < 0) b = 0;
    
        return `${getHex(Math.abs(r))}${getHex(Math.abs(g))}${getHex(Math.abs(b))}`.toLowerCase();
}