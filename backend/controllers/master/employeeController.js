import * as employeeData from '../../data/master/employeeData.js';


export async function getAllEmployees(req, res, next) {
  let employeeFilter = req.query.employeeFilter;
  const { pageIndex, pageSize } = req.query;
  console.log(req.query);
  if (employeeFilter == null) {
    employeeFilter = '';
  } else {
    employeeFilter = JSON.parse(employeeFilter);
  }

  const filter =
    employeeFilter === '' || isEmpty(employeeFilter) ? '' : employeeFilter;

  const employees = await (filter
    ? employeeData.getAllByFilter(filter, pageIndex, pageSize)
    : employeeData.getAll(pageIndex, pageSize));

  return res.status(200).json(employees);
}

export async function getEmployeeCount(req, res) {
  const count = await employeeData.getCount();
  res.status(200).json(count);
}

export async function getEmployeeFilterCount(req, res) {
  const employeeFilter = JSON.parse(req.query.employeeFilter);
  const count = await employeeData.getFilterCount(employeeFilter);
  res.status(200).json(count);
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
    res.status(200).json(updatedEmployee);
  } else {
    res.status(404).json({ message: `Employee not Found` });
  }
}

function isEmpty(filter) {
  const empty = Object.values(filter).find((value) => value !== null);
  return empty == null ? true : false;
}