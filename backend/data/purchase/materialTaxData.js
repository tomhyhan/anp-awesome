import { db } from '../../database/database.js';
import 'express-async-errors';

// export async function getAll() {
//   return db
//     .query(
//       `
//   SELECT * FROM detail
//   `
//     )
//     .then((result) => {
//       return result[0];
//     });
// }

export async function create(materialTax) {
  const {
    sp_no,
    make,
    delivery_date,
    account_assignment,
    cost_center,
    plant,
    quantity,
    unit,
    rate,
    dics,
    disc_amount,
    created_by,
  } = materialTax;
  console.log(materialTax);
  return db
    .query(
      `
  INSERT INTO material_tax (sp_no, make, delivery_date, account_assignment, cost_center, plant, quantity, unit, rate, dics, disc_amount, created_by, created_date)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
  `,
      [
        sp_no,
        make,
        new Date() || delivery_date,
        account_assignment,
        cost_center,
        plant,
        quantity,
        unit,
        rate,
        dics,
        disc_amount,
        created_by,
        new Date(),
      ]
    )
    .then((result) => result[0].insertId);
}
