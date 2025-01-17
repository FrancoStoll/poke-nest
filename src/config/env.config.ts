


export const EnvConfiguration = () => ({

    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    PORT: process.env.PORT || 3001,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7,


})

