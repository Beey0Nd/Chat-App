export const mapToArray = (map) => Array.from(map.entries())

export const arrayToMap = (array) => new Map(array.map(item => [item[0], item[1]]))