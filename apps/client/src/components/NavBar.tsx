import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";

import logo from "../assets/logo.svg";
import { SettingsDrawer } from "./SettingsDrawer";

export const NavBar = () => {
  return (
    <>
      <div className="fixed z-40 w-full bg-slate-300 flex flex-row justify-between h-16 items-center px-4">
        <img src={logo} alt="Home illustration" className="h-12" />
        <NavigationMenu>
          <NavigationMenuList className="space-x-10">
            <NavigationMenuItem>
              <Link to="/" className="text-black dark:text-white font-bold">
                Movies
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/filmography"
                className="text-black dark:text-white font-bold"
              >
                Filmography
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                to="/about"
                className="text-black dark:text-white font-bold"
              >
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <SettingsDrawer />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};
