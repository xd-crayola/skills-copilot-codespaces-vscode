//Create web server
const express = require('express');
const app = express();
//Create Router
const router = express.Router();
//Create Route
router.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});
//Mount Router
app.use('/api', router);
//Start Server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});