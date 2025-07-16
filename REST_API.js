//setup for postgresSQL

const { Client } = require('pg');
const express = require('express');

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "qwerty",
    database: "user_data"
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Database connection error:', err.stack));

const server = express();
server.use(express.json());


//get all data
server.get('/users',(req,res)=>{
    client.query('SELECT *FROM USERS',(err,result)=>{
        if(err){
            res.status(500).json({error:err.message});
        }
        else{
            res.json(result.rows);
        }
    });
});

//get all data by id
server.get('/users/:id',(req,res)=>{
    const{id}=req.params;

    client.query('SELECT *FROM USERS WHERE id=$1',[id],(err,result)=>{
        if(err){
            res.status(500).json({error:err.message});
        }
        else {
            if (result.rows.length > 0) {
                res.json(result.rows[0]);
            } else {
                res.status(404).send('Student not found');
            }
        }
    });
});

//post data
server.post('/users',(req,res)=>{
    const{name,email,age}=req.body;
    client.query('INSERT INTO USERS(name,email,age) VALUES($1,$2,$3)',[name,email,age],(err)=>{
        if(err){
            res.status(500).json({error:err.message});
        }
        else {
                res.send('Insertion successful');
            }

    });
});

//update data by id
server.put('/users/:id',(req,res)=>{
    const{id}=req.params;
    const{name,email,age}=req.body;
    client.query('UPDATE USERS SET name=$1,email=$2,age=$3 WHERE id=$4',  [name,email,age, id],(err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.send('Update successful');
            }
        });
});

//delete data by id
server.delete('/users/:id',(req,res)=>{
    const{id}=req.params;

    client.query('DELETE FROM USERS WHERE id=$1',[id],(err)=>{
        if(err){
            res.status(500).json({error:err.message});
        }
        else {
            res.send("Deletion successful");
        }
    });
});


//server listening port
server.listen(5200, () => {
    console.log('Server is running on port 5200');
});


