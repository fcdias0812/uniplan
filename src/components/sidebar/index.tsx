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
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { DialogTitle } from "../ui/dialog";

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
              <Link
                href="/dashboard"
                className="flex items-center gap-2 border-1 border-zinc-200 rounded-lg p-5 hover:bg-zinc-100 hover:scale-105 trainsition duration-300"
              >
                <House />
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
              <Link
                href="/subjects"
                className="flex items-center gap-2 border-1 border-zinc-200 rounded-lg p-5 hover:bg-zinc-100 hover:scale-105 trainsition duration-300"
              >
                <Book />
                <span className="text-sm font-medium">Matérias</span>
              </Link>
              <Link
                href="/agenda"
                className="flex items-center gap-2 border-1 border-zinc-200 rounded-lg p-5 hover:bg-zinc-100 hover:scale-105 trainsition duration-300"
              >
                <Calendar />
                <span className="text-sm font-medium">Agenda</span>
              </Link>
              <Link
                href="/studyPlan"
                className="flex items-center gap-2 border-1 border-zinc-200 rounded-lg p-5 hover:bg-zinc-100 hover:scale-105 trainsition duration-300"
              >
                <List />
                <span className="text-sm font-medium">Plano de estudos</span>
              </Link>
              <Link
                href="/grades"
                className="flex items-center gap-2 border-1 border-zinc-200 rounded-lg p-5 hover:bg-zinc-100 hover:scale-105 trainsition duration-300"
              >
                <ChartBar />
                <span className="text-sm font-medium">Grades</span>
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-2 border-1 border-zinc-200 rounded-lg p-5 hover:bg-zinc-100 hover:scale-105 trainsition duration-300"
              >
                <Settings />
                <span className="text-sm font-medium">Configurações</span>
              </Link>
            </div>
            <Link
              href="/login"
              className="flex items-center gap-2 text-red-500 hover:-translate-y-1 duration-300"
            >
              <LogOut />
              <span className="text-sm font-medium">Sair</span>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
