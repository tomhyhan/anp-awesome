import * as uomData from '../../data/master/uomData.js';

export async function getAllUom(req, res, next) {
  let uomPartFilter = req.query.uomPartFilter;
  const { pageIndex, pageSize } = req.query;

  if (uomPartFilter == null) {
    uomPartFilter = '';
  } else {
    uomPartFilter = JSON.parse(uomPartFilter);
  }

  const filter =
    uomPartFilter === '' || isEmpty(uomPartFilter) ? '' : uomPartFilter;

  const uomPart = await (filter
    ? uomData.getAllByFilter(filter, pageIndex, pageSize)
    : uomData.getAll(pageIndex, pageSize));

  return res.status(200).json(uomPart);
}

//old version
export async function getUomPart(req, res) {
  const uom = await uomData.getAll2();

  return res.status(200).json(uom);
}

export async function getById(req, res, next) {
  const { id } = req.params;
  const uomPart = await uomData.getAllById(id);

  if (uomPart) {
    res.status(200).json(uomPart);
  } else {
    res.status(404).json({ message: `Uom Part not Found` });
  }
}

export async function getUomPartCount(req, res) {
  const count = await uomData.getCount();
  res.status(200).json(count);
}

export async function getUomPartFilterCount(req, res) {
  const uomPartFilter = JSON.parse(req.query.uomPartFilter);
  const count = await uomData.getFilterCount(uomPartFilter);
  res.status(200).json(count);
}

export async function postUom(req, res) {
  const { unit_of_measure } = req.body;
  const newuom = await uomData.create(unit_of_measure);
  res.status(201).json(newuom);
}

export async function updateUom(req, res) {
  const { id } = req.params;
  const { unit_of_measure } = req.body;
  const uoms = await uomData.update(id, unit_of_measure);
  if (uoms) {
    res.status(200).json(uoms);
  } else {
    res.status(404).json({ message: `Unit not Found` });
  }
}

function isEmpty(filter) {
  const empty = Object.values(filter).find((value) => value !== null);
  return empty == null ? true : false;
}
