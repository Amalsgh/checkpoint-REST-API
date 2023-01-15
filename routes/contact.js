// 1 require express
const express = require("express");
const Contact = require("../models/Contact");

// 2 express router
const router = express.Router();

/// Routes

/**
 * @description : testing route
 * @path : http://localhost:1997/api/contact/test
 * @method : GET
 * @data : no data
 */
router.get('/test', (req, res) => {
    res.send("Hello world");
});

/**
 * @description : add contact
 * @path : http://localhost:1997/api/contact/add
 * @method : POST
 * @data : req.body
 */
router.post('/add', async(req, res) => {
    try {
        const {name, email, phone} = req.body;
        const newContact = new Contact ({name, email, phone})
        await newContact.save()
        res.status(200).send({msg: "Contact add successfully", newContact})
    } catch (error) {
        res.status(400).send({msg: "Can not add contact!!", error});
    }
});

/**
 * @description : get all conatact
 * @path : http://localhost:1997/api/contact/all
 * @method : Get
 * @data : no data
 */
router.get('/all', async(req, res) => {
    try {
        const listContacts = await Contact.find()
        res.status(200).send({msg: "this is the list of all the contacts", listContacts});
    } catch (error) {
        res.status(400).send({msg: "Can not get all the contactst!!", error}); 
    }
});

/**
 * @description : get one contact
 * @path : http://localhost:1997/api/contact/:id
 * @method : Get
 * @data : req.params._id
 */
router.get('/:id', async(req, res) => {
    try {
        const oneContact = await Contact.findOne({_id: req.params.id});
        res.status(200).send({msg: "I get the contact", oneContact});
    } catch (error) {
        res.status(400).send({msg: "Can not find the contact with this id !!", error}); 
    }
});

/**
 * @description : delete
 * @path : http://localhost:1997/api/contact/:_id
 * @method : DELETE
 * @data : req.params._id
 */
router.delete('/:_id', async(req, res) => {
    try {
        const {_id} = req.params
        await Contact.findOneAndDelete({_id});
        res.status(200).send({msg: "Contact deleted", oneContact});
    } catch (error) {
        res.status(400).send({msg: "Can not delete the contact with this id !!", error}); 
    }
});

/**
 * @description : edit
 * @path : http://localhost:1997/api/contact/:_id
 * @method : PUT
 * @data : req.params._id & req.body
 */
router.put('/:_id', async(req, res) => {
    try {
        const {_id} = req.params
        const result = await Contact.updateOne ({_id}, {$set: {...req.body}});
        res.status(200).send({msg: "Contact updated"});
    } catch (error) {
        res.status(400).send({msg: "Can not update the contact with this id !!", error}); 
    }
});





// 3 export
module.exports = router;
