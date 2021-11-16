import 'express-async-errors';
import * as materiallData from '../../data/purchase/materialData.js';

export async function postMaterial(req, res) {
  const { mat_tax } = req.body;

  const MaterialTax = await materiallData.create(mat_tax);
  res.status(201).json();
}
