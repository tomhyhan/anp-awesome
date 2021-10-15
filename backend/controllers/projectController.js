import * as projectData from '../data/master/projectData.js';


// export async function getAllproject(req, res, next) {
//   const project_code = req.query.project_code;

//   let project;
//   if (project_code) {
//     project = await projectData.getAllByproject_code(project_code);
//   } else {
//     project = await projectData.getAll();
//   }

//   return res.status(200).json(project);
// }

export async function getAllvendor(req, res, next) {
  const vendorFilter = JSON.parse(req.query.vendorFilter);
  const filter =
  vendorFilter === '' || isEmpty(vendorFilter) ? '' : vendorFilter;

  const vendor = await (filter
    ? vendorData.getAllByFilter(filter)
    : vendorData.getAll());

  return res.status(200).json(vendor);
}

export async function getById(req, res, next) {
  const { id } = req.params;

  const project = await projectData.getAllById(id);
  if (project) {
    console.log(project)
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: `project not Found` });
  }
}


export async function postproject(req, res) {
  const { project_user } = req.body;
  console.log(req.body)
  const project = await projectData.create( project_user);

  
  res.status(201).json(project);
}

export async function updateproject(req, res) {
  const { id } = req.params;
  const { project_user } = req.body;

  console.log(id)
  console.log("id")

  const project = await projectData.update(id, project_user);
  
  if (project) {
    console.log(project)
    res.status(200).json(project);
  } else {
    console.log(id)
    res.status(404).json({ message: `project not Found` });
  }
}
