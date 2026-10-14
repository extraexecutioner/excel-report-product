import {onGetExcelStatsRequest} from './handler.js'
import {onGetExcelStatsRequestSchema} from './schemas.js'
import type {CustomFastifyInstance} from './server.js'

export default class Router {
    #app: CustomFastifyInstance

    #routes() {
        this.#app.get("/files", {schema: onGetExcelStatsRequestSchema}, (request, reply) => {
            
        })
    }

    public constructor(app: CustomFastifyInstance) {
        this.#app = app
        this.#routes()
    }
}