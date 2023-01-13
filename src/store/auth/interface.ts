export interface AuthState {
  status: string;
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
  token:string | null;
}
