import Link from "next/link";
import { SheetClose } from "./ui/sheet";
import { LucideProps, Settings } from "lucide-react";

interface MenuLinkProps {
  href: string;
  label: string;
  icon: React.ElementType;
}

export function MenuLink({ href, label, icon: Icon }: MenuLinkProps) {
  if (href === "/login") {
    return (
      <Link
        href={href}
        className="flex items-center gap-2 text-red-500 hover:-translate-y-1 duration-300"
      >
        <Icon />
        <span className="text-sm font-medium">{label}</span>
      </Link>
    );
  } else {
    return (
      <Link
        href={href}
        className="rounded-lg p-3  hover:scale-105 hover:bg-indigo-200 hover:text-indigo-500 trainsition-all duration-300"
      >
        <SheetClose className="flex items-center gap-2">
          <Icon className="cursor-pointer" />
          <span className="text-sm font-medium cursor-pointer">{label}</span>
        </SheetClose>
      </Link>
    );
  }
}
