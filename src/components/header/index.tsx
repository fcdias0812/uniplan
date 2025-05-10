import Image from "next/image";
import logoLight from "@/app/assets/logoLight.svg";

export function Header() {
  return (
    <header className="sticky top-0 w-full h-20 bg-white shadow-sm flex items-center">
      <nav className="w-full mx-5 flex items-center justify-between">
        <Image src={logoLight} alt="Logo do site UniPlan" />
        <div className="w-10 h-10 bg-black rounded-full"></div>
      </nav>
    </header>
  );
}
