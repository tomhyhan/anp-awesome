import * as uomData from '../../data/master/uomData.js';

export async function getAllUom(req, res) {
  const unitOfMeasure = req.query.unit_of_measure;

  const uom = await (unitOfMeasure
    ? uomData.getAllByUnitName(unitOfMeasure)
    : uomData.getAll());

  return res.status(200).json(uom);
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
  const uom = await sparePartData.update(id, unit_of_measure);
  if (uom) {
    res.status(200).json(uom);
  } else {
    res.status(404).json({ message: `Unit not Found` });
  }
}
