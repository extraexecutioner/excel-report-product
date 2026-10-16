import {Type} from '@fastify/type-provider-typebox'

export const onGetExcelStatsRequestSchema = {
    body: Type.Object(
        {
            url: Type.String({
                minLength: 7, 
                pattern: '^https?://[a-zA-Z0-9.-]+\\.(ru|com)(/[a-zA-Z0-9_.\\/?=&%-]*)?$'
            })
        },
        {
            maxProperties: 1,
            required: ['url']
        }
    ),

    response: {
        500: Type.Object({
            serverInterval: true,
            payload: Type.Object({
                errorMsg: Type.String()
            })
        }),

        400: Type.Object({
            serverInterval: false,
            payload: Type.Object({
                errorMsg: Type.String()
            })
        }),

        200: Type.Object({
            payload: Type.Object({

            })
        })
    }
}