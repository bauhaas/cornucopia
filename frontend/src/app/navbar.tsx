import { Button } from "../components/ui/button";
import { Dices } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-4 bg-white border-b border-gray-200 dark:bg-zinc-800 dark:border-zinc-700">
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-between w-full">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
          <div className="flex items-center gap-2 ml-8">
            <Button className="flex gap-2 " size="sm">
              <Dices />
              Shuffle
            </Button>
            <Button size="sm">Sign in</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
