import express from 'express';
import path from 'path';
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    return res.render('Home');
})
app.listen(8081, () => {
    console.log('listening on port 8081');
});