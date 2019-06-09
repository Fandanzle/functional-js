import { flipFunction } from '../common'
import { flip } from '../flip'

describe('.flip', () => {

  it('Baseline before flip function is called', () => {
    expect(flipFunction(1,2,3)).toEqual({
      a: 1,
      b: 2,
      c: 3
    })
  })
  
  it('Flip three numbers provided too a function', () => {
    flip(flipFunction)
    expect(flip(flipFunction)(1,2,3)).toEqual({
      a: 3,
      b: 2,
      c: 1
    })
  })

})
