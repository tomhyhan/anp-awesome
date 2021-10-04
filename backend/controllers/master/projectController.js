import * as projectData from '../../data/master/projectData.js';

export async function getAllproject(req, res, next) {
  const project_code = req.query.project_code;

  const project = await (project_code
    ? projectData.getAllByprojectCode(project_code)
    : projectData.getAll());

  return res.status(200).json(project);
}

export async function getById(req, res, next) {
  const { id } = req.params;

  const project = await projectData.getAllById(id);
  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: `Project not Found` });
  }
}

export async function postproject(req, res) {
  const { project_user } = req.body;
  const project = await projectData.create(project_user);

  res.status(201).json(project);
}

export async function updateproject(req, res) {
  const { id } = req.params;
  const { project_user } = req.body;

  const project = await projectData.update(id, project_user);

  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: `Project not Found` });
  }
}
