const db =require('../data/dbconfig.js');

module.exports ={
    find,
    findByID,
    add, 
    update,
    remove,
}

function find(){
  return  db('projects');
}

function findByID(){
  return db('projects')
    .where({ id })
    .first();
}

function add(){
  const userData =req.body;

  return db('projects')
    .insert(userData)
}

function update(){
  const {id}=req.params;
  const changes =req.body;

  return db('projects')
  .where({id})
  .update(changes)
}

function remove(){
  const {id}=req.params;

  return db('projects')
    .where({id})
    .del()
}