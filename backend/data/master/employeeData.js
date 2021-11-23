import { db } from '../../database/database.js';
import { getFilterQuery } from '../../utils/employeeFilter.js';

const SELECT_QUERY = `SELECT * FROM employee`;
const SELECT_ALL = 'SELECT emp_id, emp_name FROM employee';

export async function getAllEmployees() {
  return db.query(SELECT_ALL).then((result) => {
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
  return db.query(`SELECT count(*) from employee`).then((result) => {
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
    .query(`SELECT count(*) from employee ${query}`, [...queryArr])
    .then((result) => {
      return result[0][0]['count(*)'];
    });
}

export async function getAllByEmployeeCode(emp_code) {
  return db
    .query(`SELECT * FROM employee WHERE emp_code=?`, [emp_code])
    .then((result) => {
      return result[0];
    });
}

export async function getAllByEmployeeName(emp_name) {
  return db
    .query(`SELECT * FROM employee WHERE emp_name=?`, [emp_name])
    .then((result) => {
      return result[0];
    });
}

export async function getAllByUsernameAndPassword(username) {
  return db
    .query(`SELECT * FROM employee WHERE username=? and password=?`, [username])
    .then((result) => {
      return result[0][0];
    });
}

export async function getAllById(emp_id) {
  return db
    .query(`SELECT * FROM employee WHERE emp_id=?`, [emp_id])
    .then((result) => {
      return result[0];
    });
}

export async function getByEmployeeCode(employeeCode) {
  return db
    .query(`SELECT * FROM employee WHERE emp_code=?`, [employeeCode])
    .then((result) => {
      return result[0][0];
    });
}

export async function getByEmployeeUsername(username) {
  return db
    .query(`SELECT * FROM employee WHERE username=?`, [username])
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
    password,
    username,
  } = employee;

  return db
    .query(
      `
  INSERT INTO employee (emp_name, emp_code, site_master_id, contact, address, designation, department, remarks, created_by, created_date, modified_by, modified_date, password, username)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)
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
        null,
        null,
        password,
        username,
      ]
    )
    .then((result) => {
      return getAllById(result[0].insertId);
    });
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
    modified_by,
  } = employee;
  console.log(employee);
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
    remarks=?,
    modified_by=?,
    last_modified_date=?
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
        modified_by,
        new Date(),
        id,
      ]
    )
    .then(() => getAllById(id));
}
