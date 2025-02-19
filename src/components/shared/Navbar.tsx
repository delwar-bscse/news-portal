import Link from "next/link";
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
            <NavigationMenuItem className="flex items-center gap-2">
              <NavigationMenuLink href="/news" className="hover:text-red-500">
                News
              </NavigationMenuLink>
              <NavigationMenuTrigger className="hover:text-red-500">Services</NavigationMenuTrigger>
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
      </nav>
    </header>
  );
};

export default Navbar;
