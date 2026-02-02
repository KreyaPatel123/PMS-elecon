import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Menu, User, LogOut, Home, Settings, Bell, Search, UserPlus, LogIn } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Header() {
  const location = useLocation()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({ name: "John Doe", email: "john@example.com" })
  const [scrolled, setScrolled] = useState(false)

  // Check login status (mock implementation)
  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    window.location.href = "/"
  }

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-white border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 mr-24">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/70 p-6">
                <span className="text-white font-bold text-xl">PMS</span>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side - Search and Auth */}
          <div className="flex items-center space-x-4">
            {/* Search Bar - Desktop */}
            <div className="hidden lg:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search..."
                className="pl-10 w-64 border-gray-300 focus-visible:ring-primary"
              />
            </div>

            {/* Notification Bell - Logged in users */}
            {isLoggedIn && (
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-600 hover:text-primary"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
            )}

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="text-left">Menu</SheetTitle>
                <SheetDescription className="text-left">
                  Navigation and account options
                </SheetDescription>
                
                {/* Mobile Search */}
                <div className="mt-6 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search..."
                    className="pl-10 w-full"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="mt-8 space-y-2">
                  {navigation.map((item) => {
                    const Icon = item.icon || Home
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                          location.pathname === item.href
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )
                  })}
                </nav>

                {/* Mobile Auth Section */}
                <div className="mt-8 pt-6 border-t">
                  {isLoggedIn ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 px-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link to="/profile">
                            <User className="mr-2 h-4 w-4" />
                            Profile
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link to="/settings">
                            <Settings className="mr-2 h-4 w-4" />
                            Settings
                          </Link>
                        </Button>
                        <Button
                          variant="destructive"
                          className="w-full justify-start"
                          onClick={handleLogout}
                        >
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Button className="w-full" asChild>
                        <Link to="/login">
                          <LogIn className="mr-2 h-4 w-4" />
                          Login
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/signup">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Register
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Auth Buttons */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-gray-500">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer">
                      <Home className="mr-2 h-4 w-4" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-red-600 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Button variant="ghost" asChild>
                  <Link to="/login" className="text-gray-700 hover:text-primary">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Register
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}