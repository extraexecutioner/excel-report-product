import {onGetExcelStatsRequest, errorHandler} from './handler.js'

import {onGetExcelStatsRequestSchema} from './schemas.js'
import type {CustomFastifyInstance} from './server.js'

export default class Router {
    #app: CustomFastifyInstance

    #routes() {
        this.#app.get("/files", {schema: onGetExcelStatsRequestSchema, errorHandler: errorHandler}, (request, reply) => {
            const body = request.body
            const url = body.url

            onGetExcelStatsRequest(url, reply)
        })
    }

    public constructor(app: CustomFastifyInstance) {
        this.#app = app
        this.#routes()
    }
}