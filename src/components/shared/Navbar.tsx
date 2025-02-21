"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { ThemeContext } from "@/context/themeConext";

const Navbar = () => {
  const pathname = usePathname(); // Get the current route
  const {isDarkMode, toggleTheme}: any =  useContext(ThemeContext)

  // Function to check if link is active
  const getActiveClass = (path:string) =>
    pathname === path ? "text-red-500 dark:text-red-500 font-semibold" : "text-gray-700  dark:text-white";

  // Function to check if any of the services are active
  const isServicesActive = ["/web", "/apps", "/seo"].some((service) =>
    pathname.startsWith(service)
  );

  return (
    <header className="py-4 shadow-md dark:bg-gray-800 dark:text-white">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8 dark:bg-gray-800 dark:text-white">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className={`${getActiveClass("/")} dark:text-white`}>
            Daily News
          </Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center gap-4">
            <NavigationMenuItem>
              <Link href="/news" className={`hover:text-red-500 dark:hover:text-red-500 ${getActiveClass("/news")}`}>
                News
              </Link>
            </NavigationMenuItem>

            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`hover:text-red-500 dark:hover:text-red-500 dark:bg-gray-700 ${
                  isServicesActive ? "text-red-500 font-semibold" : ""
                }`}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white dark:bg-gray-600 flex flex-col gap-3 p-3">
                <div className="flex flex-col gap-2">
                  <Link href="/web" className={`hover:text-red-500 dark:hover:text-red-500 min-w-[150px] ${getActiveClass("/web")}`}>
                    Web Development
                  </Link>
                  <Link href="/apps" className={`hover:text-red-500 dark:hover:text-red-500 min-w-[150px] ${getActiveClass("/apps")}`}>
                    Mobile App
                  </Link>
                  <Link href="/seo" className={`hover:text-red-500 dark:hover:text-red-500 min-w-[150px] ${getActiveClass("/seo")}`}>
                    SEO
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" className={`hover:text-red-500 dark:hover:text-red-500 ${getActiveClass("/about")}`}>
                About
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" className={`hover:text-red-500 dark:hover:text-red-500 ${getActiveClass("/contact")}`}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Color switcher and Login button */}
        <div className="hidden lg:flex items-center gap-4">
          <div onClick={toggleTheme} className="flex items-center gap-1">
            <span>Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Button variant={"outline"}>
            <AiOutlineMenu />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
