import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">OR</span>
            </div>
            <span className="font-semibold text-foreground">OpenRouter</span>
          </div>
          
          <div className="hidden md:flex relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search" 
              className="pl-10 w-64"
            />
          </div>
        </div>

        <nav className="flex items-center gap-6">
          <Button variant="ghost" size="sm">Models</Button>
          <Button variant="ghost" size="sm">Chat</Button>
          <Button variant="ghost" size="sm">Rankings</Button>
          <Button variant="ghost" size="sm">Docs</Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
}