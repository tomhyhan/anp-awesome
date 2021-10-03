import * as employeeData from '../../data/master/employeeData.js';

export async function getAllemployees(req, res, next) {
  const empCode = req.query.emp_code;
  const empName = req.query.emp_name;

  // exculde when hsn_code && spare_part_code exist for now
  let employee;
  if (empCode) {
    employee = await employeeData.getAllByEmployeeCode(spare_part_code);
  } else if (empName) {
    employee = await employeeData.getAllByEmployeeName(hsn_code);
  } else {
    employee = await employeeData.getAll();
  }

  return res.status(200).json(employee);
}

export async function getById(req, res) {
  const { id } = req.params;
  const employee = await employeeData.getAllById(id);

  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: `Employee not Found` });
  }
}

export async function postEmployee(req, res) {
  const { employee } = req.body;
  const newEmployee = await employeeData.create(employee);
  res.status(201).json(newEmployee);
}

export async function updateEmployee(req, res) {
  const { id } = req.params;
  const { employee } = req.body;
  const updatedEmployee = await employeeData.update(id, employee);
  if (updatedEmployee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: `Spare Part not Found` });
  }
}