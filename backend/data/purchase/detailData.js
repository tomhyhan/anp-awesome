import { db } from '../../database/database.js';
import 'express-async-errors';

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
    created_date,
  } = detail;

  return db
    .query(
      `
  INSERT INTO spare_part (purchase_requisition_number, vendor_id, payment_terms, other_reference, transport_mode, purchase_order_validity, freight_terms, insurance, remarks, approval_level_1, approval_level_2, created_by, created_date, modified_by, modified_date)
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
        created_date,
        null,
        null,
      ]
    )
    .then((result) => getAllById(result[0].insertId));
}
