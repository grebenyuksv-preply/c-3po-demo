export function gt(strings, ...exprs) {
    return strings.reduce((r, s, i) => r + s + (exprs[i] || ''), '')
}

export function nt(n) {
    return function (strins, ...exprs) {
        return strings.reduce((r, s, i) => r + s + (exprs[i] || ''), '');
    }
}
