import * as employeesData from '../backend/emloyeesData';

export async function getAllEmployees(req, res, next) {
  const emp_code = req.query.emp_code;
  const emp_name = req.query.emp_name;

  // exculde when hsn_code && spare_part_code exist for now
  let employee;
  if (emp_code) {
    employee = await employeesData.getAllByEmployeeCode(employeeCode);
  } else if (emp_name) {
    employee = await employeesData.getAllByEmployeeName(employeeName);
  } else {
    employee = await employeesData.getAll();
  }
  return res.status(200).json(employee);
}

export async function getById(req, res, next) {
  const { employeeId } = req.params;
  const employee = await employeesData.getAllById(employeeId);

  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: `Employee not Found` });
  }
}

export async function postEmployee(req, res) {
  const { employee } = req.body;
  const employee = await employeesData.create(employee);
  res.status(201).json(employee);
}

export async function updateEmployee(req, res) {
  const { employeeId } = req.params;
  const { employee } = req.body;
  const employee = await employeesData.update(employeeId, employee);
  if (employee) {
    res.status(200).json(employee);
  } else {
    res.status(404).json({ message: `Employee not Found` });
  }
}
