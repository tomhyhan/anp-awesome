import { db } from '../../database/database.js';

const SELECT_QUERY = `SELECT * FROM employee`
const FILTER_QUERY = `WHERE
                      emp_name = ?
                      or
                      emp_code = ?
                      or 
                      site_master_id = ?
                      or
                      contact = ?
                      or 
                      address = ?
                      or 
                      designation = ?
                      or
                      department = ?
                      or 
                      created_by = ?
                      or 
                      created_date = ?`

export async function getAll(pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  return db
    .execute(`${SELECT_QUERY} LIMIT ? OFFSET ?`, [limit, currentPage])
    .then((result) => {
      return result[0];
    });
}

export async function getAllByFilter(filter, pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  const { emp_name, emp_code, site_master_id, contact, address,
         designation, department, created_by, created_date} = filter

  return db
    .execute(
      `
      SELECT * FROM employee
      ${FILTER_QUERY}
      LIMIT ? OFFSET ?
      `,
      [emp_name, emp_code, site_master_id, contact, address, designation,
       department, created_by, created_date, limit, currentPage]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getCount() {
  return db
    .execute(
      `SELECT count(*) from employee`
    )
    .then((result) => {
      return result[0][0]['count(*)'];
    });
}

export async function getFilterCount(filter) {
    const { emp_name, emp_code, site_master_id, contact, address,
           designation, department, created_by, created_date} = filter
  
    return db
      .execute(
        `
        SELECT COUNT(*) FROM employee
        ${FILTER_QUERY}
        `,
        [emp_name, emp_code, site_master_id, contact, address, designation,
         department, created_by, created_date]
      )
      .then((result) => {
        return result[0][0]['count(*)'];
      });
  }

export async function getAllByEmployeeCode(emp_code) {
  return db
    .execute(
      `SELECT * FROM employee WHERE emp_code=?`,
      [emp_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllByEmployeeName(emp_name) {
  return db
    .execute(
      `SELECT * FROM employee WHERE emp_name=?`,
      [emp_name]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllById(emp_id) {
  return db
    .execute(
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
    .execute(
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
    .execute(
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
