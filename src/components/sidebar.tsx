import {
  Menu,
  House,
  Book,
  Calendar,
  List,
  ChartBar,
  Settings,
  LogOut,
} from "lucide-react";
import { MenuLink } from "@/components/menuLink";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { DialogTitle } from "./ui/dialog";

export function Sidebar() {
  return (
    <div className="w-full h-14 z-10 bg-white shadow-sm flex sm:flex-col items-center px-5 sm:py-5 sm:fixed sm:inset-y-0 sm:left-0 sm:w-14 sm:h-full sm:justify-start">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="cursor-pointer">
            <Menu className="w-5 h-5" />
            <span className="sr-only">Abrir / Fechar menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-5 py-5 flex flex-col gap-5">
          <DialogTitle className="mb-5">UniPlan | Menu</DialogTitle>
          <div className="flex gap-2 items-center w-full mb-5">
            <div className="w-10 h-10 bg-black rounded-full"></div>
            <div className="flex flex-col text-sm font-medium">
              <span>Fabrício Dias</span>
              <span>dias.fabricio0812@gmail.com</span>
            </div>
          </div>
          <div className="h-full flex flex-col items-start justify-between">
            <div className="flex flex-col gap-5 w-full">
              <MenuLink href="/dashboard" icon={House} label="Dashboard" />
              <MenuLink href="/subjects" icon={Book} label="Matérias" />
              <MenuLink href="/agenda" icon={Calendar} label="Agenda" />
              <MenuLink
                href="/study_plan"
                icon={List}
                label="Plano de estudos"
              />
              <MenuLink href="/grades" icon={ChartBar} label="Grades" />
              <MenuLink
                href="/settings"
                icon={Settings}
                label="Configurações"
              />
            </div>
            <MenuLink href="/login" icon={LogOut} label="Sair" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
