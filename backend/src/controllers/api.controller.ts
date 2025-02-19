import { ErrorRequestHandler, Request, Response } from "express"
import mysql, { ResultSetHeader } from 'mysql2/promise'

import dotenv from 'dotenv';
dotenv.config();

import shortid from 'shortid';
import moment from "moment";

const conn = mysql.createConnection({
    host: process.env.DB_HOSTNAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

export const upload = async (req: Request, res: Response) => {
    // files + autoDel
    const albumNo = shortid.generate();
    try {
        let expried_at = null;
        if (req.body.autoDel !== 'none') {
            const data = req.body.autoDel.split(" ");
            expried_at = moment(moment().add(parseInt(data[0]), data[1]).format("YYYY-DD-MM"), true).toDate();
        }

        const db = await conn;

        let sql = "INSERT INTO `albums` (`albumNo`, `created_at`, `expired_at`) VALUES(?,?,?);";
        let value:any[] = [albumNo, moment().toDate(), expried_at];

        let [result, fields] = await db.execute(sql, value);

        
        if (req.files) {
            (req.files as any[]).forEach(async (file: Express.Multer.File, i) => {
                
                result = result as ResultSetHeader;
                const dataNo = shortid.generate();
                sql = "INSERT INTO `datas` (`dataNo`, `name`, `size`, `path`, `type`, `albumNo`) VALUES(?,?,?,?,?,?);";
                value = [dataNo, file.filename, file.size, file.path, file.mimetype, result.insertId];
                [result, fields] = await db.execute(sql, value);
            })
        }

        await db.end();
        res.json({id: albumNo});
    } catch (e) {
        console.error(e)
        res.status(500).json({message: (e as Error).message});
    }
}

export const getAlbum = async (req: Request, res: Response) => {
    const albumId = req.params.id;

    try {
        const db = await conn;

        let sql = "SELECT dataNo, name, path, size, type FROM `datas` JOIN `albums` ON `datas`.albumNo=`albums`.id WHERE `albums`.albumNo=?";
        let value = [albumId]

        let [result, fields] = await db.execute(sql, value);

        res.json({data: result});
    } catch (e) {
        console.log(e)
    }
}

export const getAll = async (req: Request, res: Response) => {}

export const getAllWithDate = async (req: Request, res: Response) => {}