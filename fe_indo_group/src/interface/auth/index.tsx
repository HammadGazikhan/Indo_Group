export interface RegisterData {
  full_name: string;
  email: string;
  phone: string;
  dob: string;
  work_experience: string;
  aadhaar: File | null;
  pan: File | null;
  ssc: File | null;
  hsc: File | null;
  degree: File | null;
}

export interface LoginData {
  phone: string;
  dob: string;
}

export interface AdminLoginData {
  email: string;
  password: string;
}
export type LoginFormValues = LoginData | AdminLoginData;
