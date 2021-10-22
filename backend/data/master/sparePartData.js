import { db } from '../../database/database.js';
import { getFilterQuery } from '../../utils/sparePartFilter.js';
import 'express-async-errors';

const SELECT_JOIN = `
SELECT sp.material_master_id, sp.spare_part_code, sp.spare_part_desc, sp.hsn_code ,sp.spare_part_group ,sp.rate ,uom.uom, sp.remarks, sp.photo, sp.created_by, sp.active_id, sp.created_date 
FROM spare_part as sp 
JOIN uom 
On sp.frn_uom = uom.uom_id
`;

export async function getAll(pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  return db
    .execute(`${SELECT_JOIN} LIMIT ? OFFSET ?`, [limit, currentPage])
    .then((result) => {
      return result[0];
    });
}

export async function getAllByFilter(filter, pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  const { query, queryArr } = getFilterQuery(filter);
  console.log(query, queryArr);
  return db
    .query(
      `
      ${SELECT_JOIN}
      ${query}
      LIMIT ? OFFSET ?
      `,
      [...queryArr, limit, currentPage]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllById(materialMasterId) {
  return db
    .query(
      `
    ${SELECT_JOIN}
    WHERE material_master_id=?
    `,
      [materialMasterId]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getCount() {
  return db
    .execute(
      `
      SELECT count(*) from spare_part
    `
    )
    .then((result) => {
      return result[0][0]['count(*)'];
    });
}

export async function getFilterCount(filter) {
  const { query, queryArr } = getFilterQuery(filter);

  return db
    .execute(
      `
      SELECT count(*) from spare_part
      ${query}
      `,
      [...queryArr]
    )
    .then((result) => {
      return result[0][0]['count(*)'];
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
    frn_uom,
    remarks,
    active_id,
    created_by,
    photo,
  } = spare_part;

  return db
    .query(
      `
  INSERT INTO spare_part (spare_part_code, spare_part_desc, hsn_code, spare_part_group, rate, frn_uom, remarks, active_id, photo, created_by, created_date)
  VALUES (?,?,?,?,?,?,?,?,?,?,?)
  `,
      [
        spare_part_code,
        spare_part_desc,
        hsn_code,
        spare_part_group,
        rate,
        frn_uom,
        remarks,
        active_id,
        photo,
        created_by,
        new Date(),
      ]
    )
    .then((result) => getAllById(result[0].insertId));
}

// getting a spare_part object
// *** need to add uom ***
export async function update(id, spare_part) {
  const {
    spare_part_code,
    spare_part_desc,
    hsn_code,
    spare_part_group,
    rate,
    remarks,
    frn_uom,
    active_id,
    photo,
  } = spare_part;

  return db
    .query(
      `
  Update spare_part
  SET 
    spare_part_code=?,
    spare_part_desc=?,
    hsn_code=?,
    spare_part_group=?,
    rate=?,
    remarks=?,
    frn_uom=?,
    active_id=?,
    photo=?
  WHERE
    material_master_id=?
    `,
      [
        spare_part_code,
        spare_part_desc,
        hsn_code,
        spare_part_group,
        rate,
        remarks,
        frn_uom,
        active_id,
        photo,
        id,
      ]
    )
    .then(() => getAllById(id));
}
