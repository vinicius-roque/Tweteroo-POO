import { usuarios, tweets } from "../../data.js";
import { Tweet } from "../models/tweetsModel.js";

export function createTweet(req, res) {
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  const { avatar } = usuarios.find(user => user.username === username);

  const newTweet = new Tweet(username, avatar, tweet);

  tweets.push(newTweet);

  res.status(201).send('OK, seu tweet foi criado');
};

export function getTweetsOfUser(req, res) {
  const { username } = req.params;

  const tweetsDoUsuario = tweets.filter(t => t.username === username);

  res.status(200).send(tweetsDoUsuario);
};

export function getTweets(req, res) {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    return res.send(reverseTweets());
  }

  res.status(200).send([...tweets].reverse().slice(start, end));
};

function reverseTweets() {
  return [...tweets].reverse();
}