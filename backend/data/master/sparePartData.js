import { db } from '../../database/database.js';

export async function getAll() {
  return db.execute(`SELECT * FROM spare_part`).then((result) => {
    return result[0];
  });
}

export async function getAllBySparePartCode(spare_part_code) {
  return db
    .execute(
      `
    SELECT * FROM spare_part
    WHERE spare_part_code=?
    `,
      [spare_part_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllByHsnCode(hsn_code) {
  return db
    .execute(
      `
    SELECT * FROM spare_part
    WHERE hsn_code=?
    `,
      [hsn_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllById(materialMasterId) {
  return db
    .execute(
      `
    SELECT * FROM spare_part
    WHERE material_master_id=?
    `,
      [materialMasterId]
    )
    .then((result) => {
      return result;
    });
}

// receiving as an object
// id => auto
// created_by => from frontend
export async function create(spare_part) {
  const {
    spare_part_code,
    spare_part_desc,
    hsn_code,
    spare_part_group,
    rate,
    uom,
    remarks,
    active_id,
    created_by,
    photo,
  } = spare_part;

  return db
    .execute(
      `
  INSERT INTO spare_part (spare_part_code, spare_part_desc, hsn_code, spare_part_group, rate, uom, remarks, active_id, photo, created_by, created_date)
  VALUES (?,?,?,?,?,?,?,?,?,?,?)
  `,
      [
        spare_part_code,
        spare_part_desc,
        hsn_code,
        spare_part_group,
        rate,
        uom,
        remarks,
        active_id,
        photo,
        created_by,
        new Date(),
      ]
    )
    .then((result) => console.log(result));
}

/**
  const query = `
  INSERT INTO spare_part (spare_part_code, spare_part_desc, hsn_code, rate, uom, remarks, active_id, photo, created_by, created_date)
  VALUES (?, ?)
  `;
 * 
 */
