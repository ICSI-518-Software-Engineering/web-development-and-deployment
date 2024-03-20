const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://user:ued89Sx8sAfZy4cc@cluster0.vk9wrbt.mongodb.net/inventory-management-application'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB  