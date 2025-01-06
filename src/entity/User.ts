export interface User {
  createdAt: string; // ISO string for creation timestamp
  updatedAt: string; // ISO string for update timestamp
  passwordChangeTz: string | null; // nullable, string for password change timezone
  displayname: string; // user display name
  username: string; // unique username
  email: string; // email address
  phone: string; // phone number
  appLang: string | null; // nullable, application language
  systemSettings: Record<string, unknown>; // object for system settings
  partner_id: number | null; // nullable partner ID
  id: number; // unique user ID
  createdById: number; // ID of the creator
  updatedById: number; // ID of the updater
}
