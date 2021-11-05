import 'express-async-errors';
import * as detailData from '../../data/purchase/detailData.js';

export async function postDetail(req, res) {
  const { detail } = req.body;

  const sparePart = await detailData.create(detail);
  res.status(201).json();
}
