import { useState, useRef, useEffect } from "react"
import type { SignupData } from "@/types/auth"
import { signup } from "@/api/auth.api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Phone, Lock, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"

export default function Signup() {
  const [form, setForm] = useState<SignupData>({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
    accountType: "Member",
  })

  const focus_ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focus_ref.current?.focus();
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setForm({ ...form, accountType: value as SignupData["accountType"] })
  }

  const handleSubmit = async () => {
    const res = await signup(form)
    alert(res.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-10">
      <Card className="w-full max-w-2xl shadow-xl border-gray-200">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <UserPlus className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-semibold text-center">Create Account</CardTitle>
          <CardDescription className="text-center text-gray-500">
            Fill in your details below to create a new account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-500" />
                <h3 className="text-lg font-semibold">Personal Information</h3>
              </div>
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">
                    First Name 
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Peter"
                    value={form.firstName}
                    onChange={handleChange}
                    ref={focus_ref}
                    className="focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="middleName" className="text-sm font-medium">
                    Middle Name 
                  </Label>
                  <Input
                    id="middleName"
                    name="middleName"
                    placeholder="Benjamin"
                    value={form.middleName}
                    onChange={handleChange}
                    className="focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">
                    Last Name 
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Parker"
                    value={form.lastName}
                    onChange={handleChange}
                    className="focus-visible:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <h3 className="text-lg font-semibold">Contact Information</h3>
              </div>
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="peter.parker@gmail.com"
                      value={form.email}
                      onChange={handleChange}
                      className="pl-10 focus-visible:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber" className="text-sm font-medium">
                    Contact Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={form.contactNumber}
                      onChange={handleChange}
                      className="pl-10 focus-visible:ring-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="accountType" className="text-sm font-medium">
                  Account Type 
                </Label>
                <Select value={form.accountType} onValueChange={handleSelectChange}>
                  <SelectTrigger className="focus:ring-primary">
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Member">Member</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Moderator">Moderator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Security Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-gray-500" />
                <h3 className="text-lg font-semibold">Security</h3>
              </div>
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password 
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={handleChange}
                      className="pl-10 focus-visible:ring-primary"
                    />
                  </div>
                  <p className="text-xs text-gray-500">At least 8 characters with letters and numbers</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm Password 
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="pl-10 focus-visible:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Button 
            onClick={handleSubmit} 
            className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-semibold"
            size="lg"
          >
            Sign Up
          </Button>
          
          <p className="text-center text-sm text-gray-500">
            By creating an account, you agree to our{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Privacy Policy
            </a>
          </p>
          
          <Separator />
          
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}