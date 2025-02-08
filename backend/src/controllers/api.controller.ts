import { Request, Response } from "express"
import mysql, { ResultSetHeader } from 'mysql2/promise'

import dotenv from 'dotenv';
dotenv.config();

import shortid from 'shortid';
import moment from "moment";

export const upload = async (req: Request, res: Response) => {
    // files + autoDel
    const albumNo = shortid.generate();
    try {
        let expried_at = null;
        if (req.body.autoDel !== 'none') {
            const data = req.body.autoDel.split(" ");
            expried_at = moment(moment().add(parseInt(data[0]), data[1]).format("YYYY-DD-MM"), true).toDate();
        }

        const conn = await mysql.createConnection({
            host: process.env.DB_HOSTNAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        })

        let sql = "INSERT INTO `albums` (`albumNo`, `created_at`, `expired_at`) VALUES(?,?,?);";
        let value:any[] = [albumNo, moment().toDate(), expried_at];

        let [result, fields] = await conn.execute(sql, value);

        
        if (req.files) {
            (req.files as any[]).forEach(async (file: Express.Multer.File, i) => {
                
                result = result as ResultSetHeader;
                const dataNo = shortid.generate();
                sql = "INSERT INTO `datas` (`dataNo`, `name`, `size`, `path`, `albumNo`) VALUES(?,?,?,?,?);";
                value = [dataNo, file.filename, file.size, file.path, result.insertId];
                [result, fields] = await conn.execute(sql, value);
            })
        }


        res.json({id: albumNo});
    } catch (e) {
        console.error(e)
    }
}