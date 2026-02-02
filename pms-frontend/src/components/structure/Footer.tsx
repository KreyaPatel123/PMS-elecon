import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Top Section */}
        <div className="flex justify-center">
        <div className="w-full max-w-3xl flex flex-col space-y-8 justify-center items-center">
            {/* PMS Column */}
            <div className="space-y-8">
            {/* Logo and Title - Centered on mobile, left on desktop */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">PMS</span>
                </div>
                <div className="text-center md:text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Project Management System
                </h2>
                <p className="text-lg text-gray-600 mt-2">
                    Maintain and Track Your Projects
                </p>
                </div>
            </div>

            {/* Description - Centered */}
            <p className="text-gray-600 text-center md:text-center max-w-2xl mx-auto md:mx-0">
                We build tools that help teams create amazing digital experiences.
                Join thousands of satisfied customers worldwide.
            </p>

            {/* Contact Info - Centered on mobile, left on desktop */}
            <div className="flex flex-row gap-10 items-center md:items-center justify-center">
                <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">support@pms.com</span>
                </div>
                <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">+91 9876543201</span>
                </div>
                <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">Vallabh Vidyanagar, Anand</span>
                </div>
            </div>
            </div>
        </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
          <div className="text-gray-500 text-sm">
            © {currentYear} Project Management System. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-500 hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="text-gray-500 hover:text-primary"
          >
            Back to top ↑
          </Button>
        </div>
      </div>
    </footer>
  )
}
