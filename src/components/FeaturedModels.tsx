import { Button } from "@/components/ui/button";
import { ModelCard } from "./ModelCard";
import { ExternalLink } from "lucide-react";

const featuredModels = [
  {
    name: "Gemini 2.5 Pro Preview 06-05",
    provider: "google",
    providerIcon: "https://openrouter.ai/images/icons/GoogleGemini.svg",
    tokens: "15.4B",
    latency: "2.2s",
    growth: "--",
    isNew: true
  },
  {
    name: "GPT-4.1",
    provider: "openai", 
    providerIcon: "https://openrouter.ai/images/icons/OpenAI.svg",
    tokens: "47.0B",
    latency: "771ms",
    growth: "-1.71%",
    featured: true
  },
  {
    name: "Claude Sonnet 4",
    provider: "anthropic",
    providerIcon: "https://openrouter.ai/images/icons/Anthropic.svg",
    tokens: "214.4B", 
    latency: "1.6s",
    growth: "-18.11%"
  }
];

export function FeaturedModels() {
  return (
    <div className="hidden space-y-3 md:block">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
        <Button variant="ghost" size="sm" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring underline hover:text-link/80 h-6 rounded-md px-1.5 shadow-xs text-primary gap-0 text-xs hover:underline">
          View Trending
          <ExternalLink className="inline-block ml-px size-3" />
        </Button>
      </div>
      <div className="space-y-3">
        {featuredModels.map((model, index) => (
          <ModelCard key={index} {...model} />
        ))}
      </div>
    </div>
  );
}