import * as sparePartData from '../../data/master/sparePartData.js';

export async function getAllSpareParts(req, res, next) {
  let sparePartFilter = req.query.sparePartFilter;
  const { pageIndex, pageSize } = req.query;

  if (sparePartFilter == null) {
    sparePartFilter = '';
  } else {
    sparePartFilter = JSON.parse(sparePartFilter);
  }

  const filter =
    sparePartFilter === '' || isEmpty(sparePartFilter) ? '' : sparePartFilter;

  const sparePart = await (filter
    ? sparePartData.getAllByFilter(filter, pageIndex, pageSize)
    : sparePartData.getAll(pageIndex, pageSize));

  return res.status(200).json(sparePart);
}

export async function getById(req, res, next) {
  const { id } = req.params;
  const sparePart = await sparePartData.getAllById(id);

  if (sparePart) {
    res.status(200).json(sparePart);
  } else {
    res.status(404).json({ message: `Spare Part not Found` });
  }
}

export async function getSparePartCount(req, res) {
  const count = await sparePartData.getCount();
  res.status(200).json(count);
}

export async function getSparePartFilterCount(req, res) {
  const sparePartFilter = JSON.parse(req.query.sparePartFilter);
  const count = await sparePartData.getFilterCount(sparePartFilter);
  res.status(200).json(count);
}

export async function postSparePart(req, res) {
  const { spare_part } = req.body;
  console.log(spare_part);
  const sparePart = await sparePartData.create(spare_part);
  res.status(201).json(sparePart);
}

export async function updateSparePart(req, res) {
  const { id } = req.params;
  const { spare_part } = req.body;
  const sparePart = await sparePartData.update(id, spare_part);
  if (sparePart) {
    res.status(200).json(sparePart);
  } else {
    res.status(404).json({ message: `Spare Part not Found` });
  }
}

function isEmpty(filter) {
  const empty = Object.values(filter).find((value) => value !== null);
  return empty == null ? true : false;
}
