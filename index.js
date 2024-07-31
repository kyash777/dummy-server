import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';



const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    return res.json("Hello")
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));