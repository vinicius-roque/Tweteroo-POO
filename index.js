import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import userRouter from "./src/routes/userRoutes.js";
import tweetsRouter from "./src/routes/tweetsRoutes.js";

const app = express();

app.use(cors());
app.use(json());

app.use(userRouter);
app.use(tweetsRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
