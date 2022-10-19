import * as hdf5 from 'jsfive';
import fs from "fs";

const filePath = "./big.fast5";
const buffer = fs.readFileSync(filePath, null).buffer;

new hdf5.File(buffer, '');
