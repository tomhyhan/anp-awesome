import 'express-async-errors';
import { db } from '../../database/database.js';


export async function create(files) {
    const {
        ewaybill,
        invoice,
        other,
        detail_id,
        created_by
    } = files;
  
    return db
      .query(
        `
    INSERT INTO fileattach (
        ewaybill,
        invoice,
        other,
        detail_id,
        created_by,
        created_date
    )
    VALUES (?,?,?,?,?,?)
    `,
        [
        ewaybill.join(","),
        invoice.join(","),
        other.join(","),
        detail_id,
        created_by,
        new Date(),
 
        ]
      )
      .then((result) => result[0].insertId);
  }