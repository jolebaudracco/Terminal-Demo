//require("express") importa express, un framwork para manejar rutas y servidores
const express = require("express");
//after calling it, we need to execute the server with express
//by creating a function and saving it in a variable
const app = express()

// app.use((req, res) => {
//     console.log("We got a new request")
//     // res.send("Hello, we got your request! This is a response")
//     // res.send({ color: 'red' })
//     res.send('<h1>This is my webpage</h1>')
// })

// /cats => 'meow'
// /dogs => 'woof'
// '/'

//:subreddit --> es un parámetro dinámico de URL
//req.params.subreddit --> Obtiene el valor que el usuario ingresa después de /r/
//si el usuario ingresa a /r/javascript, la respuesta será "Browsing the javascript subreddit"
//res.send() --> responde con un mensaje HTML que muestra el nombre del subreddit
// /r/somethingHere
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

//Esta ruta acepta dos parámetros dinámicos en la URL: subreddit y postId
//req.params.subreddit: obtiene el nombre del subreddit
//req.params.postId: Obtiene el ID del post
//Si entrás a /r/javascript/1234, la respuesta será:
//"Viewing Post ID: 1234 on the javascript subreddit".
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

//cuando alguien entra a /cats, el servidor responde con "Hola cat" en formato HTML
app.get('/cats', (req, res) => {
    // res.send("Meow!!!")
    res.send('<h1>Hola cat</h1>')
})

//Esta ruta responde a solicitudes POST a /cats
//Si se usa POST/cats, responderá con "Post Request to /cats"
app.post('/cats', (req, res) => {
    res.send('Post Request to /cats')
})

app.get('/dogs', (req, res) => {
    res.send("Woof!!!")
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q){
        res.send('Nothing found if nothing is searched')
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('/', (req, res) => {
    res.send("Here I have a slash")
})

app.get(/(.*)/, (req, res) => {
    res.send("Just testing here!!!")
})

app.get('*', (req, res) => {
    res.send("I don't know that path")
})



//Inicia el servidor en el puerto 8080.
//Cuando se ejecuta el código, en la terminal aparecerá "Listening on port 8080!".
app.listen(8080, () => {
    console.log("Listening on port 8080!")
})


