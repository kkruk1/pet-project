declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      ADMIN_USERNAME: string;
      ADMIN_PASSWORD: string;
    }
  }
}

export {};
