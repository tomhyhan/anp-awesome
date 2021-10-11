import * as sparePartData from '../../data/master/sparePartData.js';

export async function getAllSpareParts(req, res, next) {
  const spare_part_filter = req.query.spare_part_filter;

  const sparePart = await (spare_part_filter
    ? sparePartData.getAllByFilter(spare_part_filter)
    : sparePartData.getAll());

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

export async function postSparePart(req, res) {
  const { spare_part } = req.body;
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
