type CapacitacionesSectionProps = {
  imageUrl?: string;
  imageAlt?: string;
};

const formatos = [
  "Sesiones presenciales o virtuales",
  "Capacitaciones para grupos o de forma personalizada",
  "Contenidos adaptados al objetivo del cliente",
];

const proceso = [
  {
    step: "01",
    title: "Entendemos tu necesidad",
    text: "Revisamos qué necesita fortalecer el emprendedor o el equipo para que la capacitación tenga sentido real.",
  },
  {
    step: "02",
    title: "Diseñamos la capacitación",
    text: "Organizamos los temas, el enfoque y la dinámica según el nivel, el contexto y el objetivo buscado.",
  },
  {
    step: "03",
    title: "Llevamos el aprendizaje a la práctica",
    text: "La idea es que el contenido no se quede en teoría, sino que pueda aplicarse de forma útil y concreta.",
  },
];

const bloques = [
  {
    audience: "Emprendedores",
    summary:
      "Capacitaciones pensadas para quienes necesitan ordenar mejor su negocio, vender con más claridad, tomar decisiones con más criterio y crecer con una base más sólida.",
    benefits: [
      "Aprendizaje claro y fácil de aterrizar",
      "Mayor criterio para gestionar el negocio",
      "Contenidos útiles para ventas, organización y mejora",
      "Más seguridad para decidir y avanzar",
    ],
    ideal:
      "Ideal para emprendedores que están iniciando, creciendo o reordenando su negocio y necesitan herramientas más prácticas.",
    cta: "Quiero capacitarme como emprendedor",
  },
  {
    audience: "Equipos",
    summary:
      "Capacitaciones orientadas a fortalecer habilidades, alinear criterios y mejorar la forma en que las personas trabajan, se comunican y ejecutan dentro de la empresa.",
    benefits: [
      "Mejor coordinación y criterios compartidos",
      "Desarrollo de habilidades aplicadas al trabajo",
      "Capacitación útil para el desempeño del equipo",
      "Mayor claridad para ejecutar mejor",
    ],
    ideal:
      "Ideal para empresas que quieren fortalecer capacidades, mejorar procesos internos o impulsar una cultura de aprendizaje útil.",
    cta: "Quiero capacitar a mi equipo",
  },
];

export default function CapacitacionesSection({
  imageUrl,
  imageAlt = "Capacitación para emprendedores y equipos",
}: CapacitacionesSectionProps) {
  return (
    <>
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[34px] border border-stone-200 bg-[#fffdf9] shadow-[0_14px_40px_rgba(28,25,23,0.05)]">
            <div className="border-b border-stone-200 bg-[linear-gradient(180deg,#fff7ee_0%,#fffdf9_100%)] p-5 md:p-8 lg:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="soft-rise">
                  <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-800">
                    Capacitaciones · Sección informativa
                  </span>

                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-stone-900 md:text-5xl">
                    Capacitaciones con enfoque práctico para emprendedores y
                    equipos.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
                    Profundizamos la propuesta de capacitación con una
                    estructura clara, cercana y comercial, pensada para que el
                    cliente entienda rápido qué ofrecemos, para quién es y cómo
                    puede ayudarle en la práctica.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {formatos.map((item, index) => (
                      <div
                        key={item}
                        className="soft-rise rounded-[22px] border border-stone-200 bg-white p-4"
                        style={{ animationDelay: `${(index + 1) * 110}ms` }}
                      >
                        <div className="text-sm leading-6 text-stone-700">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="soft-rise lg:pl-2"
                  style={{ animationDelay: "140ms" }}
                >
                  <div className="rounded-[28px] border border-stone-200 bg-white p-4">
                    <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-stone-50">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={imageAlt}
                          className="h-[260px] w-full object-cover md:h-[340px]"
                        />
                      ) : (
                        <div className="flex h-[260px] items-center justify-center bg-[linear-gradient(135deg,#f8eee1_0%,#fffaf5_100%)] p-6 text-center md:h-[340px]">
                          <div>
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-800">
                              <BoardIcon />
                            </div>
                            <div className="mt-4 text-base font-semibold text-stone-900">
                              Espacio sugerido para una imagen real
                            </div>
                            <p className="mt-2 max-w-sm text-sm leading-6 text-stone-600">
                              Aquí encaja muy bien una foto de facilitación
                              real, una reunión de trabajo o una capacitación
                              con personas peruanas en contexto de negocio.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 rounded-[22px] border border-dashed border-orange-200 bg-orange-50/60 p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-800">
                        Qué transmite esta sección
                      </div>
                      <p className="mt-2 text-sm leading-6 text-stone-700">
                        Formación clara, útil y aplicable; pensada para personas
                        y equipos que necesitan aprender sin complicarse y
                        obtener resultados concretos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 md:p-8 lg:p-10">
              <div className="soft-rise">
                <div className="max-w-3xl">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                    Cómo trabajamos
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-stone-900 md:text-3xl">
                    Un proceso simple, claro y orientado a que el aprendizaje sí
                    sirva.
                  </h3>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {proceso.map((item, index) => (
                    <div
                      key={item.step}
                      className="soft-rise rounded-[26px] border border-stone-200 bg-stone-50 p-5"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8a4b2a] text-sm font-semibold text-white">
                        {item.step}
                      </div>
                      <div className="mt-4 text-lg font-semibold text-stone-900">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {bloques.map((bloque, index) => (
                  <article
                    key={bloque.audience}
                    className="soft-rise overflow-hidden rounded-[30px] border border-stone-200 bg-white"
                    style={{ animationDelay: `${(index + 1) * 120}ms` }}
                  >
                    <div className="border-b border-stone-200 bg-[linear-gradient(180deg,#fff7ee_0%,#ffffff_100%)] p-5 md:p-6">
                      <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-800">
                        {bloque.audience}
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] text-stone-900">
                        Capacitaciones para {bloque.audience.toLowerCase()} con
                        enfoque práctico.
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-stone-600">
                        {bloque.summary}
                      </p>
                    </div>

                    <div className="p-5 md:p-6">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                        Beneficios principales
                      </div>

                      <div className="mt-4 space-y-3">
                        {bloque.benefits.map((benefit) => (
                          <div
                            key={benefit}
                            className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3"
                          >
                            <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-600" />
                            <p className="text-sm leading-6 text-stone-700">
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 rounded-[24px] border border-dashed border-stone-300 bg-[#fcfaf7] p-4">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                          Ideal para
                        </div>
                        <p className="mt-2 text-sm leading-6 text-stone-700">
                          {bloque.ideal}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <a
                          href="#contacto"
                          className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-[#8a4b2a] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#744022]"
                        >
                          {bloque.cta}
                        </a>

                        <a
                          href="#contacto"
                          className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-400"
                        >
                          Solicitar propuesta
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="soft-rise mt-8 rounded-[30px] bg-[#5c3320] p-6 text-white md:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-200/70">
                      Cierre
                    </div>
                    <h4 className="mt-2 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                      Capacitar bien también es una forma de hacer crecer el
                      negocio.
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-white/80 md:text-base">
                      Si buscas una capacitación útil, clara y bien enfocada
                      para emprendedores o equipos, podemos ayudarte a construir
                      una propuesta que sí aporte valor real.
                    </p>
                  </div>

                  <a
                    href="#contacto"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#5c3320] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Conversemos sobre tu capacitación
                  </a>
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

function BoardIcon() {
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
      <path d="M3 4h18v12H3z" />
      <path d="M7 20h10" />
      <path d="M12 16v4" />
      <path d="m8 8 2.5 2.5L16 5" />
    </svg>
  );
}
