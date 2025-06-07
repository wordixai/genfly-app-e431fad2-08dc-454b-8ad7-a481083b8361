import { useState } from "react";
import { BarChart3, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeFrames = ["Today", "This Week", "This Month"];

const topApps = [
  { rank: 1, name: "Cline", description: "Autonomous coding agent right in your IDE", tokens: "29.2B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://cline.bot/&size=256", url: "https://cline.bot/" },
  { rank: 2, name: "Roo Code", description: "A whole dev team of AI agents in your editor", tokens: "23.8B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://roocode.com/&size=256", url: "https://roocode.com/" },
  { rank: 3, name: "Kilo Code", description: "AI coding agent for VS Code", tokens: "10.2B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kilocode.ai/&size=256", url: "https://kilocode.ai/" },
  { rank: 4, name: "liteLLM", description: "Open-source library to simplify LLM calls", tokens: "6.17B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://litellm.ai/&size=256", url: "https://litellm.ai/" },
  { rank: 5, name: "SillyTavern", description: "LLM frontend for power users", tokens: "5.5B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://sillytavern.app/&size=256", url: "https://sillytavern.app/" },
  { rank: 6, name: "Chub AI", description: "GenAI for everyone", tokens: "4.13B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://chub.ai/&size=256", url: "https://chub.ai/" },
  { rank: 7, name: "HammerAI", description: "Chat with AI characters for free", tokens: "2.02B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.hammerai.com/&size=256", url: "https://www.hammerai.com/" },
  { rank: 8, name: "OpenRouter: Chatroom", description: "Chat with multiple LLMs at once", tokens: "1.5B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openrouter.ai/chat&size=256", url: "https://openrouter.ai/" },
  { rank: 9, name: "Infinite Worlds", description: "Build your own adventures, share them with friends", tokens: "1.43B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://infiniteworlds.app/&size=256", url: "https://infiniteworlds.app/" },
  { rank: 10, name: "shapes inc", description: "General purpose social agents", tokens: "1.05B", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://shapes.inc/&size=256", url: "https://shapes.inc/" }
];

const topApps2 = [
  { rank: 11, name: "Quack", description: "Design and interact with characters", tokens: "996M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://quack.im/&size=256", url: "https://quack.im/" },
  { rank: 12, name: "RolePlai - Ai Chat", description: null, tokens: "917M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://roleplai.app/&size=256", url: "https://roleplai.app/", isNew: true },
  { rank: 13, name: "Kortix AI", description: null, tokens: "833M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://kortix.ai/&size=256", url: "https://kortix.ai/", isNew: true },
  { rank: 14, name: "Caveduck", description: "AI character chat", tokens: "813M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.caveduck.io/&size=256", url: "https://www.caveduck.io/" },
  { rank: 15, name: "Open WebUI", description: "Extensible, self-hosted AI interface", tokens: "700M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://openwebui.com/&size=256", url: "https://openwebui.com/" },
  { rank: 16, name: "Jupi", description: "Roleplay & fantasy chat", tokens: "632M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.jupi.chat/&size=256", url: "https://www.jupi.chat/" },
  { rank: 17, name: "Khui AI", description: null, tokens: "609M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.khuiai.com/&size=256", url: "https://www.khuiai.com/", isNew: true },
  { rank: 18, name: "Linkd", description: null, tokens: "595M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://linkd.inc/&size=256", url: "https://linkd.inc/", isNew: true },
  { rank: 19, name: "Aider", description: "AI pair programming in your terminal", tokens: "580M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://aider.chat/&size=256", url: "https://aider.chat/" },
  { rank: 20, name: "novelcrafter", description: "Your personal novel writing toolbox. Plan, write and tinker with your story.", tokens: "580M", icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://novelcrafter.com/&size=256", url: "https://novelcrafter.com/" }
];

export function TopApps() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("Today");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-slate-9" />
            <h3 className="text-md font-medium text-slate-11">Top Apps</h3>
          </div>
          <p className="text-xs font-medium text-slate-11 hidden md:block">
            Largest public apps{" "}
            <a href="#" className="text-primary hover:underline">
              opting into
            </a>{" "}
            usage tracking on OpenRouter
          </p>
        </div>
        
        <div className="group relative">
          <Button
            variant="outline"
            size="sm"
            className="border rounded-full text-sm pl-4 pr-2"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedTimeFrame}
            <ChevronDown className="size-4 ml-1" />
          </Button>
          
          {dropdownOpen && (
            <div className="absolute mt-2 w-auto rounded-md shadow-slate-2 transition-opacity z-50 opacity-100 flex flex-col gap-1 p-1 right-0 overflow-visible text-sm md:text-xs bg-background shadow-lg border border-slate-6">
              {timeFrames.map((timeFrame) => (
                <button
                  key={timeFrame}
                  type="button"
                  className="whitespace-nowrap rounded w-full px-4 py-2 pr-8 text-left focus:outline-none text-foreground hover:text-slate-12 bg-background hover:bg-slate-4 disabled:bg-slate-6 disabled:pointer-events-none text-sm"
                  onClick={() => {
                    setSelectedTimeFrame(timeFrame);
                    setDropdownOpen(false);
                  }}
                >
                  {timeFrame}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="transition-opacity grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
        <div className="flex flex-col space-y-5">
          {topApps.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg">
              <div className="col-span-1 text-left text-slate-11">{app.rank}.</div>
              <div className="col-span-1">
                <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                  <div className="overflow-hidden rounded size-5">
                    <img 
                      src={app.icon} 
                      alt={`${app.name} favicon`}
                      className="h-full w-full object-cover"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-6 pl-6 text-left">
                <a 
                  className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer"
                  href={app.url}
                >
                  {app.name}
                  <ChevronRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="truncate text-xs text-slate-9">{app.description}</div>
              </div>
              <div className="col-span-4 text-right">
                <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                <span className="text-xs text-slate-9 ml-1">tokens</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-5">
          {topApps2.map((app) => (
            <div key={app.rank} className="grid grid-cols-12 items-center rounded-lg">
              <div className="col-span-1 text-left text-slate-11">{app.rank}.</div>
              <div className="col-span-1">
                <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
                  <div className="overflow-hidden rounded size-5">
                    <img 
                      src={app.icon} 
                      alt={`${app.name} favicon`}
                      className="h-full w-full object-cover"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-6 pl-6 text-left">
                <a 
                  className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer"
                  href={app.url}
                >
                  {app.name}
                  <ChevronRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="truncate text-xs text-slate-9">
                  {app.description ? app.description : (
                    <span className="text-primary">new</span>
                  )}
                </div>
              </div>
              <div className="col-span-4 text-right">
                <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
                <span className="text-xs text-slate-9 ml-1">tokens</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}