declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BASE_URL: string;
      LOGIN_STANDARD_USER: string;
      PASSWORD: string;
      LOGIN_LOCKED_OUT_USER: string;
      LOGIN_PROBLEM_USER: string;
      LOGIN_PERFORMANCE_GLITCH_USER: string;
      LOGIN_ERROR_USER: string;
      LOGIN_VISUAL_USER: string;
    }
  }
}

export {};
