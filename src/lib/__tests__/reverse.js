import { reverse } from '../reverse'
import { pipe } from '../pipe'

describe('.reverse', () => { 

  it('Reverse a singular array', () => {
    const arrayPayload = [0,1,2,3,4,5,6,7,8,9]
    expect(reverse(arrayPayload)).toEqual([9,8,7,6,5,4,3,2,1,0])
  })

  it('Reverse a numerical array via composition', () => {
    const arrayPayload = [0,1,2,3,4,5,6,7,8,9]
    const reversedPaylod = pipe(
      reverse
    )(arrayPayload)
    expect(reversedPaylod).toEqual([9,8,7,6,5,4,3,2,1,0])
  })

  it('Reverse a numerical array via composition, two way', () => {
    const arrayPayload = [0,1,2,3,4,5,6,7,8,9]
    const reversedPaylod = pipe(
      reverse,
      reverse
    )(arrayPayload)
    expect(reversedPaylod).toEqual(arrayPayload)
  })

  it('Reverse a string array via composition', () => {
    const arrayPayload = ['a', 'b', 'c', 'd']
    const reversedPaylod = pipe(
      reverse
    )(arrayPayload)
    expect(reversedPaylod).toEqual(['d', 'c', 'b', 'a'])
  })

  it('Reverse a string array via composition', () => {
    const arrayPayload = ['a', 'b', 'c', 'd']
    const reversedPaylod = pipe(
      reverse
    )(arrayPayload)
    expect(reversedPaylod).toEqual(arrayPayload)
  })

})