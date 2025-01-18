"use client";

import {
  Search,
  Calendar,
  Users,
  Layout,
  Plus,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-[#00b6ff] text-white p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Dietbox</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white">
              NutriPlan
            </Button>
            <Button variant="ghost" className="text-white">
              Notificações
            </Button>
            <Button variant="ghost" className="text-white">
              Academy
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-gray-400">🏆</span> Meu progresso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={67} className="mb-4" />
                <div className="space-y-4">
                  <h3 className="font-medium">A fazer</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">
                        Baixar o aplicativo do paciente
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <span className="text-sm">
                        Paciente preencher o Diário
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            <div className="mb-6">
              <h2 className="text-xl mb-4">
                Olá, FLAVIA. Boas-vindas ao Dietbox
              </h2>
              <Input
                placeholder="Pesquise pacientes e recursos"
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2"
              >
                <Users className="h-6 w-6" />
                <span className="text-sm">Adicionar paciente</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2"
              >
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Minha agenda</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2"
              >
                <Layout className="h-6 w-6" />
                <span className="text-sm">Design Canva</span>
              </Button>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Agendamentos</CardTitle>
                <Button>Novo agendamento</Button>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A agenda Dietbox facilita a visualização de seus compromissos
                  futuros, garantindo que você não esqueça de nada.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">NutriPlan</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tarefas">
                  <TabsList className="w-full">
                    <TabsTrigger value="tarefas" className="flex-1">
                      Tarefas
                    </TabsTrigger>
                    <TabsTrigger value="notas" className="flex-1">
                      Notas
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="tarefas">
                    <div className="flex justify-between items-center mt-4">
                      <Input placeholder="Buscar" className="w-full" />
                      <Button size="sm" variant="ghost">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      Nenhuma tarefa encontrada.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Não há mensagens não lidas
                </p>
                <Button className="w-full mt-4">Enviar Recado</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
