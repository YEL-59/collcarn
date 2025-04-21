import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router";
import logo from "@/assets/logo.png";
import Person from "@/assets/svg/person";
import { Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Center Content: Search Bar */}
        <div className="hidden md:flex flex-grow justify-center px-4">
          <div className="flex items-center px-4 py-2 bg-white rounded-full shadow border w-full max-w-2xl">
            <Search className="text-gray-500 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search pets, services, etc."
              className="flex-grow outline-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
            />
            <button
              className="ml-2 px-4 py-1.5 text-white rounded-full text-sm font-medium transition hover:opacity-90"
              style={{
                background: "linear-gradient(91deg, #FF9F2C 0%, #EA8A00 100%)",
              }}
            >
              Fetch
            </button>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <Button className="rounded-md text-[16px] px-5 py-3 bg-transparent shadow-none border-none text-white flex items-center gap-2">
            <Person className="w-4 h-4" />
            Sign in
          </Button>
          <Button
            variant="outline"
            className="rounded text-[16px] px-5 py-3 text-primary bg-white"
          >
            Become a Member
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-4">
              <div className="space-y-4 mt-6">
                <Button
                  variant="outline"
                  className="rounded-md w-full text-[16px] px-5 py-3"
                >
                  Sign in
                </Button>
                <Button
                  variant="outline"
                  className="rounded-md w-full text-[16px] px-5 py-3"
                >
                  Become a Member
                </Button>
                {/* Mobile search input */}
                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow border w-full">
                  <Search className="text-gray-500 w-5 h-5 mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow outline-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
