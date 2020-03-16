const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const app = express();
const authRoutes= require('./routes/authRoutes');
const trackRoutes= require('./routes/trackRoutes');
const requireAuth=require('./middlewares/requireAuth');
const mongoUri = "mongodb+srv://admin:adminadmin@trackapp-4ljw2.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.catch(err=>{
    console.log('Error connecting to mongoose==>', err)
})
mongoose.connection.on('connected', () => {
    console.log('--connected to mogoose--')
})
// mongoose.connection.on('error', (error) => {
//     console.log('Error connecting to mongoose==>', error)
// })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(authRoutes);  
app.use(trackRoutes);
app.get('/',requireAuth, (req, res) => {
    res.status(200).json({
        email:`your email is ${req.user.email}`
    })
});


app.listen(3000, () => {
    console.log('listninig on port 300');
})