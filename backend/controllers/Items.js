import express from 'express'
import Item from '../models/ItemsModel.js'


const getItems = async (req, res) => {
    try {
        const items = await Item.find({})
        res.status(200).send(items)
    } catch (error) {
        res.status(400).send(error)
    }
}
export default getItems