import { db } from '../../database/database.js';

export async function getAll() {
  return db.execute(`SELECT * FROM employee`).then((result) => {
    return result[0];
  });
}

export async function getAllByEmployeeCode(emp_code) {
  return db
    .execute(
      `
    SELECT * FROM employee
    WHERE emp_code=?
    `,
      [emp_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllByEmployeeName(emp_name) {
  return db
    .execute(
      `
    SELECT * FROM employee
    WHERE emp_name=?
    `,
      [emp_name]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllById(emp_id) {
  return db
    .execute(
      `
    SELECT * FROM employee
    WHERE emp_id=?
    `,
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
