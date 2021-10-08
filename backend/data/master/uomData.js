import { db } from '../../database/database.js';

export async function getAll() {
 

  return db.execute(`SELECT * FROM uom`).then((result) => {
    return result[0];
  });
}

export async function getAllByUnitName(uom) {
  return db
    .execute(
      `
    SELECT * FROM uom
    WHERE uom=?
    `,
      [uom]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getById(uom_id) {
  return db
    .execute(
      `
    SELECT * FROM uom
    WHERE uom_id=?
    `,
      [uom_id]
    )
    .then((result) => {
      return result[0];
    });
}

export async function create(unit_of_measure) {
  const { uom, remarks, created_by } = unit_of_measure;

  return db
    .execute(
      `
  INSERT INTO uom (uom, remarks, created_by, created_date)
  VALUES (?,?,?,?)
  `,
      [uom, remarks, created_by, new Date()]
    )
    .then((result) => getById(result[0].insertId));
}

export async function update(id, unit_of_measure) {
  
  const { uom,remarks } = unit_of_measure;
  console.log(unit_of_measure)
  return db
    .execute(
      `
  Update uom
  SET 
  uom=?,
  remarks=?     
  WHERE
    uom_id=?
    `,
      [uom,remarks,id]
    )
    .then(() => getById(id));
}
