const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' directory

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    
    // Here you would typically save to a database or send an email
    console.log('Received form submission:', { name, email, message });
    
    // Send a response back to the client
    res.json({ success: true, message: 'Form submitted successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
