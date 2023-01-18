//export const STATUS = "status";
//export const UID = "uid";
//export const EMAIL = "email";
//export const DISPLAYNAME = "displayName";
//export const PHOTOURL = "photoURL";
//export const ERRORMESSAGE = 'errorMessage';
//export const TOKEN = "token";

export interface AuthState {
  status?: string;
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  errorMessage?: string | null;
  token?: string | null;
  ok?: boolean
}
