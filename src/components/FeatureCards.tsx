import { ExternalLink } from "lucide-react";
import { FloatingIcon } from "./FloatingIcon";

const providerIcons = [
  { src: "https://openrouter.ai/images/icons/Microsoft.svg", alt: "Microsoft" },
  { src: "https://openrouter.ai/images/icons/Perplexity.svg", alt: "Perplexity" },
  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://minimaxi.com/&size=256", alt: "Minimax" },
  { src: "https://openrouter.ai/images/icons/Qwen.png", alt: "Qwen" },
  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://allenai.org/&size=256", alt: "AllenAI" },
  { src: "https://openrouter.ai/images/icons/DeepSeek.png", alt: "DeepSeek" },
  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://huggingface.co/&size=256", alt: "HuggingFace" },
  { src: "https://openrouter.ai/images/icons/Cohere.png", alt: "Cohere" },
  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://ai.meta.com/&size=256", alt: "Meta" },
  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nvidia.com/&size=256", alt: "NVIDIA" },
  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://nousresearch.com/&size=256", alt: "Nous Research" },
  { src: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://x.ai/&size=256", alt: "X.AI" },
  { src: "https://openrouter.ai/images/icons/Anthropic.svg", alt: "Anthropic" },
  { src: "https://openrouter.ai/images/icons/OpenAI.svg", alt: "OpenAI" },
  { src: "https://openrouter.ai/images/icons/GoogleGemini.svg", alt: "Google" },
];

const features = [
  {
    title: "One API for Any Model",
    description: "Access all major models through a single, unified interface. OpenAI SDK works out of the box.",
    link: "/models",
    linkText: "Browse all",
    visual: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-1 via-transparent to-slate-1 opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-1 via-transparent to-slate-1 opacity-30"></div>
        </div>
        <div className="absolute inset-[1rem] grid grid-cols-5 gap-x-3 gap-y-1 scale-105 z-10">
          {providerIcons.map((icon, index) => (
            <FloatingIcon 
              key={index} 
              src={icon.src} 
              alt={icon.alt} 
              index={index}
              className={index >= 5 && index < 10 ? "translate-x-9" : index >= 15 && index < 20 ? "translate-x-9" : ""}
            />
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Higher Availability", 
    description: "Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.",
    link: "/docs/features/uptime-optimization",
    linkText: "Learn more",
    visual: (
      <div className="h-full flex items-center justify-center">
        <div className="relative w-full max-w-52 flex flex-col items-center gap-y-2">
          <div className="bg-muted px-3 py-1 rounded-lg text-xs text-foreground">
            anthropic/claude-3.7-sonnet
          </div>
          <svg width="100%" height="70" viewBox="0 0 200 70" fill="none" className="text-muted-foreground/60">
            <title>Model routing visualization</title>
            <path d="M95 0 C100 40, 20 20, 10 65" stroke="currentColor" strokeWidth="0.75" />
            <path d="M100 0 C100 20, 100 20, 100 65" stroke="currentColor" strokeWidth="0.75" />
            <path d="M105 0 C100 40, 180 20, 190 65" stroke="currentColor" strokeWidth="0.75" />
          </svg>
          <div className="flex justify-between w-full">
            <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
              <img src="https://openrouter.ai/images/icons/GoogleGemini.svg" alt="Google" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
              <img src="https://openrouter.ai/images/icons/Anthropic.svg" alt="Anthropic" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5">
              <img src="https://openrouter.ai/images/icons/Bedrock.svg" alt="Amazon" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Price and Performance",
    description: "Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between your users and their inference.",
    link: "/docs/features/provider-routing#provider-sorting", 
    linkText: "Learn more",
    visual: (
      <div className="relative flex h-full items-center justify-center">
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-1 to-slate-1 via-transparent opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-1 to-slate-1 via-transparent opacity-20"></div>
        </div>
        <div className="h-full w-full flex items-center justify-center bg-muted/20 rounded">
          <div className="text-muted-foreground text-sm">Performance Graph</div>
        </div>
      </div>
    )
  },
  {
    title: "Custom Data Policies",
    description: "Protect your organization with fine grained data policies. Ensure prompts only go to the models and providers you trust.",
    link: "/docs/features/privacy-and-logging",
    linkText: "View docs",
    visual: (
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center w-full max-w-52">
          <div className="flex justify-between items-end w-full px-[45px] -mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-muted-foreground">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <div className="w-7 h-7 rounded-full bg-green-3 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-9">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
              </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 text-muted-foreground">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.3" stroke="currentColor" className="size-32 text-muted-foreground/60">
            <title>Data policy visualization</title>
            <path d="M12 2.7A12 12 0 0 1 3.6 6 12 12 0 0 0 3 9.7a12 12 0 0 0 9 11.7A12 12 0 0 0 20.4 6h-.1A12 12 0 0 1 12 2.7Z" />
          </svg>
        </div>
      </div>
    )
  }
];

export function FeatureCards() {
  return (
    <div className="space-y-4 md:space-y-8">
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
        {features.map((feature, index) => (
          <a key={index} className="h-full" href={feature.link}>
            <div className="group/card text-card-foreground rounded-xl transition-all duration-200 bg-card hover:border-slate-7 hover:text-slate-12 border shadow-sm hover:shadow-lg flex flex-col h-full justify-between overflow-hidden">
              <div className="bg-background shadow-none transition-transform group-hover/card:scale-105 group-hover/card:-translate-y-1 relative h-48 overflow-hidden rounded-t-xl border-b p-2 flex-shrink-0">
                {feature.visual}
              </div>
              <div className="flex flex-col gap-2 px-6 py-4 h-full">
                <div className="flex flex-col gap-2 h-full">
                  <h3 className="group-hover/card:text-slate-12 transition-colors duration-200 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
                <span className="text-primary group-hover/card:underline">
                  {feature.linkText}
                  <ExternalLink className="ml-1 inline-block w-4" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}