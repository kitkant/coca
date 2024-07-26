type AnyFunction = (...args: any[]) => any

function debounce<T>(
	func: AnyFunction,
	timeout = 300
): (this: T, ...args: any[]) => void {
	let timer: ReturnType<typeof setTimeout>

	return function (this: T, ...args: any[]) {
		clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, args)
		}, timeout)
	}
}

export default debounce
