module.exports =
    {
        keys: {
            CAPTAIN_DOCKER_API: 'CAPTAIN_DOCKER_API',
            CAPTAIN_IS_DEBUG: 'CAPTAIN_IS_DEBUG',
            IS_CAPTAIN_INSTANCE: 'IS_CAPTAIN_INSTANCE'
        },

        CAPTAIN_DOCKER_API: process.env.CAPTAIN_DOCKER_API,

        CAPTAIN_IS_DEBUG: !!process.env.CAPTAIN_IS_DEBUG,

        MAIN_NODE_IP_ADDRESS: process.env.MAIN_NODE_IP_ADDRESS,

        IS_CAPTAIN_INSTANCE: process.env.IS_CAPTAIN_INSTANCE,

        DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD
    };