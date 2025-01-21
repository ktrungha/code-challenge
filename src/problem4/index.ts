function sum_to_n_a(n: number): number {
    // naive approach

	let retval = 0;
    for(let i = 1; i <= n; i += 1) {
        retval += i;
    }
    return retval;

    // time complexity based on value n (not the 'reasonable' encoding size of value n) is: O(n)
    // space complexity is: O(1)
}

function sum_to_n_b(n: number): number {
	// fancy functional programming way

    return Array(n).reduce((acc, _, i) => acc + i + 1, 0);

    // time complexity: O(n)
    // space complexity: O(n)
}

function sum_to_n_c(n: number): number {
	// basic high scholl math approach
    // 1 + 2 + ... + n = 1/2 * (( 1 + 2 + ... + n ) + ( 1 + 2 + ... + n )) = 
    // 1/2 * (( 1 + 2 + ... + n ) + ( n + ... + 2 + 1 )) = 1/2 * ( n * (n + 1))

    return n*(n+1)/2;
}