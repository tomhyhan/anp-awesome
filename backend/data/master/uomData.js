import { db } from '../../database/database.js';
import { getFilterQuery } from '../../utils/uomFilter.js'

const SELECT_QUERY = `SELECT * FROM uom`

//old version
export async function getAll2() {
  return db.execute(`SELECT * FROM uom`).then((result) => {
    return result[0];
  });
}

export async function getAll(pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  return db
    .query(`${SELECT_QUERY} LIMIT ? OFFSET ?`, [limit, currentPage])
    .then((result) => {
      return result[0];
    });
}

export async function getCount() {
  return db
    .query(
      `
      SELECT count(*) FROM uom
    `
    )
    .then((result) => {
      return result[0][0]['count(*)'];
    });
}


export async function getAllByFilter(filter, pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  const { query, queryArr } = getFilterQuery(filter);

  return db
    .query(
      `
      ${SELECT_QUERY}
      ${query}
      LIMIT ? OFFSET ?
      `,
      [...queryArr, limit, currentPage]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getFilterCount(filter) {
  const { query, queryArr } = getFilterQuery(filter);

  return db
    .query(
      `SELECT count(*) from uom ${query}`,
      [...queryArr]
    )
    .then((result) => {
      return result[0][0]['count(*)'];
    });
}

export async function getAllByUnitName(uom) {
  return db
    .query(
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
    .query(
      `
    ${SELECT_QUERY}
    WHERE uom_id=?
    `,
      [uom_id]
    )
    .then((result) => {
      return result[0];
    });
}

export async function create(unit_of_measure) {
  const { uom, remarks, created_by, } = unit_of_measure;
  console.log(unit_of_measure)

  return db
    .query(
      `
  INSERT INTO uom (uom, remarks, created_by, created_date, modified_by, modified_date)
  VALUES (?,?,?,?,?,?)
  `,
      [uom, remarks, created_by, new Date(), null, null,]
    )
    .then((result) => getById(result[0].insertId));
}

export async function update(uom_id, unit_of_measure) {
  
  const { uom, remarks, modified_by } = unit_of_measure;
  console.log(unit_of_measure)
  return db
    .query(
      `
  Update uom
  SET 
  uom=?,
  remarks=?
  modified_by=?,
  modified_date=?     
  WHERE
    uom_id=?
    `,
      [uom, remarks, modified_by, new Date(), uom_id]
    )
    .then(() => getById(uom_id));
}
