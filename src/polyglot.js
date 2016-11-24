export function t(strings, ...exprs) {
    return strings.reduce((r, s, i) => r + s + (exprs[i] || ''), '')
}

export function nt(n) {
    return function (strings, ...exprs) {
        return strings.reduce((r, s, i) => r + s + (exprs[i] || ''), '');
    }
}
