const express = require('express');
const db = require('../data/dbconfig.js');
const Projects = require('./project-model.js');

const router = express.router();


router.get('/', (req,res) => {
    Projects.find()
    .then(projects => {
        res.json(projects);
    })
    .catch( err => {
        res.status(500).json({
            message: 'Failed to get the Projects'
        });
    });
});

router.get('/:id', (req,res) => {
    const {id} =req.params;
    
    Projects.findById(id)
    .then(project => {
        if(project){
            res.json(project);
        } else {
            res.status(404).json({
                message:'Could not find a project with that ID'
            });
        }
    })
    .catch(err => {
        res.status(500).json({
            message:'Failed to get project'
        });
    });
});

router.post('/', (req, res) => {
    Projects.add()

    .then(ids => {
        res.status(201).json({
            created: ids[0]
        });
    })
    .catch(error => {
        res.status(500).json({
            message:'failed to create new project'
        });
    });
});

router.put('/:id', (req, res) => {
    const {id} =req.params;

    Projects.update()

    .then(count => {
        if (count){
            res.json({
                update: count
            });
        } else {
            res.status(404).json({
                message:'Could not find user with that ID'
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            message:'Failed to update that Project'
        })
    })
})

router.delete('/:id', (req,res) => {
    const {id}=req.params;

    Projects.remove()

    .then(count => {
        if (count){
            res.json({removed: count});
        } else {
            res.status(404).json({message:'Could not find that project'});
        }
    })
    .catch(error => {
        res.status(500).json({
            message:'Failed to delete that project'
        });
    });
});

router.get('/:id/resources', (req,res) => {
    db
    .select()
    .from()
    .join()

    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(error => {
        res.status(500).json({
            error:`could not get resources with project id: ${id}`
        });
    });
});

module.exports =router;