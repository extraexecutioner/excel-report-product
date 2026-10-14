import Fastify, {type FastifyInstance} from 'fastify'
import {TypeBoxTypeProvider} from '@fastify/type-provider-typebox'

export type CustomFastifyInstance = FastifyInstance<any, any, any, any, TypeBoxTypeProvider>

export default class Server {
    #app: CustomFastifyInstance

    async #registerPlugins() {
        await this.#app.register(import('@fastify/helmet'))
    }

    async #appListen() {
        try {
            await this.#app.listen({port: Number(process.env.SERVER_PORT), host: '0.0.0.0'});
        } catch (error: unknown) {
            console.error(`Failed to start the server: ${error}`)
            process.exit(1)
        }
    }

    async #setup() {
        await this.#registerPlugins()
        this.#appListen()
    }

    public constructor() {
        this.#app = Fastify({logger: true})
        this.#setup()
    }
}