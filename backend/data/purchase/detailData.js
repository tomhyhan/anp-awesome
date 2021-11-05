import { db } from '../../database/database.js';
import 'express-async-errors';

const SELECT_JOIN = `
SELECT sp.material_master_id, sp.spare_part_code, sp.spare_part_desc, sp.hsn_code ,sp.spare_part_group ,sp.rate ,uom.uom, sp.remarks, sp.photo, sp.created_by, sp.active_id, sp.created_date 
FROM spare_part as sp 
JOIN uom 
On sp.frn_uom = uom.uom_id
`;

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
