import { userValue, getFirstProjects, getProjects, getProjectTitle } from '../common'
import { pipe } from '../pipe'

test('Compose projects selector', () => {
  const composedFinal = pipe(
    getProjects
  )(userValue);
  expect(composedFinal).toEqual(userValue.projects)
})

test('Compose get first project selector', () => {
  const composedFinal = pipe(
    getProjects,
    getFirstProjects
  )(userValue);
  expect(composedFinal).toEqual(userValue.projects[0])
})

test('Compose get first project name selector', () => {
  const composedFinal = pipe(
    getProjects,
    getFirstProjects,
    getProjectTitle
  )(userValue);
  expect(composedFinal).toEqual(userValue.projects[0].title)
})
