import { db } from '../../database/database.js';
import { getFilterQuery } from '../../utils/projectFilter.js';
// export async function getAll() {
//   return db.execute(`SELECT * FROM project`).then((result) => {
//     return result[0];
//   });
// }
export async function getAll(pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  // console.log(pageSize)
  const currentPage = parseInt(pageIndex) * limit;
  return db
    .query(`SELECT * FROM project LIMIT ? OFFSET ?`, [limit, currentPage])
    .then((result) => {
      return result[0];
    });
}

export async function getAllByFilter(filter, pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  const { query, queryArr } = getFilterQuery(filter);
  
  return db
    .query(
      `
    SELECT * FROM project
     ${query}
      `,
      [
        ...queryArr, limit, currentPage
      ]
    )
    .then((result) => {
      return result[0];
    });
}


// export async function getAllByprojectCode(project_code) {
//   return db
//     .execute(
//       `
//     SELECT * FROM project
//     WHERE project_code=?
//     `,
//       [project_code]
//     )
//     .then((result) => {
//       return result[0];
//     });
// }

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


export async function getCount() {
  return db
    .query(
      `
      SELECT count(*) from project
    `
    )
    .then((result) => {
      return result[0][0]['count(*)'];
    });
}

export async function getFilterCount(filter) {
  const { query, queryArr } = getFilterQuery(filter);
  console.log(`      SELECT count(*) from project
  ${query}`);
  return db
    .query(
      `
      SELECT count(*) from project
      ${query}
      `,
      [...queryArr]
    )
    .then((result) => {
      return result[0][0]['count(*)'];
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
    .execute(
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
        new Date().toLocaleDateString().replace('/','-').replace('/','-'),
      ]
    )
    .then((result) => getAllById(result[0].insertId));
}

export async function update(id, project_update) {
  const { project_name, project_code, remarks, active_id, end_date } =
    project_update;

  return db
    .execute(
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
