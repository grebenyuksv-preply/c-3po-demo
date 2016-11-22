export function plural(n) {
	return nt(n)`this one returns ${n} bananas`;
}

function plural2() {
	return nt(5)`this one returns ${n} bananas`;	
}