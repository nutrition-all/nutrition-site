import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Apple, Facebook } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
          <CardDescription className="text-center">
            Acesse sua conta de nutricionista
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Senha"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
            Entrar
          </Button>
          <div className="flex items-center justify-between">
            <Link
              href="/forgot-password"
              className="text-sm text-green-600 hover:underline"
            >
              Esqueceu a senha?
            </Link>
            <Link
              href="/signup"
              className="text-sm text-green-600 hover:underline"
            >
              Criar conta
            </Link>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full space-y-2">
            <Button variant="outline" className="w-full">
              <Facebook className="mr-2 h-4 w-4" />
              Entrar com Facebook
            </Button>
            <Button variant="outline" className="w-full">
              <Apple className="mr-2 h-4 w-4" />
              Entrar com Apple
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
