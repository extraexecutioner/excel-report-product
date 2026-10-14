import {Type} from '@fastify/type-provider-typebox'

export const onGetExcelStatsRequestSchema = {
    body: Type.Object(
        {url: Type.String({minLength: 7, pattern: '^https?://[a-zA-Z0-9.-]+.(ru|com)(/.*)?$'})},
        {
            maxProperties: 1,
            required: ['url']
        }
    ),

    response: Type.Object({
        
    })
}