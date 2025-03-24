export interface User {
    googleId: string;
    email: string;
    name: string;
    picture: string;
  }
  
  export interface AuthResponse {
    token: string;
    refreshToken: string;
    user: User;
  }