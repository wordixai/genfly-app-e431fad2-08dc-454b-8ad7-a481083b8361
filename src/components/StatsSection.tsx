const stats = [
  { value: "8.4T", label: "Monthly Tokens", link: "/rankings" },
  { value: "2.5M+", label: "Global Users" },
  { value: "60+", label: "Active Providers", link: "/models" },
  { value: "400+", label: "Models", link: "/models", highlight: true }
];

export function StatsSection() {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="group/card rounded-xl transition-all duration-200 bg-card hover:bg-card/80 text-foreground shadow-inner hover:scale-110 hover:shadow-slate-6">
            {stat.link ? (
              <a href={stat.link}>
                <div className="p-4 md:p-6">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <p className={`text-3xl md:text-4xl font-bold ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </a>
            ) : (
              <div className="p-4 md:p-6">
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <p className={`text-3xl md:text-4xl font-bold ${stat.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}