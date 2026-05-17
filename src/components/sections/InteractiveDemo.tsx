import { Zap, Signal, Wifi, Battery, Droplets, Power, MapPin } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export function InteractiveDemo() {
  const { t } = useTranslation();
  const [pivots, setPivots] = useState([
    { id: 1, name: "Pivot 1", color: "var(--brand-mint)", speed: 50, active: true, hum: "68%", left: '25%', top: '30%', rot: 75 },
    { id: 2, name: "Pivot 2", color: "var(--brand-mint)", speed: 80, active: true, hum: "45%", left: '60%', top: '45%', rot: 217 },
    { id: 3, name: "Pivot 3", color: "var(--brand-mint)", speed: 90, active: true, hum: "82%", left: '35%', top: '75%', rot: 264 }
  ]);
  
  const pivotsRef = useRef(pivots);
  pivotsRef.current = pivots;

  const pivotElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lastTimeRef = useRef(performance.now());
  const anglesRef = useRef([75, 217, 264]);

  useEffect(() => {
    let request: number;
    const animate = (time: number) => {
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      anglesRef.current = anglesRef.current.map((angle, i) => {
        const p = pivotsRef.current[i];
        const degPerSec = p.active ? (p.speed * 1.5) : 0; // Scale speed to rotation rate visually
        return (angle + degPerSec * dt) % 360;
      });

      anglesRef.current.forEach((angle, i) => {
        const el = pivotElementsRef.current[i];
        if (el) {
          el.style.transform = `rotate(${angle}deg)`;
        }
      });

      request = requestAnimationFrame(animate);
    };
    request = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(request);
  }, []);

  const handleSpeedChange = (index: number, newSpeed: number) => {
    setPivots(current => {
      const updated = [...current];
      updated[index] = { ...updated[index], speed: newSpeed };
      return updated;
    });
  };

  const handleToggleActive = (index: number) => {
    setPivots(current => {
      const updated = [...current];
      updated[index] = { ...updated[index], active: !updated[index].active };
      return updated;
    });
  };

  return (
    <section className="py-24 bg-background overflow-hidden relative" id="interactive-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 border border-[color:var(--brand-mint)]/30 rounded-full text-[color:var(--brand-mint)] font-semibold text-xs mb-4 bg-[color:var(--brand-mint)]/5 tracking-wide">
            <Zap className="w-4 h-4 mr-2" />
            {t("demo.tag")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t("demo.title")}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("demo.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-xs animate-fade-up">
              <div className="bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] p-1">
                  <div className="bg-white rounded-[2.2rem] overflow-hidden">
                    <div className="relative bg-black h-8 rounded-b-2xl flex items-center justify-center pt-2">
                      <div className="w-24 h-4 bg-black rounded-full" />
                    </div>
                    
                    <div className="bg-gray-50 px-6 py-2 flex justify-between items-center text-xs text-black">
                      <span className="font-semibold">9:41</span>
                      <div className="flex items-center space-x-1 text-black">
                        <Signal className="w-3 h-3" />
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-4 h-3 flex-shrink-0" />
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-primary text-primary-foreground">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/20">
                          <Droplets className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-white leading-tight">PivotMaster</h3>
                          <p className="text-[10px] text-white/80">{t("demo.pivot_smart")}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 space-y-4 h-[480px] overflow-y-auto bg-gray-50">
                      {pivots.map((pivot, i) => (
                        <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: pivot.color }} />
                              <span className="font-semibold text-gray-900 text-sm">{pivot.name}</span>
                            </div>
                            <button 
                              onClick={() => handleToggleActive(i)}
                              className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors bg-gray-200" 
                              style={pivot.active ? { backgroundColor: pivot.color } : {}}
                            >
                              <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform ${pivot.active ? 'translate-x-[24px]' : 'translate-x-[2px]'}`} />
                            </button>
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-3">
                            <div className={`w-2 h-2 rounded-full ${pivot.active ? '' : 'bg-gray-300'}`} style={pivot.active ? { backgroundColor: pivot.color } : {}} />
                            <span className="text-xs text-gray-600">{pivot.active ? t('demo.active') : t('demo.stopped')} - {pivot.speed}%</span>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-medium text-gray-700">{t('demo.speed')}</span>
                              <span className="text-xs text-gray-500">{pivot.speed}%</span>
                            </div>
                            <div className="relative">
                              <input 
                                min="0" 
                                max="100" 
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                                type="range" 
                                value={pivot.speed}
                                onChange={(e) => handleSpeedChange(i, parseInt(e.target.value))}
                                style={{ background: `linear-gradient(to right, ${pivot.color} 0%, ${pivot.color} ${pivot.speed}%, rgb(229, 231, 235) ${pivot.speed}%, rgb(229, 231, 235) 100%)` }} 
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                            <div className="flex items-center space-x-2">
                              <Droplets className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-700">{t('demo.humidity')}</span>
                            </div>
                            <span className="text-xs font-medium text-gray-900">{pivot.hum}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Field Map */}
          <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full h-96 bg-[color:var(--brand-mint)]/5 rounded-2xl border-2 border-[color:var(--brand-mint)]/20 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="fieldGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" className="text-[color:var(--brand-mint)]" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#fieldGrid)" />
                </svg>
              </div>

              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm z-10 border border-border">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[color:var(--brand-mint)]" />
                  <span className="text-sm font-medium text-foreground">{t("demo.field")}</span>
                </div>
              </div>
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
                <g><line x1="0%" y1="50%" x2="25%" y2="30%" stroke="currentColor" className="text-muted-foreground" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" pathLength="1" /></g>
                <g><line x1="0%" y1="50%" x2="60%" y2="45%" stroke="currentColor" className="text-muted-foreground" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" pathLength="1" /></g>
                <g><line x1="0%" y1="50%" x2="35%" y2="75%" stroke="currentColor" className="text-muted-foreground" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" pathLength="1" /></g>
              </svg>

              {pivots.map((p, i) => (
                <div key={i} className="absolute z-10" style={{ left: p.left, top: p.top }}>
                  <div className="absolute rounded-full border-2 border-dashed" style={{ width: '100px', height: '100px', left: '-50px', top: '-50px', borderColor: p.color, backgroundColor: p.color, opacity: 0.15 }} />
                  <div 
                    ref={(el) => { pivotElementsRef.current[i] = el; }}
                    className="absolute" 
                    style={{ width: '50px', height: '2px', backgroundColor: p.color, left: '0px', top: '-1px', transformOrigin: '0px 1px', transform: `rotate(${p.rot}deg)` }} 
                  />
                  <div className="absolute w-6 h-6 rounded-full border-2 border-white shadow-lg z-20 flex" style={{ backgroundColor: p.color, left: '-12px', top: '-12px' }}>
                    <div className="m-auto w-4 h-4 rounded-full bg-white flex items-center justify-center">
                      <Power className="w-2 h-2" style={{ color: p.color }} />
                    </div>
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm border border-border mt-1">
                    <span className="text-[10px] font-semibold text-foreground block whitespace-nowrap">Pivot {p.id}</span>
                    <div className="text-[10px] text-muted-foreground text-center">{p.speed}%</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {pivots.map((p, i) => (
                <div key={i} className="bg-background rounded-xl p-3 shadow-sm border border-border">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: p.color }} />
                    <span className="text-xs font-semibold text-foreground">Pivot {p.id}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <div className="space-y-1">
                      <div className="flex justify-between"><span>{t('demo.speed')}:</span><span className="font-medium text-foreground">{p.speed}%</span></div>
                      <div className="flex justify-between"><span>{t('demo.humidity')}:</span><span className="font-medium text-foreground">{p.hum}</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 mx-auto max-w-fit">
              <div className="inline-flex items-center space-x-3 bg-background rounded-full px-6 py-3 shadow-sm border border-border">
                <div className="w-2 h-2 bg-[color:var(--brand-mint)] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground">{t("demo.connection")}</span>
                <div className="flex items-center space-x-1 ml-4 border-l border-border pl-4">
                  <Signal className="w-4 h-4 text-[color:var(--brand-mint)]" />
                  <span className="text-xs text-muted-foreground font-semibold">4G</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
