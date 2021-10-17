import jwt from 'jsonwebtoken';
import { config } from '../config.js';
import * as employeeData from '../data/master/employeeData.js';


const auth_err = {message: "Authentication invalid"}

// Laster also need to validate the Header auth
export export async function isAuth (req,res,next) {
    // check for cookies
    const token = req.cookies['token']

    if (!token) {
        res.status(401).json(auth_err)
    }

    jwt.verify(token, config.jwt.key, async (err, decode)=> {
        if (err) {
            res.status(401).json(auth_err)
        }

        const employee = await employeeData.getByEmployeeCode(decode.emp_id)
        if (!employee) {
            return res.status(401).json(auth_err)
        }
        req.emp_id = employee.emp_id
        req.token = token  
        next()
    })

}

