fetch("https://sua-url-aqui.com", { 
    method: "POST",
    body: JSON.stringify({ teste: "dados" }),
    headers: { "Content-Type": "application/json" }
})
.then(res => console.log(res))
.catch(err => console.error(err));
