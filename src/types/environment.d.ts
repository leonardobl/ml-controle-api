declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_PASSWORD: string;
      POSTGRES_USERNAME: string;
    }
  }
}

export {};
