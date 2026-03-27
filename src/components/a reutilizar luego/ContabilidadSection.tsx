export default function ContabilidadSection() {
  const segments = [
    {
      name: "Emprendedores",
      eyebrow: "Etapa inicial",
      description:
        "Organiza tu negocio desde el inicio con una contabilidad clara, práctica y fácil de entender para que tomes decisiones con más seguridad.",
      points: [
        "Orden básico de ingresos, egresos y documentos",
        "Guía clara para cumplir sin complicarte",
        "Acompañamiento cercano en tus primeras etapas",
      ],
      highlight:
        "Ideal si estás creciendo y quieres evitar desorden desde el comienzo.",
    },
    {
      name: "Pequeñas empresas",
      eyebrow: "Operación en marcha",
      description:
        "Convierte tu contabilidad en una herramienta útil para controlar mejor tu operación, reducir desorden y tener más claridad sobre tu negocio.",
      points: [
        "Mayor control sobre movimientos y obligaciones",
        "Información más útil para revisar tu desempeño",
        "Seguimiento constante para mantener el orden",
      ],
      highlight:
        "Ideal si ya operas de forma constante y necesitas más control administrativo.",
    },
    {
      name: "Medianas empresas",
      eyebrow: "Más estructura",
      description:
        "Fortalece la base contable de tu empresa con una gestión más sólida, ordenada y orientada a respaldar decisiones con mayor criterio.",
      points: [
        "Estructura contable más robusta y consistente",
        "Más claridad para evaluar situación y crecimiento",
        "Acompañamiento con visión más estratégica",
      ],
      highlight:
        "Ideal si tu empresa ya maneja una operación más amplia y necesita mayor solidez.",
    },
  ];

  const benefits = [
    "Contabilidad ordenada y adaptada a la etapa real de tu negocio",
    "Acompañamiento claro para cumplir y decidir mejor",
    "Más control financiero, administrativo y documental",
    "Menos desorden, más claridad para crecer con seguridad",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-neutral-200 bg-neutral-50/70 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
              <div className="fade-up">
                <span className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-600">
                  Servicio de contabilidad
                </span>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
                  Contabilidad pensada para emprendedores, pequeñas empresas y
                  medianas empresas.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
                  Ayudamos a ordenar, controlar y fortalecer la gestión contable
                  de tu negocio con un servicio claro, cercano y estratégico,
                  para que no solo cumplas, sino que también tengas información
                  más útil para tomar mejores decisiones.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {benefits.map((item, index) => (
                    <div
                      key={item}
                      className={`fade-up rounded-[24px] border border-neutral-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-sm delay-${index + 1}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-50 text-neutral-800">
                          <CheckIcon />
                        </div>
                        <p className="text-sm leading-6 text-neutral-700">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contacto"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
                  >
                    Solicitar asesoría contable
                  </a>

                  <a
                    href="#contacto"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-400"
                  >
                    Quiero evaluar mi caso
                  </a>
                </div>
              </div>

              <div className="fade-up delay-2">
                <div className="rounded-[28px] border border-neutral-200 bg-white p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                        Qué obtiene tu negocio
                      </div>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                        Más orden, más control y más claridad.
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-50 text-neutral-800">
                      <PulseIcon />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      ["Documentación y registros", "Más orden"],
                      ["Cumplimiento y seguimiento", "Más control"],
                      ["Lectura del negocio", "Más claridad"],
                    ].map(([label, status], index) => (
                      <div
                        key={label}
                        className={`fade-up rounded-2xl border border-neutral-200 bg-neutral-50 p-4 delay-${index + 2}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-medium text-neutral-800">
                            {label}
                          </span>
                          <span className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-[11px] font-semibold text-neutral-600">
                            {status}
                          </span>
                        </div>

                        <div className="mt-3 h-2 rounded-full bg-white">
                          <div
                            className={`h-2 rounded-full bg-neutral-900 ${
                              index === 0
                                ? "w-[78%]"
                                : index === 1
                                  ? "w-[84%]"
                                  : "w-[72%]"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[24px] border border-neutral-200 bg-neutral-50 p-4">
                    <div className="text-sm font-semibold text-neutral-900">
                      Mensaje comercial
                    </div>
                    <p className="mt-2 text-sm leading-7 text-neutral-600">
                      No se trata solo de cumplir con la contabilidad. Se trata
                      de darle más orden a tu negocio, entender mejor tus
                      números y crecer con una base más segura.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-3">
              {segments.map((segment, index) => (
                <article
                  key={segment.name}
                  className={`fade-up delay-${index + 1} group rounded-[28px] border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md md:p-6`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                        {segment.eyebrow}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900">
                        {segment.name}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-50 text-neutral-800 transition-all duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                      <ArrowUpRightIcon />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    {segment.description}
                  </p>

                  <div className="mt-5 space-y-3">
                    {segment.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-neutral-900" />
                          <p className="text-sm leading-6 text-neutral-700">
                            {point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[22px] border border-dashed border-neutral-300 bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                      Ideal para
                    </div>
                    <p className="mt-2 text-sm leading-6 text-neutral-700">
                      {segment.highlight}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="fade-up delay-3 mt-8 rounded-[30px] bg-neutral-900 p-6 text-white md:mt-10 md:p-8">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
                    Da el siguiente paso
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    Ordena la contabilidad de tu negocio y toma decisiones con
                    más confianza.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-300 md:text-base">
                    Si eres emprendedor, pequeña empresa o mediana empresa,
                    podemos ayudarte a estructurar mejor tu gestión contable
                    para que tu negocio avance con más orden y seguridad.
                  </p>
                </div>

                <a
                  href="#contacto"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Escríbenos y revisamos tu caso
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 0.7s ease-out forwards;
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

        .delay-4 {
          animation-delay: 0.32s;
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-up,
          .delay-1,
          .delay-2,
          .delay-3,
          .delay-4 {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}

function CheckIcon() {
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
      <path d="M5 12.5l4.2 4.2L19 7.5" />
    </svg>
  );
}

function PulseIcon() {
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
      <path d="M3 12h4l2-4 4 8 2-4h6" />
    </svg>
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
