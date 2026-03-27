type TransformacionDigitalSectionProps = {
  imageUrl?: string;
  imageAlt?: string;
};

const introBullets = [
  "Soluciones pensadas para negocios reales",
  "Menos procesos manuales y más claridad",
  "Mejor seguimiento de clientes, tareas o ventas",
];

const serviceBands = [
  {
    title: "Consultoría de soluciones digitales",
    description:
      "Revisamos cómo funciona hoy tu negocio y te orientamos sobre qué solución digital realmente te conviene según tu etapa, tus problemas y tu forma de trabajar.",
    points: [
      "Diagnóstico claro de tu situación actual",
      "Recomendaciones simples y aterrizadas",
      "Enfoque en lo que sí te generará utilidad",
    ],
  },
  {
    title: "Desarrollo de páginas web",
    description:
      "Creamos páginas web pensadas para mostrar mejor tu negocio, generar confianza y facilitar que más personas te contacten o pidan información.",
    points: [
      "Presencia más profesional",
      "Mejor forma de mostrar tus servicios",
      "Canal digital para atraer y convencer clientes",
    ],
  },
  {
    title: "CRM",
    description:
      "Organizamos mejor tus clientes, seguimientos y oportunidades para que no pierdas ventas ni información importante en el camino.",
    points: [
      "Más orden comercial",
      "Mejor seguimiento a clientes",
      "Menos olvidos y más control",
    ],
  },
  {
    title: "Sistema de gestión personalizado",
    description:
      "Desarrollamos herramientas adaptadas a la forma en que funciona tu negocio para controlar registros, procesos o información clave de manera más ordenada.",
    points: [
      "Hecho según tu realidad",
      "Menos dependencia de hojas dispersas",
      "Más control sobre tu operación",
    ],
  },
  {
    title: "Mejora de procesos de negocio",
    description:
      "Analizamos tareas repetitivas, lentas o confusas para proponer una forma más práctica, simple y eficiente de trabajar.",
    points: [
      "Menos pasos innecesarios",
      "Más claridad en el trabajo diario",
      "Procesos más sostenibles y mejor organizados",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Escuchamos tu problema",
    text: "Primero entendemos cómo trabajas, qué te está costando tiempo o qué parte del negocio hoy sientes más desordenada.",
  },
  {
    step: "02",
    title: "Definimos la mejor salida",
    text: "Te proponemos una ruta clara: puede ser una web, un CRM, un sistema, una mejora de procesos o una combinación simple de soluciones.",
  },
  {
    step: "03",
    title: "Llevamos la idea a algo útil",
    text: "La meta es que la solución te sirva de verdad en el día a día, y no que termine siendo otra herramienta más que no usas.",
  },
];

export default function TransformacionDigitalSection({
  imageUrl,
  imageAlt = "Transformación digital para emprendedores y pequeñas empresas",
}: TransformacionDigitalSectionProps) {
  return (
    <>
      <section className="bg-[#fffdf9] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-[0_14px_40px_rgba(28,25,23,0.05)]">
            <div className="border-b border-stone-200 bg-[linear-gradient(180deg,#f1f8fc_0%,#fffdf9_100%)] px-5 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10">
              <div className="grid gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
                <div className="soft-rise">
                  <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-800">
                    Transformación digital · Sección informativa
                  </span>

                  <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-stone-900 md:text-5xl">
                    Soluciones digitales para negocios que quieren ordenarse y
                    crecer mejor.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600 md:text-base">
                    Aquí profundizamos la propuesta para que el cliente entienda
                    con claridad cómo podemos ayudarle a mejorar su forma de
                    trabajar, vender, organizar información o controlar mejor su
                    negocio con soluciones digitales útiles y cercanas.
                  </p>

                  <div className="mt-6 space-y-3">
                    {introBullets.map((bullet, index) => (
                      <div
                        key={bullet}
                        className="soft-rise flex items-start gap-3"
                        style={{ animationDelay: `${(index + 1) * 100}ms` }}
                      >
                        <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-sky-700" />
                        <p className="text-sm leading-6 text-stone-700">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="soft-rise" style={{ animationDelay: "140ms" }}>
                  <div className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-sm">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={imageAlt}
                        className="h-[260px] w-full object-cover md:h-[340px]"
                      />
                    ) : (
                      <div className="flex h-[260px] items-center justify-center bg-[linear-gradient(135deg,#edf6fb_0%,#fff9f2_100%)] p-6 text-center md:h-[340px]">
                        <div>
                          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 text-sky-800">
                            <ProcessIcon />
                          </div>
                          <div className="mt-4 text-base font-semibold text-stone-900">
                            Espacio sugerido para una imagen real
                          </div>
                          <p className="mt-2 max-w-sm text-sm leading-6 text-stone-600">
                            Aquí funciona muy bien una foto de reunión con
                            cliente, revisión de una web, demostración de
                            sistema o acompañamiento de trabajo real.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-5 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10">
              <div className="soft-rise">
                <div className="max-w-3xl">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                    Cómo trabajamos
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-stone-900 md:text-3xl">
                    Primero entendemos tu negocio. Luego definimos la solución.
                  </h3>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {processSteps.map((item, index) => (
                    <div
                      key={item.step}
                      className="soft-rise relative pl-6"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <div className="absolute left-0 top-0 h-full w-px bg-stone-200" />
                      <div className="absolute left-[-7px] top-1 h-4 w-4 rounded-full bg-[#1f5f87]" />
                      <div className="text-sm font-semibold text-[#1f5f87]">
                        {item.step}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-stone-900">
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <div className="max-w-3xl">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                    Qué podemos resolver contigo
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-stone-900 md:text-3xl">
                    Una propuesta más fácil de entender, pensada para abrir una
                    buena reunión comercial.
                  </h3>
                </div>

                <div className="mt-6">
                  {serviceBands.map((service, index) => (
                    <section
                      key={service.title}
                      className={`soft-rise ${
                        index === 0 ? "" : "border-t border-stone-200"
                      } py-6 md:py-7`}
                      style={{ animationDelay: `${(index + 1) * 80}ms` }}
                    >
                      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
                        <div>
                          <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-800">
                            Servicio {index + 1}
                          </div>
                          <h4 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-stone-900">
                            {service.title}
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-stone-600">
                            {service.description}
                          </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                          {service.points.map((point) => (
                            <div
                              key={point}
                              className="rounded-[22px] bg-[#faf8f4] px-4 py-4 text-sm leading-6 text-stone-700"
                            >
                              {point}
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              <div className="soft-rise mt-8 overflow-hidden rounded-[32px] border border-stone-200 bg-[linear-gradient(135deg,#1f5f87_0%,#245a7c_45%,#2a6d93_100%)] text-white">
                <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="px-5 py-7 md:px-8 md:py-8">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
                      Cierre comercial
                    </div>
                    <h4 className="mt-2 max-w-2xl text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                      No necesitas complicarte con la tecnología para mejorar tu
                      negocio.
                    </h4>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/82 md:text-base">
                      Lo importante es entender tu problema, elegir bien la
                      solución y hacer que realmente te ayude a trabajar mejor.
                      Esa es la conversación que queremos tener contigo.
                    </p>
                  </div>

                  <div className="border-t border-white/15 px-5 py-7 md:px-8 md:py-8 lg:border-l lg:border-t-0">
                    <div className="text-sm font-semibold text-white">
                      ¿Qué podríamos revisar contigo en una reunión?
                    </div>
                    <div className="mt-4 space-y-3">
                      {[
                        "Cómo ordenas hoy tu información",
                        "Qué procesos te hacen perder tiempo",
                        "Qué solución sería más útil para tu etapa",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-white" />
                          <p className="text-sm leading-6 text-white/82">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                      <a
                        href="#contacto"
                        className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#1f5f87] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Solicitar reunión
                      </a>

                      <a
                        href="#contacto"
                        className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                      >
                        Quiero orientación
                      </a>
                    </div>
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

function ProcessIcon() {
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
      <path d="M12 3v6" />
      <path d="M8 7h8" />
      <path d="M5 13a7 7 0 1 0 14 0c0-2.2-1-4.1-2.6-5.4H7.6A7 7 0 0 0 5 13Z" />
      <path d="M9 13h6" />
    </svg>
  );
}
