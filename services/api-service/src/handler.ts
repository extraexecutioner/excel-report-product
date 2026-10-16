import type {FastifyReply, FastifyError, FastifyRequest} from "fastify"

export async function onGetExcelStatsRequest(url: string, reply: FastifyReply) {
    const article = url
    const serverResponse = await fetch(url)
}

export function errorHandler(error: FastifyError, request: FastifyRequest, reply: FastifyReply) {
    request.log.error(`${error.message}, error stack: ${error.stack}, errror code: ${error.code}!`)

    const code = (error.code === "ENOTFOUND" || (error.cause as any)?.code === "ENOTFOUND") ? 400 : 500
    const serverInterval = (code === 500)

    return reply.status(code).send({
        serverInterval: serverInterval,
        payload: {errorMsg: error.message}
    })
}