import { db } from '../../database/database.js';
import { getFilterQuery } from '../../utils/aircraftFilter.js'

const SELECT_QUERY = `SELECT * FROM aircraft`

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
      `SELECT count(*) from aircraft`
    )
    .then((result) => {
      return result[0][0]['count(*)'];
    });
}

export async function getAllByFilter(filter, pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  const { query, queryArr } = getFilterQuery(filter);
  console.log(filter);


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
      `SELECT count(*) from aircraft ${query}`,
      [...queryArr]
    )
    .then((result) => {
      return result[0][0]['count(*)'];
    });
}


export async function getAllByaircraftName(aircraft_name) {
  return db
    .query(
      `SELECT * FROM aircraft WHERE aircraft_name=?`,
      [aircraft_name]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getById(aircraftid) {
  return db
    .query(
      `
    SELECT * FROM aircraft
    WHERE material_aircraft_id=?
    `,
      [aircraftid]
    )
    .then((result) => {
      return result[0];
    });
}

export async function create(aircraft) {
  const { aircraft_name, remarks, created_by } = aircraft;

  return db
    .query(
      `
  INSERT INTO aircraft (aircraft_name, remarks, created_by, created_date)
  VALUES (?,?,?,?)
  `,
      [aircraft_name, remarks, created_by, new Date()]
    )
    .then((result) => getById(result[0].insertId));
}

// getting a aircraft object
export async function update(id, aircraft) {
  const { aircraft_name, remarks } = aircraft;

  return db
    .query(
      `
  Update aircraft
  SET 
    aircraft_name=?,
    remarks=?
  WHERE
    material_aircraft_id=?
    `,
      [aircraft_name, remarks, id]
    )
    .then(() => getById(id));
}
