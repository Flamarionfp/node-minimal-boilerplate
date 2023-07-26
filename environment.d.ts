declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXAMPLE: string
      NODE_ENV: 'development' | 'production'
    }
  }
}

export {}
