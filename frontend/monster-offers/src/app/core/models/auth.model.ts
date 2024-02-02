
export interface AuthResponse {
  jwt: string;
  userId: string;
}
export interface AuthRequest {
  email: string;
  password: string;
}
