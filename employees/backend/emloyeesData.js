import { db } from '../../database/database.js';

export async function getAllEmployees() {
  return db.execute(`SELECT * FROM employees`).then((result) => {
    return result[0];
  });
}

export async function getAllByEmployeeCode(employeeCode) {
  return db
    .execute(
    `
    SELECT * FROM employees
    WHERE emp_code=?
    LIMIT 40
    `,
      [employeeCode]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllByEmployeeName(employeeName) {
  return db
    .execute(
    `
    SELECT * FROM employees
    WHERE emp_name=?
    LIMIT 40
    `,
      [employeeName]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllById(employeeId) {
  return db
    .execute(
    `
    SELECT * FROM employees
    WHERE emp_id=?
    LIMIT 40
    `,
      [employeeId]
    )
    .then((result) => {
      return result[0];
    });
}

// receiving as an object
// id => auto
// created_by => from frontend
export async function create(employee) {
  const {
    emp_name,
    emp_code,
    site_master_id,
    contact,
    address,
    destination,
    department,
    remarks,
    created_by,
  } = employee;

  return db
    .execute(
    `
    INSERT INTO employees (emp_name, emp_code, site_master_id, 
    contact, address, destination, department, remarks, created_by, 
    created_date) VALUES (?,?,?,?,?,?,?,?,?,?)
    `,
      [
        emp_name,
        emp_code,
        site_master_id,
        contact,
        address,
        destination,
        department,
        remarks,
        created_by,
        new Date(),
      ]
    )
    .then((result) => getAllById(result[0].insertId));
}

// getting a spare_part object
export async function update(employeeId, employee) {
  const {
    emp_name,
    emp_code,
    site_master_id,
    contact,
    address,
    destination,
    department,
    remarks,
  } = employee;

  return db
    .execute(
    `
    Update spare_part
    SET 
      emp_name=?,
      emp_code=?,
      site_master_id=?,
      contact=?,
      address=?,
      destination=?,
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
        destination,
        department,
        remarks,
        employeeId,
      ]
    )
    .then(() => getAllById(id));
}
