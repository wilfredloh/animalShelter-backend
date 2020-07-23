const Animal = require('../model/animal')

module.exports = controller = {
    create: async (req, res, next) => {
        try {
            const { name, species, breed, sex, image, age, adopted } = req.body;
            const newAnimal = new Animal({
                name,
                species,
                breed,
                sex,
                image,
                age,
                adopted
            })
            await newAnimal.save()
            return res.status(201).json({
                success: true,
                message: 'animal successfully created',
                data: newAnimal
            })
        } catch (err) {
            console.log(err)
            const error = err.message
            return res.status(500).json({
                success: false,
                message: 'Server error',
                error: error
            })
        }
    },
    index: async (req, res, next) => {
        try {
            const search = await Animal.find({})
            return res.status(200).json({
                success: true,
                message: 'animal results returned',
                data: search
            })
        } catch (err) {
            console.log(err)
            const error = err.message
            return res.status(500).json({
                success: false,
                message: 'Server error',
                error: error
            })
        }
    },

    delete: async (req,res,next) => {
        try {
            let index = req.params.index
            console.log(index)
            await Animal.findByIdAndDelete(index)
            let animals = await Animal.find({})
            return res.status(200).json({
                success: true,
                message: 'animals deleted',
                data: animals
            })
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: 'Server error',
                error: error
            })
        }
    },

    update: async (req,res,next) => {
        try {
            let index = req.params.index
            const { name, species, breed, sex, image, age, adopted } = req.body
            const updatedAnimal = await Animal.findByIdAndUpdate(index,{
                name: name,
                species: species,
                breed: breed,
                sex: sex,
                image: image,
                age: age,
                adopted: adopted
            })
            return res.status(200).json({
                success: true,
                message: 'animal updated',
                data: updatedAnimal
            })
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: 'Server error',
                error: error
            })
        }
    },

    findOne: async (req,res,next) => {
        try {
            let index = req.params.index
            let animals = await Animal.findById(index)
            return res.status(200).json({
                success: true,
                message: 'animals findOne',
                data: animals
            })
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: 'Server error',
                error: error
            })
        }
    }
}