function map(value, min, max, newMin, newMax) {
    return Math.floor(((value - min) / (max - min)) * (newMax - newMin) + newMin);
}

export { map };