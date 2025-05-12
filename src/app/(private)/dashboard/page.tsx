"use client";
import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, ChartNoAxesCombined, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <Container>
      <div>
        <h1 className="font-bold text-3xl">Olá, Fabrício!</h1>
        <p className="font-bold text-sm text-zinc-500">
          Vamos organizar sua jornada academica
        </p>
      </div>

      <div className="w-full grid justify-center gap-5 grid-cols-1 lg:grid-cols-3">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Próximas Tarefas</span>
              <span className="text-sm text-indigo-500">3 pendentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="font-medium text-sm flex flex-col gap-4">
            <span>- Prova final de matemática - Amanhã</span>
            <p>- Tarefa de física - 3 dias</p>
            <p>- Dissertação de literatura - 1 semana</p>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Próxima Sessão de Estudo</span>
              <span className="text-sm text-indigo-500">
                <Clock />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <span className="font-medium">Cálculo II</span>
            <div className="text-sm font-medium text-zinc-500 flex flex-col gap-2">
              <span>Hoje, 14:00H - 16:00H</span>
              <div className="flex gap-2">
                <MapPin /> <span>Livraria - Sala 204</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>GPA Atual</span>
              <span className="text-sm text-indigo-500">
                <ChartNoAxesCombined />
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="font-medium text-sm flex flex-col items-center gap-4">
            <span className="text-3xl font-bold text-indigo-500">3.85</span>
            <span className="text-sm font-bold text-zinc-500">
              Quarto Semestre - 2025
            </span>
          </CardContent>
        </Card>
      </div>

      <div></div>
    </Container>
  );
}
