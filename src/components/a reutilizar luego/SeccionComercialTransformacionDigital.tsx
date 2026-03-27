type SeccionComercialTransformacionDigitalProps = {
  href?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const painPoints = [
  "Mucho Excel y poca claridad",
  "Procesos manuales que quitan tiempo",
  "Poca visibilidad de clientes, ventas o tareas",
];

const serviceList = [
  "Consultoría de soluciones digitales",
  "Páginas web",
  "CRM",
  "Sistema de gestión personalizado",
  "Mejora de procesos",
];

export default function SeccionComercialTransformacionDigital({
  href = "/transformacion-digital",
  imageUrl,
  imageAlt = "Asesoría de transformación digital para negocios",
}: SeccionComercialTransformacionDigitalProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f2ea] py-14 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute left-[-80px] top-[-40px] h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />
          <div className="absolute right-[-60px] bottom-[-20px] h-72 w-72 rounded-full bg-amber-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-[0_16px_42px_rgba(28,25,23,0.06)]">
            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative px-5 pb-8 pt-7 md:px-8 md:pb-10 md:pt-9 lg:px-10 lg:py-12">
                <div className="soft-rise max-w-3xl">
                  <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-800">
                    Transformación digital
                  </span>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-stone-900 md:text-5xl">
                    Haz que tu negocio trabaje con más orden, más control y
                    menos complicaciones.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
                    Te ayudamos a mejorar la forma en que gestionas tu negocio
                    con soluciones digitales claras y prácticas, pensadas para
                    emprendedores, microempresas y pequeñas empresas que quieren
                    avanzar sin enredarse con la tecnología.
                  </p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {painPoints.map((point, index) => (
                      <div
                        key={point}
                        className="soft-rise rounded-[22px] border border-stone-200 bg-stone-50 px-4 py-4"
                        style={{ animationDelay: `${(index + 1) * 100}ms` }}
                      >
                        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                          Problema común
                        </div>
                        <p className="mt-2 text-sm leading-6 text-stone-700">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={href}
                      className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#1f5f87] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#184b6c]"
                    >
                      Ver cómo podemos ayudarte
                    </a>

                    <a
                      href="#contacto"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-400"
                    >
                      Quiero una reunión
                    </a>
                  </div>
                </div>

                <div
                  className="soft-rise mt-8 border-t border-stone-200 pt-5"
                  style={{ animationDelay: "260ms" }}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                    Soluciones que podemos conversar contigo
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {serviceList.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center rounded-full border border-stone-200 bg-[#fcfaf7] px-3 py-2 text-sm text-stone-700"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative border-t border-stone-200 bg-[linear-gradient(180deg,#eef6fb_0%,#fbfaf8_100%)] lg:border-l lg:border-t-0">
                <div className="h-full px-5 pb-6 pt-5 md:px-8 md:pb-8 md:pt-7 lg:px-8 lg:py-8">
                  <div className="soft-rise overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="h-[260px] w-full object-cover md:h-[320px] lg:h-[360px]"
                      />
                    ) : (
                      <div className="flex h-[260px] items-center justify-center bg-[linear-gradient(135deg,#edf6fb_0%,#fff9f2_100%)] p-6 text-center md:h-[320px] lg:h-[360px]">
                        <div>
                          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-sky-800">
                            <MeetingIcon />
                          </div>
                          <div className="mt-4 text-base font-semibold text-stone-900">
                            Espacio recomendado para una imagen real
                          </div>
                          <p className="mt-2 max-w-sm text-sm leading-6 text-stone-600">
                            Aquí queda muy bien una foto de asesoría con un
                            cliente, revisión de procesos o acompañamiento con
                            laptop y documentos reales.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    className="soft-rise mt-4 rounded-[24px] bg-white/80 p-4 backdrop-blur"
                    style={{ animationDelay: "160ms" }}
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-800">
                      Mensaje directo
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      La idea no es llenarte de herramientas. La idea es
                      ayudarte a resolver mejor lo que hoy te quita tiempo,
                      orden o control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <style>{`
        @keyframes softRise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .soft-rise {
          opacity: 0;
          animation: softRise 0.75s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .soft-rise {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}

function MeetingIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M8 9h8" />
    </svg>
  );
}
