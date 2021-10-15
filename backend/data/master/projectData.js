import { db } from '../../database/database.js';

export async function getAll() {
  return db.query(`SELECT * FROM project`).then((result) => {
    return result[0];
  });
}

export async function getAllByprojectCode(project_code) {
  return db
    .query(
      `
    SELECT * FROM project
    WHERE project_code=?
    `,
      [project_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllById(materialMasterId) {
  return db
    .query(
      `
    SELECT * FROM project
    WHERE project_master_id=?
    `,
      [materialMasterId]
    )
    .then((result) => {
      return result[0];
    });
}

export async function create(project_new) {
  const {
    project_name,
    project_code,
    remarks,
    active_id,
    created_by,
    end_date,
  } = project_new;

  return db
    .query(
      `

      INSERT INTO project (project_name, project_code, remarks, active_id, created_by, end_date,created_date)
      VALUES (?,?,?,?,?,?,?)
  `,
      [
        project_name,
        project_code,
        remarks,
        active_id,
        created_by,
        end_date,
        new Date(),
      ]
    )
    .then((result) => getAllById(result[0].insertId));
}

export async function update(id, project_update) {
  const { project_name, project_code, remarks, active_id, end_date } =
    project_update;

  return db
    .query(
      `
  Update project
  SET 
  project_name=?,     
  project_code=?,     
  remarks=?,             

  active_id=?,
  end_date=?
  WHERE
    project_master_id=?
    `,
      [project_name, project_code, remarks, active_id, end_date, id]
    )
    .then(() => getAllById(id));
}
