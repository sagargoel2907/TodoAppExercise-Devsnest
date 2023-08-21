import { Sequelize } from "sequelize";
export const sequelize = new Sequelize();

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
