//http://localhost:4040/

// Import express module
const express = require('express');
const path = require('path')

//Call express create an instance of the application and define the port
const app = express();
const PORT = 4040;

app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
})

app.get('/game', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'game.html'));
})

app.get('/test', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'home_new.html'));
})



// Use listen method to listen to desired PORT and start the server. 
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);

module.exports = app