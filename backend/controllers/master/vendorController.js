import * as vendorData from '../../data/master/vendorData.js';



export async function getAllVendors(req, res, next) {
  let vendorFilter = req.query.vendorFilter;
  const { pageIndex, pageSize } = req.query;
  console.log(req.query);
  if (vendorFilter == null) {
    vendorFilter = '';
  } else {
    vendorFilter = JSON.parse(vendorFilter);
  }

  const filter =
    vendorFilter === '' || isEmpty(vendorFilter) ? '' : vendorFilter;

  const vendors = await (filter
    ? vendorData.getAllByFilter(filter, pageIndex, pageSize)
    : vendorData.getAll(pageIndex, pageSize));

  return res.status(200).json(vendors);
}

export async function getVendorCount(req, res) {
  const count = await vendorData.getCount();
  res.status(200).json(count);
}

export async function getVendorFilterCount(req, res) {
  const vendorFilter = JSON.parse(req.query.vendorFilter);
  const count = await vendorData.getFilterCount(vendorFilter);
  res.status(200).json(count);
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
  const newVendor = await vendorData.create(vendor);
  res.status(201).json(newVendor);
}

export async function updateVendor(req, res) {
  const { id } = req.params;
  const { vendor } = req.body;
  const udpatedVendor = await vendorData.update(id, vendor);
  if (udpatedVendor) {
    res.status(200).json(udpatedVendor);
  } else {
    res.status(404).json({ message: `Vendor not Found` });
  }
}

function isEmpty(filter) {
  const empty = Object.values(filter).find((value) => value !== null);
  return empty == null ? true : false;
}