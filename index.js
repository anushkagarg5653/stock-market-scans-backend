const express = require('express');
const app = express();
const port = 5000;

const scans = [
    {
        id:1,
        name: 'Scan 1',
        SubCriteria: [
            {type: 'text', label: 'Sub Criteria A'},
            {type: 'variable', label: 'Sub Criteria B', values: [1,2,3]}
        ]
    }
];

app.get('api/scans',(req, res) => {
    res.json(scans);
});

app.listen(port, () => {
    console.log('listening on port');
})