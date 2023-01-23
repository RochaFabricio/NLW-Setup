import cors from '@fastify/cors';
import Fastify from "fastify";
import { appRoutes } from './routes';

const app = Fastify();
app.register(cors, {
    origin: ['http://192.168.1.131:19000', 'http://localhost:5173'],
});
app.register(appRoutes);
app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() => {
    console.log("Server listening on port 3333");
});
