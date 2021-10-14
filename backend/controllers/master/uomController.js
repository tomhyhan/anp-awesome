import * as uomData from '../../data/master/uomData.js';

export async function getAllUom(req, res, next) {
  let unit_of_measure = req.query.unit_of_measure;
  const { pageIndex, pageSize } = req.query;

  if (unit_of_measure == null){
    unit_of_measure = '';
  }else{
    unit_of_measure = JSON.parse(unit_of_measure);
  }

  const filter = 
    unit_of_measure ==='' || isEmpty(unit_of_measure) ? '' : unit_of_measure;

  const uom = await (filter
    ? uomData.getAllByUnitName(filter, pageIndex, pageSize)
    : uomData.getAll(pageIndex, pageSize));

  return res.status(200).json(uom);
}

function isEmpty(filter) {
  const empty = Object.values(filter).find((value) => value !== null);
  return empty == null ? true : false;
}

export async function getById(req, res, next) {
  const { id } = req.params;
  const uom = await uomData.getById(id);

  if (uom) {
    res.status(200).json(uom);
  } else {
    res.status(404).json({ message: `Unit not Found` });
  }
}

export async function postUom(req, res) {
  const { unit_of_measure } = req.body;
  const uom = await uomData.create(unit_of_measure);
  res.status(201).json(uom);
}

export async function updateUom(req, res) {
  const { id } = req.params;
  const { unit_of_measure } = req.body;
  const uom = await uomData.update(id, unit_of_measure);
  if (uom) {
    res.status(200).json(uom);
  } else {
    res.status(404).json({ message: `Unit not Found` });
  }
}

export async function getUomCount(req, res) {
  const count = await employeeData.getCount();
  res.status(200).json(count);
}

export async function getUomFilterCount(req, res) {
  const unit_of_measure= JSON.parse(req.query.unit_of_measure);
  const count = await uomData.getFilterCount(unit_of_measure);
  res.status(200).json(count);
}












