import { db } from '../../database/database.js';
import { getFilterQuery } from '../../utils/vendorFilter.js';

const SELECT_QUERY = `SELECT * FROM vendor`;

export async function getAllVendors() {
  return db.query(`SELECT * from vendor`).then((result) => {
    return result[0];
  });
}

export async function getAll(pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  return db
    .query(`${SELECT_QUERY} LIMIT ? OFFSET ?`, [limit, currentPage])
    .then((result) => {
      return result[0];
    });
}

export async function getCount() {
  return db.query(`SELECT count(*) from vendor`).then((result) => {
    return result[0][0]['count(*)'];
  });
}

export async function getAllByFilter(filter, pageIndex, pageSize) {
  const limit = parseInt(pageSize);
  const currentPage = parseInt(pageIndex) * limit;
  const { query, queryArr } = getFilterQuery(filter);
  console.log(filter);

  return db
    .query(
      `
      ${SELECT_QUERY}
      ${query}
      LIMIT ? OFFSET ?
      `,
      [...queryArr, limit, currentPage]
    )
    .then((result) => {
      return result[0];
    });
}

export async function getFilterCount(filter) {
  const { query, queryArr } = getFilterQuery(filter);
  console.log(`      SELECT count(*) from vendor
  ${query}`);
  return db
    .query(`SELECT count(*) from vendor ${query}`, [...queryArr])
    .then((result) => {
      return result[0][0]['count(*)'];
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

export async function getAllById(vendor_id) {
  return db
    .query(`SELECT * FROM vendor WHERE emp_id=?`, [vendor_id])
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

// getting a vendor object
export async function update(id, vendor) {
  const { vendor_name, vendor_code, contact, address, remarks, modified_by } =
    vendor;
  console.log(vendor);
  return db
    .query(
      `
  Update vendor
  SET 
    vendor_name=?,
    vendor_code=?,
    contact=?,
    address=?,
    remarks=?,
    modified_by=?,
    last_modified_date=?
  WHERE
    vendor_id=?
    `,
      [
        vendor_name,
        vendor_code,
        contact,
        address,
        remarks,
        modified_by,
        new Date().toLocaleDateString().replace('/', '-').replace('/', '-'),
        id,
      ]
    )
    .then(() => getById(id));
}
