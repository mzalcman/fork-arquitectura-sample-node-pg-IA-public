import Db from './db-pg.js';

export default class BaseRepository {
    constructor(tableName, className) {
        this.db = new Db();
        this.tableName = tableName;
        this.className = className;
    }

    getAllAsync = async () => {
        console.log(`${this.className}.getAllAsync()`);
        const sql = `SELECT * FROM ${this.tableName}`;
        return await this.db.queryAll(sql);
    }

    getByIdAsync = async (id) => {
        console.log(`${this.className}.getByIdAsync(${id})`);
        const sql = `SELECT * FROM ${this.tableName} WHERE id=$1`;
        return await this.db.queryOne(sql, [id]);
    }

    deleteByIdAsync = async (id) => {
        console.log(`${this.className}.deleteByIdAsync(${id})`);
        const sql = `DELETE FROM ${this.tableName} WHERE id=$1`;
        return await this.db.queryRowCount(sql, [id]);
    }
}