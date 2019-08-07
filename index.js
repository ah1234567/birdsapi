const express = require('express');
const app = express();



const path = require('path');



app.listen(port, () => {
    console.log(`server started at port ${port}`);
});


app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/getList', (req, res) => {
    const list = [
        { id: 1, firstName: 'B', lastName: 'bb' },
        { id: 2, firstName: 'C', lastName: 'cc' },
        { id: 3, firstName: 'D', lastName: 'dd' },
    ];
    res.json(list);
});
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);


// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



