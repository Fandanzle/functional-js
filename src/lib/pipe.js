const pipe = (...fns) => payload =>
  fns.reduce(
    (accumalator, currentFunction) => currentFunction(accumalator),
    payload
  );

const userValue = {
  name: "Main name",
  title: "Main title",
  projects: [
    {
      title: "title",
      name: "description"
    }
  ]
};

const getProjects = user => user.projects;
const getFirstProjects = projects =>
  Array.isArray(projects) && projects.length > 0 ? projects[0] : [];
const getProjectTitle = project => project.title;

// Left to right evaluation
// You can think of compose as a sequence of tasks, bottom to top
const fetchProjectName = pipe(
  getProjects,
  getFirstProjects,
  getProjectTitle
)(userValue);

// fetchProjectName: title

module.exports = {
    pipe
} 