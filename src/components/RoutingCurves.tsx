export function RoutingCurves() {
  return (
    <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
      <svg className="h-80 w-12" viewBox="-5 0 50 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Routing Curves</title>
        <g stroke="currentColor" strokeWidth="1.5">
          <path d="M2 150C12 150 15 75 25 65" className="origin-center transition-all duration-300 text-slate-6" />
          <path d="M2 160C12 160 22 160 25 160" className="origin-center transition-all duration-300 text-primary" />
          <path d="M2 170C12 170 15 255 25 255" className="origin-center transition-all duration-300 text-slate-6" />
        </g>
        <g className="text-slate-7">
          <circle cx="35" cy="60" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
          <circle cx="35" cy="160" r="6" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
          <circle cx="35" cy="260" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
        </g>
      </svg>
    </div>
  );
}