import { db } from '../../database/database.js';
import 'express-async-errors';

const SELECT_JOIN = `
SELECT mt.SINo, mt.detail_ref, spare_part.spare_part_code, spare_part.spare_part_desc, mt.delivery_date, mt.quantity, uom.uom, mt.rate, mt.created_by, mt.created_date, mt.modified_by, mt.modified_date 
FROM material_tax as mt
JOIN spare_part
ON mt.sp_no = spare_part.material_master_id
JOIN uom
ON spare_part.frn_uom = uom.uom_id
`;

export async function create(material) {
    const {
      details_ref,
      spare_part_code,
      spare_part_desc,
      delivery_date,
      quantity,
      frn_uom,
      rate,
      created_by,
      created_date,
    } = material;
  
    return db
      .query(
        `
    INSERT INTO material_tax (details_ref, spare_part_code, spare_part_desc, delivery_date, quantity, frn_uom, rate, created_by, created_date, modified_by, modified_date)
    VALUES (?,?,?,?,?,?,?,?)
    `,
        [
            details_ref, 
            spare_part_code,
            spare_part_desc,
            delivery_date,
            quantity,
            frn_uom,
            rate,
            created_by,
            created_date,
            null,
            null,
        ]
      )
      .then((result) => getAllById(result[0].insertId));
  }

  export async function getAllById(SINo) {
    return db
      .query(
        `
      ${SELECT_JOIN}
      WHERE SINo=?
      `,
        [SINo]
      )
      .then((result) => {
        return result[0];
      });
  }
