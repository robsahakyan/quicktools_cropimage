import fs from 'fs'
import path from 'path'

export default function handler(req: any, res: any) {
    if (req.method === "DELETE") {
        const { filename } = req.query;

        if (filename) {
            fs.rmSync(path.resolve('public/uploads'), { recursive: true, force: true });
            fs.mkdirSync(path.resolve('public/uploads'));
        }
    }
}