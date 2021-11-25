import { db } from '../../database/database.js';
import 'express-async-errors';

export async function getAll() {
  return db
    .query(
      `
  SELECT * FROM detail
  `
    )
    .then((result) => {
      return result[0];
    });
}

export async function create(detail) {
  const {
    purchase_requisition_number,
    vendor_id,
    payment_terms,
    other_reference,
    transport_mode,
    purchase_order_validity,
    freight_terms,
    insurance,
    remarks,
    approval_level_1,
    approval_level_2,
    created_by,
  } = detail;

  return db
    .query(
      `
  INSERT INTO detail (purchase_requisition_number, vendor_id, payment_terms, other_reference, transport_mode, purchase_order_validity, freight_terms, insurance, remarks, approval_level_1, approval_level_2, created_by, created_date, modified_by, modified_date)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  `,
      [
        purchase_requisition_number,
        vendor_id,
        payment_terms,
        other_reference,
        transport_mode,
        purchase_order_validity,
        freight_terms,
        insurance,
        remarks,
        approval_level_1,
        approval_level_2,
        created_by,
        new Date(),
        null,
        null,
      ]
    )
    .then((result) => result[0].insertId);
}
