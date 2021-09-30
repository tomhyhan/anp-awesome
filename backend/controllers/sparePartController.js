import * as sparePartData from '../data/master/sparePartData.js';

export async function getAllSpareParts(req, res, next) {
  const spare_part_code = req.query.spare_part_code;
  const hsn_code = req.query.hsn_code;

  // exculde when hsn_code && spare_part_code exist for now
  let sparePartdata;
  if (spare_part_code) {
    sparePartdata = await sparePartData.getAllBySparePartCode(spare_part_code);
  } else if (hsn_code) {
    sparePartdata = await sparePartData.getAllByHsnCode(hsn_code);
  } else {
    sparePartdata = await sparePartData.getAll();
  }

  return res.status(200).send(sparePartdata);
}

export async function getById(req, res, next) {}

export async function postSparePart(req, res) {
  const { spare_part } = req.body;
  await sparePartData.create(spare_part);
  res.sendStatus(200);
}

export async function updateSparePart(req, res, next) {}
