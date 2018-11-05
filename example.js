import { a, b } from './module'

function I (_) {

}
I((hey) => `hello ${hey}`)
const arr = [ 1, 2 ]
const obj = {
  _id: '1',
  a,
  b,
}
I(arr, obj)
