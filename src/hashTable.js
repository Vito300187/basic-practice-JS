import { make, set, get } from './hashTable.js';

import crc32 from 'crc-32';


const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

const make = () => [];

const set = (map, key, value) => {
    const hash = getIndex(key);

    if (!map[hash] || (map[hash] && map[hash][0] === key)) {
        map[hash] = [key, value];

        return true;
    }

    return false;
};

const get = (map, key, defaultValue = null) => {
    const hash = getIndex(key);

    return map[hash] && map[hash][0] === key
      ? map[hash][1]
      : defaultValue;
};

export { make, set, get };
