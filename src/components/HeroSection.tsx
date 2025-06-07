import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { RoutingCurves } from "./RoutingCurves";
import { ModelCard } from "./ModelCard";
import { FeaturedModels } from "./FeaturedModels";

const quickStartModels = [
  {
    name: "Google",
    icon: "https://openrouter.ai/images/icons/GoogleGemini.svg"
  },
  {
    name: "OpenAI", 
    icon: "https://openrouter.ai/images/icons/OpenAI.svg",
    invert: true
  },
  {
    name: "Anthropic",
    icon: "https://openrouter.ai/images/icons/Anthropic.svg"
  }
];

export function HeroSection() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
      <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
        <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
          <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
            <h1 className="my-0 w-full py-0 text-5xl font-semibold">
              <span className="mb-1 hidden md:block">The Unified</span>
              <span className="hidden md:block">Interface For LLMs</span>
              <span className="flex flex-col gap-0.5 text-3xl md:hidden">
                <div>The Unified</div>
                <div>Interface For LLMs</div>
              </span>
            </h1>
            <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
              Better{" "}
              <a href="#" className="text-primary hover:underline">prices</a>, better{" "}
              <a href="#" className="text-primary hover:underline">uptime</a>, no subscription.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
            {/* Chat Input Card */}
            <div className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
              <RoutingCurves />
              
              <div className="flex w-full items-center justify-between gap-3 flex-row">
                <Input 
                  className="w-full appearance-none py-2 transition duration-150 ease-in-out placeholder:text-foreground/30 shadow-border focus:shadow-inner focus:outline-none text-muted-foreground bg-background focus:bg-background/80 h-10 flex-1 rounded-lg border-0 px-4"
                  placeholder="Start a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-4 group aspect-square h-10 px-3 transition-colors md:aspect-auto md:flex-shrink-0">
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>

            {/* Featured Models Section */}
            <div className="w-full min-w-80 space-y-3 md:w-auto">
              {/* Mobile routing visualization */}
              <div className="block md:hidden">
                <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="currentColor" strokeWidth="1.5">
                    <path d="M155 2C160 15 60 5 60 18" className="origin-center transition-all duration-300 text-slate-6" />
                    <path d="M160 2C160 12 160 15 160 18" className="origin-center transition-all duration-300 text-primary" />
                    <path d="M165 2C160 15 260 5 260 18" className="origin-center transition-all duration-300 text-slate-6" />
                  </g>
                  <g className="text-slate-7">
                    <circle cy="24" cx="60" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
                    <circle cy="24" cx="160" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
                    <circle cy="24" cx="260" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
                  </g>
                </svg>

                <div className="grid grid-cols-3 gap-4 pb-3">
                  {quickStartModels.map((model, index) => (
                    <Button key={index} variant="ghost" className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4">
                      <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                        <div className={`overflow-hidden rounded-full ${model.invert ? 'dark:invert' : ''}`}>
                          <img 
                            src={model.icon} 
                            alt={`${model.name} icon`}
                            className="h-full w-full object-cover"
                            width={32}
                            height={32}
                          />
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>

                <ModelCard 
                  name="GPT-4.1"
                  provider="openai"
                  providerIcon="https://openrouter.ai/images/icons/OpenAI.svg"
                  tokens="47.0B"
                  latency="771ms"
                  growth="-1.71%"
                  featured
                />

                <div className="flex items-center justify-between px-2 pt-4">
                  <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
                  <a className="text-primary text-xs hover:underline" href="#">
                    View Trending
                    <ArrowRight className="inline-block ml-px size-3" />
                  </a>
                </div>
              </div>

              <FeaturedModels />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}