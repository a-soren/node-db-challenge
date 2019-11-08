const server = require('./server.js');

const PORT = 7500;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

