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
            <Button variant="link">
              <Link href="#">
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
