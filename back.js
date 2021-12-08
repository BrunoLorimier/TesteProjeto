const express = require ('express')
const mysql = require ('mysql2')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/evento', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'projeto',
        password: ''
    })
    connection.query('SELECT * FROM tb_evento', (err, results, fields) => {
        console.log(results)
        res.status(200).json({
            mensagem: "Tudo ok",
            eventos: results
        })
    })
})

app.get('/:id', (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'projeto',
        password: ''
    })
    const id = req.params.id
    const sql = 'SELECT nome, dt_inicio, dt_final, descr, numero, minNumero, email, telefone, endereco, cep FROM tb_evento WHERE id = ?'
    connection.query(sql, [id], (err, results, fields) => {
        console.log(results)
        res.status(200).json({
            mensagem: "Tudo ok",
            eventos: results
        })
    })
})

app.put('/:id', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'projeto',
        password: ''
    })
    const id = req.params.id
    const numero = req.body.minNumero
    const sql = 'UPDATE tb_evento SET minNumero = ? WHERE id = ?'
    connection.query(sql, [numero, id], (err, results, fields) => {
        console.log(results)
        res.status(200).json({
            mensagem: "Número atualizado"
        })
    })
})

app.delete('/evento/:id', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'projeto',
        password: ''
    })
    const id = req.params.id
    const sql = 'DELETE FROM tb_evento WHERE id = ?'
    connection.query(sql, [id], (err, results, fields) => {
        console.log(results)
        res.status(200).json({
            mensagem: "Evento deletado"
        })
    })
})

app.post('/novoevento', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'projeto',
        password: ''
    })
    const nome = req.body.nome
    const dt_inicio = req.body.dt_inicio
    const dt_final = req.body.dt_final
    const descr = req.body.descr
    const sql = "INSERT INTO tb_evento (nome, dt_inicio, dt_final, descr) VALUES (?, ?, ?, ?)"
    connection.query(sql, [nome, dt_inicio, dt_final, descr], (err, results, fields) => {
        console.log(results)
        res.status(201).json({
            mensagem: "Evento criado"
        })
    })
})

app.post('/novoacoes', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'projeto',
        password: ''
    })
    const nome = req.body.nome
    const email = req.body.email
    const telefone = req.body.telefone
    const endereco = req.body.endereco
    const cep = req.body.cep
    const dt_inicio = req.body.dt_inicio
    const numero = req.body.numero
    const classi = req.body.classi
    const sql = "INSERT INTO tb_evento (nome, email, telefone, endereco, cep, dt_inicio, numero, classi) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    connection.query(sql, [nome, email, telefone, endereco, cep, dt_inicio, numero, classi], (err, results, fields) => {
        console.log(results)
        res.status(201).json({
            mensagem: "Evento criado"
        })
    })
})

app.post('/signup', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'projeto',
        password: ''
    })
    const cpf = req.body.cpf
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    const endereco = req.body.endereco
    const telefone = req.body.telefone
    const dia = req.body.data
    const sql = "INSERT INTO tb_usuario (cpf, nome, email, senha, endereco, telefone, dia) VALUES (?, ?, ?, ?, ?, ?, ?)"
    connection.query(sql, [cpf, nome, email, senha, endereco, telefone, dia], (err, results, fields) => {
        console.log(results)
        res.status(201).json({
            mensagem: "Usuário criado"
        })
    })
})

app.post('/login', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'projeto',
        password: ''
    })
    const email = req.body.email
    const senha = req.body.senha
    const sql = "SELECT email, senha FROM tb_usuario WHERE email = ? AND senha = ?"
    connection.query(sql, [email, senha], (err, results, fields) => {
        console.log(results)
        res.status(201).json({
            mensagem: "Login bem sucedido"
        })   
    })
})

app.post('/parceiro', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'projeto',
        password: ''
    })
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    const endereco = req.body.endereco
    const telefone = req.body.telefone
    const zona = req.body.zona
    const tipo = req.body.tipo
    const sql = "INSERT INTO tb_parceiro (nome, email, senha, endereco, telefone, zona, tipo) VALUES (?, ?, ?, ?, ?, ?, ?)"
    connection.query(sql, [nome, email, senha, endereco, telefone, zona, tipo], (err, results, fields) => {
        console.log(results)
        res.status(201).json({
            mensagem: "Parceiro criado"
        })
    })
})

const porta = 3000
app.listen(porta, () => {console.log(`executando: porta ${porta}`)})