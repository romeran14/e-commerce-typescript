const STATUS = "status";
const UID = "uid";
const EMAIL = "email";
const DISPLAYNAME = "displayName";
const PHOTOURL = "photoURL";
const ERRORMESSAGE = 'errorMessage';
const TOKEN = "token";

export interface AuthState {
  STATUS: string;
  UID: string | null;
  EMAIL: string | null;
  DISPLAYNAME: string | null;
  PHOTOURL: string | null;
  ERRORMESSAGE: string | null;
  TOKEN: string | null;
}
