import Server from './server.js'

const requiredEnvFiles: string[] = ['SERVER_PORT']

requiredEnvFiles.forEach(env => {
    if (!process.env[env]) {
        console.error(`Failed to find env: ${env}`)
        process.exit(1)
    }
})

const server = new Server()