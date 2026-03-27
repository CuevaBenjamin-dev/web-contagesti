type SeccionComercialContabilidadProps = {
  href?: string;
};

const segmentos = [
  {
    nombre: "Emprendedores",
    detalle: "Ordena tu negocio desde el inicio y evita crecer en desorden.",
  },
  {
    nombre: "Pequeñas empresas",
    detalle:
      "Controla mejor tu operación con una contabilidad más clara y útil.",
  },
  {
    nombre: "Medianas empresas",
    detalle: "Fortalece tu estructura contable para decidir con más seguridad.",
  },
];

const beneficios = [
  "Más orden administrativo y documental",
  "Más claridad para tomar decisiones",
  "Acompañamiento contable según tu etapa",
];

export default function SeccionComercialContabilidad({
  href = "/contabilidad",
}: SeccionComercialContabilidadProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)] md:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-neutral-100 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-neutral-100 blur-3xl" />
            </div>

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="reveal-up">
                <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-600">
                  Contabilidad
                </span>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
                  Soluciones contables para emprendedores, pequeñas empresas y
                  medianas empresas.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
                  Ordena tu información, mejora el control de tu negocio y toma
                  decisiones con una contabilidad más clara, cercana y adaptada
                  a la etapa en la que hoy te encuentras.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {beneficios.map((item, index) => (
                    <div
                      key={item}
                      className={`reveal-up delay-${index + 1} inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm`}
                    >
                      <span className="h-2 w-2 rounded-full bg-neutral-900" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={href}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
                  >
                    Ver servicio completo
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400"
                  >
                    Solicitar asesoría
                  </a>
                </div>
              </div>

              <div className="reveal-up delay-2">
                <div className="rounded-[28px] border border-neutral-200 bg-white p-4 shadow-sm md:p-5">
                  <div className="flex items-center justify-between gap-3 border-b border-neutral-200 pb-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                        A quién ayudamos
                      </div>
                      <div className="mt-1 text-xl font-semibold tracking-tight text-neutral-900 md:text-2xl">
                        Un servicio adaptado a cada etapa del negocio
                      </div>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-50 text-neutral-800">
                      <BriefcaseIcon />
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {segmentos.map((segmento, index) => (
                      <div
                        key={segmento.nombre}
                        className={`reveal-up delay-${index + 1} group rounded-[22px] border border-neutral-200 bg-neutral-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-white hover:shadow-sm`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-base font-semibold text-neutral-900">
                              {segmento.nombre}
                            </div>
                            <p className="mt-2 text-sm leading-6 text-neutral-600">
                              {segmento.detalle}
                            </p>
                          </div>

                          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-neutral-300 bg-white text-neutral-700 transition-all duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                            <ArrowUpRightIcon />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[24px] border border-dashed border-neutral-300 bg-neutral-50 p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                      Enfoque
                    </div>
                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      No solo se trata de cumplir, sino de darle a tu negocio
                      más orden, más control y una base más sólida para crecer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reveal-up {
          opacity: 0;
          animation: revealUp 0.7s ease-out forwards;
        }

        .delay-1 {
          animation-delay: 0.08s;
        }

        .delay-2 {
          animation-delay: 0.16s;
        }

        .delay-3 {
          animation-delay: 0.24s;
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal-up,
          .delay-1,
          .delay-2,
          .delay-3 {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function BriefcaseIcon() {
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
      <path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <path d="M3 9h18" />
      <path d="M5 21h14a2 2 0 0 0 2-2V9H3v10a2 2 0 0 0 2 2Z" />
    </svg>
  );
}
