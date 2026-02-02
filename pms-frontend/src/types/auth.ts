export interface SignupData {
  firstName: string
  middleName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  contactNumber: string
  accountType: "Admin" | "Manager" | "Member"
}

export interface LoginData {
  email: string
  password: string
}
