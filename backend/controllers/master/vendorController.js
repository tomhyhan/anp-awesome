import * as vendorData from '../../data/master/vendorData.js';

export async function getAllvendors(req, res, next) {
  const vendorCode = req.query.vendor_code;
  const vendorName = req.query.vendor_name;

  let vendor;
  if (vendorCode) {
    vendor = await vendorData.getAllByVendorCode(vendorCode);
  } else if (vendorName) {
    vendor = await vendorData.getAllByHsnCode(vendorName);
  } else {
    vendor = await vendorData.getAll();
  }

  return res.status(200).json(vendor);
}

export async function getById(req, res) {
  const { id } = req.params;
  const vendor = await vendorData.getById(id);

  if (vendor) {
    res.status(200).json(vendor);
  } else {
    res.status(404).json({ message: `Vendor not Found` });
  }
}

export async function postVendor(req, res) {
  const { vendor } = req.body;
  const newVendor = await sparePartData.create(vendor);
  res.status(201).json(newVendor);
}

export async function updateVendor(req, res) {
  const { id } = req.params;
  const { vendor } = req.body;
  const udpatedVendor = await sparePartData.update(id, vendor);
  if (udpatedVendor) {
    res.status(200).json(udpatedVendor);
  } else {
    res.status(404).json({ message: `Vendor not Found` });
  }
}
