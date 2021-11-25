import 'express-async-errors';
import * as materialTaxData from '../../data/purchase/materialTaxData.js';

export async function postMaterialTax(req, res) {
  const materialTaxs = req.body;

  materialTaxs.forEach(async (materialTax) => {
    await materialTaxData.create(materialTax);
  });

  res.status(201).json();
}
