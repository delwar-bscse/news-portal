import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center gap-4">
              <NavigationMenuLink href="/news" className="hover:text-red-500">
                News
              </NavigationMenuLink>
              <NavigationMenuLink className="hover:text-red-500">
                <NavigationMenuTrigger className="hover:text-red-500">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-md px-5 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/services/web"
                        className="hover:text-red-500"
                      >
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/apps"
                        className="hover:text-red-500"
                      >
                        Mobile App
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/seo"
                        className="hover:text-red-500"
                      >
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>
              <NavigationMenuLink href="/about" className="hover:text-red-500">
                About
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/contact"
                className="hover:text-red-500"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Color switcher and Login button */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span>Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Button</Button>
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
