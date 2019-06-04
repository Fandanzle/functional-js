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

const flipFunction = (a, b ,c) => {
  return {
    a,
    b,
    c
  }
}

module.exports = {
  userValue,
  getProjects,  
  getFirstProjects,
  getProjectTitle,
  flipFunction
}