import Image from "next/image";
import logoLight from "@/app/assets/logoLight.svg";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Login() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center gap-5 px-4">
        <Image
          src={logoLight}
          alt="Logo do site UniPlan"
          className="w-full max-w-xs"
        />
        <Card className="w-full">
          <CardContent className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="rememberPassword" className="cursor-pointer" />
                <Label htmlFor="rememberPassword" className="cursor-pointer">
                  Lembrar da conta
                </Label>
              </div>
              <Button variant="link">
                <Link href="#" className="text-indigo-500">
                  Esqueceu a senha?
                </Link>
              </Button>
            </div>
            <Button variant="default" className="cursor-pointer">
              Entrar
            </Button>
            <div className="w-full flex items-center justify-center gap-5">
              <div className="w-full flex-1 h-px bg-zinc-300"></div>
              <span className="text-sm flex-1 text-center text-zinc-500">
                Ou continue com
              </span>
              <div className="w-full flex-1 h-px bg-zinc-300"></div>
            </div>
            <div className="flex items-center justify-center gap-5">
              <div className="flex flex-1 items-center justify-center px-6 py-3 border-1 border-zinc-300 rounded-lg cursor-pointer hover:bg-zinc-100 hover:scale-110 transition-all duration-500 w-full max-w-36">
                <FaGoogle size={26} />
              </div>
              <div className="flex flex-1 items-center justify-center px-6 py-3 border-1 border-zinc-300 rounded-lg cursor-pointer hover:bg-zinc-100 hover:scale-110 transition-all duration-500 w-full max-w-36">
                <FaGithub size={26} />
              </div>
              <div className="flex flex-1 items-center justify-center px-6 py-3 border-1 border-zinc-300 rounded-lg cursor-pointer hover:bg-zinc-100 hover:scale-110 transition-all duration-500 w-full max-w-36">
                <FaLinkedin size={26} />
              </div>
            </div>
            <Button variant="link">
              <Link href="/register">
                Ainda não possui uma conta?
                <span className="text-indigo-500"> Cadastre-se</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
