const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 5000;

app.listen(port, () => {
    console.log(`server started at port ${port}`);
});

app.get('/api/birds', (req, res) => {
    const birds = [
        { id: 1, firstName: 'B', lastName: 'bb' },
        { id: 2, firstName: 'C', lastName: 'cc' },
        { id: 3, firstName: 'D', lastName: 'dd' },
    ];
    res.json(birds);
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



