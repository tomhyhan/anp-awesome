import { db } from '../../database/database.js';

export async function getAll() {
  return db.query(`SELECT * FROM vendor`).then((result) => {
    return result[0];
  });
}

export async function getAllByVendorCode(vendor_code) {
  return db
    .query(
      `
    SELECT * FROM vendor
    WHERE vendor_code=?
    `,
      [vendor_code]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getAllVendorName(vendor_name) {
  return db
    .query(
      `
    SELECT * FROM vendor
    WHERE vendor_name=?
    `,
      [vendor_name]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getById(vendor_id) {
  return db
    .query(
      `
    SELECT * FROM vendor
    WHERE vendor_id=?
    `,
      [vendor_id]
    )
    .then((result) => {
      return result[0];
    });
}

export async function create(vendor) {
  const { vendor_name, vendor_code, contact, address, remarks, created_by } =
    vendor;

  return db
    .query(
      `
  INSERT INTO vendor (vendor_name, vendor_code, contact, address, remarks, created_by, created_date)
  VALUES (?,?,?,?,?,?,?)
  `,
      [
        vendor_name,
        vendor_code,
        contact,
        address,
        remarks,
        created_by,
        new Date(),
      ]
    )
    .then((result) => getById(result[0].insertId));
}

// getting a spare_part object
export async function update(id, vendor) {
  const { vendor_name, vendor_code, contact, address } = vendor;

  return db
    .query(
      `
  Update vendor
  SET 
    vendor_name=?,
    vendor_code=?,
    contact=?,
    address=?
  WHERE
    vendor_id=?
    `,
      [vendor_name, vendor_code, contact, address, id]
    )
    .then(() => getById(id));
}
