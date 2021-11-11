import 'express-async-errors';


export async function create(files) {
    const {
        ewaybill,
        invoice,
        other,
        detail_id,
    } = files;
  
    return db
      .query(
        `
    INSERT INTO fileattach (
        ewaybill,
        invoice,
        other,
        detail_id
    )
    VALUES (?,?,?,?)
    `,
        [
        ewaybill,
        invoice,
        other,
        detail_id,
 
        ]
      )
      .then((result) => getAllById(result[0].insertId));
  }