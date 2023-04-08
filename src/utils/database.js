const config= require('../../config')
const {Sequelize}= require('sequelize')
const enviroment = config.nodeEnv;
const db = new Sequelize(config.db[enviroment]);


module.exports = db
