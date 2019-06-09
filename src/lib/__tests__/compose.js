import { userValue, getFirstProjects, getProjects, getProjectTitle, IProject } from '../common'
import { compose } from '../compose'

describe('.compose', () => {

  it('Compose projects selector', () => {
    const composedFinal = compose(
      getProjects
    )(userValue);
    expect(composedFinal).toEqual(userValue.projects)
  })
  
  it('Compose get first project selector', () => {
    const composedFinal = compose(
      getFirstProjects,
      getProjects
    )(userValue);
    expect(composedFinal).toEqual(userValue.projects[0])
  })
  
  it('Compose get first project name selector', () => {
    const composedFinal = compose(
      getProjectTitle,
      getFirstProjects,
      getProjects
    )(userValue);
    expect(composedFinal).toEqual(userValue.projects[0].title)
  })

})
