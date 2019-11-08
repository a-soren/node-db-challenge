const UserRouter = require('./projects/project-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', UserRouter);

module.exports =server;