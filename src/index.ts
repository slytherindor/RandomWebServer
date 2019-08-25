import express from "express";

const app = express();
const port = 3000;

app.get('/dough', (req, res) => {
    console.log("Dough Request Received,", new Date());
    setTimeout(() => (
        res.json({ dough: "gluten-free" })
        ), randomTimeout())
});

app.get('/sauce', (req, res) => {
    console.log("Sauce Request Received,", new Date());
    setTimeout(() => (
        res.json({ sauce: req.query.sauce })
        ), randomTimeout())
});

app.get('/cheese', (req, res) => {
    console.log("Cheese Request Received,", new Date());
    let cheese = "mozarella";
    switch(req.query.sauce) {
        case "red":
            cheese = "mozarella";
            break;
        case "pesto":
            cheese = "feta";
            break;
        case "bechamel":
            cheese = "cheddar";
            break;
        case "bbq":
            cheese = "parmesan"
            break;
        case "alfredo":
            cheese = "goat"
            break;
        default:
            break;
    }
    setTimeout(() => (
        res.json({ cheese: cheese })
        ), randomTimeout())
});

app.get('/chef', (req, res) => {
    console.log("Chef Request Received,", new Date());
    const chefs = ["Franco Pepe",
    "Gabrielle Bonci",
    "Ciro Salvo",
    "Franco Caffara",
    "Chris Bianco", 
    "Enzo Coccia",];
    setTimeout(() => (
        res.json({ chef: chefs[Math.floor(Math.random() * chefs.length)] })
        ), randomTimeout())
});

function randomTimeout() {
    return Math.floor(Math.random() * (5000 - 1000)) + 1000;
}

app.listen(port, () => console.log(`Pizza making app listening on port ${port}!`))