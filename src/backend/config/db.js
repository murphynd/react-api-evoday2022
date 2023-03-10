const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedToplogy: true
})
.then(()=> {
    console.log("DB Connected");
})
.catch((err) => console.log(err))