type SeccionComercialCapacitacionesProps = {
  href?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const quickPoints = [
  "Capacitaciones prácticas y fáciles de aterrizar",
  "Para emprendedores y equipos de trabajo",
  "Diseñadas para mejorar gestión, criterio y desempeño",
];

export default function SeccionComercialCapacitaciones({
  href = "/capacitaciones",
  imageUrl,
  imageAlt = "Sesión de capacitación para emprendedores y equipos",
}: SeccionComercialCapacitacionesProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f4ee] py-14 md:py-20">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 h-52 w-52 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-[0_14px_40px_rgba(28,25,23,0.06)]">
            <div className="grid items-center gap-8 p-5 md:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:p-10">
              <div className="soft-rise">
                <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-800">
                  Capacitaciones
                </span>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-stone-900 md:text-5xl">
                  Capacitaciones claras, prácticas y útiles para emprendedores y
                  equipos.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
                  Ayudamos a fortalecer conocimientos, ordenar ideas y mejorar
                  la forma de trabajar con capacitaciones diseñadas para la
                  realidad del negocio y del equipo.
                </p>

                <div className="mt-6 space-y-3">
                  {quickPoints.map((point, index) => (
                    <div
                      key={point}
                      className="soft-rise flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3"
                      style={{ animationDelay: `${(index + 1) * 110}ms` }}
                    >
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-600" />
                      <p className="text-sm leading-6 text-stone-700">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={href}
                    className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#8a4b2a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#744022]"
                  >
                    Ver más sobre las capacitaciones
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-400"
                  >
                    Solicitar información
                  </a>
                </div>
              </div>

              <div
                className="soft-rise lg:pl-2"
                style={{ animationDelay: "140ms" }}
              >
                <div className="rounded-[28px] border border-stone-200 bg-[#fcfaf7] p-4 md:p-5">
                  <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="h-[260px] w-full object-cover md:h-[320px]"
                      />
                    ) : (
                      <div className="flex h-[260px] w-full items-center justify-center bg-[linear-gradient(135deg,#f5ede4_0%,#fffaf5_100%)] p-6 text-center md:h-[320px]">
                        <div>
                          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-800">
                            <PeopleIcon />
                          </div>
                          <div className="mt-4 text-base font-semibold text-stone-900">
                            Espacio recomendado para una foto real
                          </div>
                          <p className="mt-2 max-w-sm text-sm leading-6 text-stone-600">
                            Aquí funciona muy bien una imagen de una
                            capacitación real, una reunión con emprendedores o
                            un equipo participando activamente.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-stone-200 bg-white p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                        Para emprendedores
                      </div>
                      <p className="mt-2 text-sm leading-6 text-stone-700">
                        Contenidos simples y útiles para ordenar, vender y tomar
                        mejores decisiones.
                      </p>
                    </div>

                    <div className="rounded-[22px] border border-stone-200 bg-white p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                        Para equipos
                      </div>
                      <p className="mt-2 text-sm leading-6 text-stone-700">
                        Formación para mejorar habilidades, coordinación y
                        desempeño dentro de la empresa.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[22px] border border-dashed border-orange-200 bg-orange-50/60 p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-800">
                      Mensaje clave
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      No solo enseñamos conceptos: buscamos que cada
                      capacitación le deje algo útil y aplicable al negocio o al
                      equipo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

function PeopleIcon() {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <path d="M9.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
