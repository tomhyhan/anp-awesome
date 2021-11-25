import 'express-async-errors';
import * as file from '../../data/purchase/fileattachData.js';

export async function postfiles(req, res) {
  const { files } = req.body;

  console.log(files.ewaybill.join(","))
  console.log(files.invoice.join(","))
  console.log(files.other.join(","))
  const allfile = await file.create(files);
  res.status(201).json();
 
  
}
