import 'express-async-errors';
import * as file from '../../data/purchase/fileattachData.js';

export async function postfiles(req, res) {
  const { files } = req.body;

  const allfile = await file.create(files);
  res.status(201).json(allfile);
 
  
}
