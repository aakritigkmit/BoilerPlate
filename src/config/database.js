const express= require("express")
const app=express();




const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'mydb',
  user: 'myuser',
  password: 'mypass',
  host: 'localhost',
  port: 5432,
  ssl: true,
  clientMinMessages: 'notice',
});