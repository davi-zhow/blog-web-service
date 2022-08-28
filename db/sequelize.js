const Sequelize = require('sequelize');
//导入数据库配置
const db = require('../config/db');
const sequelize = new Sequelize(db.database, db.user, db.password, {
    logging(sql) {
        //logger 为log4js的logger实例
        if (process.env.NODE_ENV !== 'production') {
            console.log(sql)
        }
    },
    port: db.port,
    host: db.host,
    dialect: 'mysql',
    dialectOptions: {
        dateStrings: true,
        typeCast: true
    },
    pool: {
        max: 20,
        min: 1,
        acquire: 60000,
        idle: 10000
    },
    timezone: '+08:00'
})
exports.sequelize = sequelize;
exports.defineModel = fuc