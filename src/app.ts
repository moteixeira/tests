import http from "node:http"

const products = [
  {id: 1, name:"Camiseta" ,price: 29.99},
  {id: 2, name:"Camiseta GG" ,price: 39.99},
  {id: 3, name:"Bermuda" ,price: 49.99}
]

const app = http.createServer((request, response)=>{
  if (request.method === "GET" && request.url === "/products" ){
    response.setHeader("Content-Type", "application/json")
    response.end(JSON.stringify(products))
  }
})


export {app}