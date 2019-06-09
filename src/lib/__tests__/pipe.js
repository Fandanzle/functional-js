import { userValue, getFirstProjects, getProjects, getProjectTitle } from '../common'
import { pipe } from '../pipe'

describe('.pipe', () => {

  it('Compose projects selector', () => {
    const composedFinal = pipe(
      getProjects
    )(userValue);
    expect(composedFinal).toEqual(userValue.projects)
  })
  
  it('Compose get first project selector', () => {
    const composedFinal = pipe(
      getProjects,
      getFirstProjects
    )(userValue);
    expect(composedFinal).toEqual(userValue.projects[0])
  })
  
  it('Compose get first project name selector', () => {
    const composedFinal = pipe(
      getProjects,
      getFirstProjects,
      getProjectTitle
    )(userValue);
    expect(composedFinal).toEqual(userValue.projects[0].title)
  })
  
})
