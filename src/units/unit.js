export default {
  isPrime (num) {
    if (num === '') {
      return 'layout => isPrime(Number)'
    }
    const SQRT = Math.sqrt(num)
    let prime = true
    for (let i = 2; i <= SQRT; i++) {
      if (num % i === 0) prime = false
    }

    return prime
  },
  factorial (num) {
    if (num === '' || num < 0) return 'layout => isPrime(Number && Number >= 0)'
    if (num === 1 || num === 0) return 1
    else return num * this.factorial(num - 1)
  },
  fib (num) {
    if (num === '') return 'layout => fib(Number)'
    const fibN = (curr, next, num) => {
      if (num === 0) {
        return curr
      } else {
        return fibN(next, curr + next, num - 1)
      }
    }

    return fibN(0, 1, num)
  },
  isSorted (arr) {
    let _isSorted = true
    if (!arr) return 'layout => isSorted(Array)'
    else {
      if (!arr.length) return true

      for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        const next = arr[i + 1]

        if (next && item >= next) _isSorted = false
      }
    }

    return _isSorted
  },
  filter (opt) {
    if (!Array.isArray(opt.arr)) return 'layout => filter(Array)'
    if (!opt.arr.length) return []

    const _filterList = []

    for (let i = 0; i < opt.arr.length; i++) {
      if (opt.arr[i] && opt.callback(opt.arr[i])) {
        _filterList.push(opt.arr[i])
      }
    }

    return _filterList
  },
  reduce (opt) {
    if (!Array.isArray(opt.arr)) return 'layout => { arr: Array, callback: Function, accumulator: Array }'
    if (!opt.arr.length) return 0

    for (let i = 0; i < opt.arr.length; i++) {
      opt.accumulator = opt.callback(opt.accumulator, opt.arr[i])
    }

    return opt.accumulator
  },
  reverse (sa) {
    if (!sa) return 'layout => reverse(Array || String)'
    const oldValue = Array.isArray(sa) ? sa : String(sa).split('')
    const newValue = []

    for (let i in oldValue) {
      newValue.unshift(oldValue[i])
    }

    return Array.isArray(sa) ? newValue : newValue.join('')
  },
  indexOf (opt) {
    let index = 0

    if (!Array.isArray(opt.arr)) return 'layout => indexOf({ arr: Array, value: String || Number })'
    if (!opt.value) index - 1

    for (let i in opt.arr) {
      if (opt.arr[i] === opt.value) index = 0
    }

    return index
  },
  isPalindrome (str) {
    if (!str) return 'layout => isPalindrome(String)'
    return this._reverse(str.split('')).join('') === str
  }
}
