//creating a Low-Level server using HTTP, just to practice without using Express, just to learning purposes.

const http = require('http')

//"Database" in memory using array
const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Maria" }
]

const server = http.createServer((req, res) =>{

    if(req.method === "GET" && req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json"})
        res.end(JSON.stringify(users))
        return
    }

    if(req.method === "POST" && req.url === "/users") {

        let body = ""
        
        //receber chunks do body em pedaços
        req.on("data", chunk => {
            console.log("CHUNK RECEBIDO:", chunk.toString())
            body += chunk
        })
        req.on ("end", () => {
            try {
                const data = JSON.parse(body)

                //!data.name inverte o valor do nome, então se tiver conteúdo é false e se não tiver conteúdo é true, se for true alerta que nao foi encontrado o nome.
                if(!data.name) {
                    res.writeHead(400)
                    res.end("Name is required")
                    return
                }

                const newUser = {
                    id: users.length + 1,
                    name: data.name
                }

                users.push(newUser)
                res.writeHead(201, { "Content-Type": "application/json" })
                res.end(JSON.stringify(newUser))
                

            }
            catch (error) {
                res.writeHead(400)
                res.end("invalid JSON")

            }
        })

        return;
    }





   /* console.log(req.method)
   console.log(req.url) */


   res.writeHead(404)
   res.end("Route not found")
})

server.listen(3000, 'localhost', () => {
    console.log("Servidor online em: http://localhost:3000")
    console.log("Para desligar o servidor: ctrl + c")
})