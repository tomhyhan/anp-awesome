import 'express-async-errors';
import * as sparePartData from '../../data/master/sparePartData.js';

export class sparePartControllers {
  constructor(database) {
    this.database = database;
  }

  getAllSpareParts = async (req, res, next) => {
    let sparePartFilter = req.query.sparePartFilter || '';
    const { pageIndex, pageSize } = req.query;
    const filter =
      sparePartFilter === '' || isEmpty(sparePartFilter)
        ? ''
        : JSON.parse(sparePartFilter);

    const sparePart = await (filter
      ? this.database.getAllByFilter(filter, pageIndex, pageSize)
      : this.database.getAll(pageIndex, pageSize));

    res.status(200).json(sparePart);
  };
}

export async function getSpareParts(req, res) {
  const spareParts = await this.sparePartData.getSpareParts();
  res.status(200).json(spareParts);
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
