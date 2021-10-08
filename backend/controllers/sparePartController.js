import * as sparePartData from '../data/master/sparePartData.js';

export async function getAllSpareParts(req, res, next) {
  const spare_part_code = req.query.spare_part_code;
  const hsn_code = req.query.hsn_code;

  // exculde when hsn_code && spare_part_code exist for now
  let sparePart;
  if (spare_part_code) {
    sparePart = await sparePartData.getAllBySparePartCode(spare_part_code);
  } else if (hsn_code) {
    sparePart = await sparePartData.getAllByHsnCode(hsn_code);
  } else {
    sparePart = await sparePartData.getAll();
  }

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
  console.log(req.body)
  const sparePart = await sparePartData.create(spare_part);

  
  res.status(201).json(sparePart);
}

export async function updateSparePart(req, res) {
  const { id } = req.params;
  const { spare_part } = req.body;

  console.log(spare_part);
  const sparePart = await sparePartData.update(id, spare_part);
  
  if (sparePart) {
    res.status(200).json(sparePart);
  } else {
    res.status(404).json({ message: `Spare Part not Found` });
  }
}
