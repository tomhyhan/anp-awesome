import { db } from '../../database/database.js';
import { getFilterQuery } from '../../utils/employeeFilter.js'

const SELECT_QUERY = `SELECT * FROM employee`

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
      `SELECT count(*) from employee`
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
      `SELECT count(*) from employee ${query}`,
      [...queryArr]
    )
    .then((result) => {
      return result[0][0]['count(*)'];
    });
}

export async function getAllByEmployeeCode(emp_code) {
  return db
    .query(
      `SELECT * FROM employee WHERE emp_code=?`,
      [emp_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllByEmployeeName(emp_name) {
  return db
    .query(
      `SELECT * FROM employee WHERE emp_name=?`,
      [emp_name]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllById(emp_id) {
  return db
    .query(
      `SELECT * FROM employee WHERE emp_id=?`,
      [emp_id]
    )
    .then((result) => {
      return result[0];
    });
}

export async function create(employee) {
  const {
    emp_name,
    emp_code,
    site_master_id,
    contact,
    address,
    designation,
    department,
    remarks,
    created_by,
  } = employee;

  return db
    .query(
    `
  INSERT INTO employee (emp_name, emp_code, site_master_id, contact, address, designation, department, remarks, created_by, created_date)
  VALUES (?,?,?,?,?,?,?,?,?,?)
    `,
      [
        emp_name,
        emp_code,
        site_master_id,
        contact,
        address,
        designation,
        department,
        remarks,
        created_by,
        new Date(),
      ]
    )
    .then((result) => getAllById(result[0].insertId));
}

export async function update(id, employee) {
  const {
    emp_name,
    emp_code,
    site_master_id,
    contact,
    address,
    designation,
    department,
    remarks,
  } = employee;

  return db
    .query(
      `
  Update employee
  SET 
    emp_name=?,
    emp_code=?,
    site_master_id=?,
    contact=?,
    address=?,
    designation=?,
    department=?,
    remarks=?
  WHERE
    emp_id=?
    `,
      [
        emp_name,
        emp_code,
        site_master_id,
        contact,
        address,
        designation,
        department,
        remarks,
        id,
      ]
    )
    .then(() => getAllById(id));
}
