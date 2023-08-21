import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("mydb", "root", "root", {
  dialect: "mysql",
  dialectOptions: {
    // Your mysql2 options here
    // user: "root",
    // password: "root",
  },
});

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });

export const connectDB = async () => {
  await sequelize
    .sync()
    .then(() => {
      console.log("db connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
