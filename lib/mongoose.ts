import mongoose, { ConnectOptions } from 'mongoose'


let isConnected: boolean = false

export const connectDatabase = async () => {
    mongoose.set('strictQuery', true)

    if(!process.env.MONGO_URL){
        return console.error('mongo url is nnot defined')
    }

    if(isConnected){
        return
    }

    try {
        const options: ConnectOptions = {
            dbName: 'x-colone',
            autoCreate: true,
        }

        await mongoose.connect(process.env.MONGO_URL, options)

        isConnected = true
        console.log('connected to database')
    } catch (error) {
        console.log('Error connecting to database: ', error)
    }
}