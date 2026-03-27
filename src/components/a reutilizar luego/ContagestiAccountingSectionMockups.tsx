export default function ContagestiAccountingSectionMockups() {
  const proposals = [
    {
      id: "01",
      name: "Propuesta A",
      title: "Diagnóstico rápido + beneficios claros",
      subtitle:
        "Ideal para captar emprendedores y pymes que quieren entender en segundos qué resuelves y por qué deberían escribirte.",
      bullets: [
        "Bloque principal dividido 60/40",
        "Columna izquierda con mensaje y beneficios",
        "Columna derecha con mini panel visual del servicio",
        "CTA visible sin bajar demasiado",
      ],
      tag: "Más comercial",
    },
    {
      id: "02",
      name: "Propuesta B",
      title: "Panel operativo + problemas reales del cliente",
      subtitle:
        "Ideal si quieres que la sección se sienta moderna y práctica, como si Contagesti organizara el negocio del cliente.",
      bullets: [
        "Vista tipo dashboard muy ligera",
        "Lista de dolores frecuentes con solución inmediata",
        "Indicadores de orden y control financiero",
        "Interacción simple con hover y acordeón móvil",
      ],
      tag: "Más moderna",
    },
    {
      id: "03",
      name: "Propuesta C",
      title: "Proceso de acompañamiento + prueba social",
      subtitle:
        "Ideal para transmitir cercanía, orden y confianza. Muy buena cuando vendes un servicio consultivo y no solo una tarea contable.",
      bullets: [
        "Secuencia paso a paso muy entendible",
        "Testimonio o resultado al costado",
        "Sensación de acompañamiento y claridad",
        "Responsive muy limpio y fácil de escanear",
      ],
      tag: "Más confiable",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 p-4 text-neutral-900 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-600">
                Exploración visual de estructura
              </div>

              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Sección de{" "}
                <span className="italic">servicio de contabilidad</span> para
                Contagesti
              </h1>

              <p className="text-sm leading-7 text-neutral-600 md:text-base">
                Mockups conceptuales enfocados en estructura, jerarquía,
                interacción y comportamiento responsive. La paleta se mantiene
                neutra a propósito.
              </p>
            </div>

            <div className="grid w-full grid-cols-3 gap-2 text-center text-xs md:w-auto md:text-sm">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
                <div className="font-semibold">Web</div>
                <div className="text-neutral-500">jerarquía</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
                <div className="font-semibold">Móvil</div>
                <div className="text-neutral-500">escaneo</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
                <div className="font-semibold">UX</div>
                <div className="text-neutral-500">claridad</div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-8">
          {proposals.map((proposal, index) => (
            <article
              key={proposal.id}
              className="rounded-[28px] border border-neutral-200 bg-white p-4 shadow-sm md:p-6"
            >
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    {proposal.name}
                  </div>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    {proposal.title}
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-7 text-neutral-600 md:text-base">
                    {proposal.subtitle}
                  </p>
                </div>

                <div className="inline-flex h-fit rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700">
                  {proposal.tag}
                </div>
              </div>

              {index === 0 && <ProposalA />}
              {index === 1 && <ProposalB />}
              {index === 2 && <ProposalC />}

              <div className="mt-6 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
                {proposal.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

function ProposalA() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="rounded-[26px] border border-neutral-200 bg-neutral-50 p-5 md:p-7">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-neutral-500">
          <span>Servicio principal</span>
          <span className="h-1 w-1 rounded-full bg-neutral-400" />
          <span>Contabilidad para emprendedores y pymes</span>
        </div>

        <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
          Mantén tu negocio al día con una contabilidad clara, ordenada y útil
          para decidir mejor.
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
          La idea aquí es que el usuario entienda rápido el beneficio principal,
          no solo el servicio. Debajo aparecen beneficios en formato muy
          escaneable.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Declaraciones y registros al día",
            "Información útil para tomar decisiones",
            "Acompañamiento cercano y claro",
            "Servicio adaptado al tamaño del negocio",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-200 bg-white p-4"
            >
              <div className="mb-3 h-8 w-8 rounded-xl border border-neutral-300 bg-neutral-100" />
              <div className="text-sm font-medium leading-6 md:text-base">
                {item}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-medium text-white">
            Quiero ordenar mi contabilidad
          </button>
          <button className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-700">
            Ver cómo trabajamos
          </button>
        </div>
      </div>

      <div className="rounded-[26px] border border-neutral-200 bg-white p-5 md:p-6">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-4 md:p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Panel
              </div>
              <div className="mt-1 text-lg font-semibold">
                Tu negocio, más claro
              </div>
            </div>
            <div className="h-10 w-10 rounded-2xl border border-neutral-300 bg-white" />
          </div>

          <div className="mt-5 space-y-3">
            {[
              ["Ventas registradas", "Actualizado"],
              ["Obligaciones tributarias", "Controlado"],
              ["Documentación", "Ordenada"],
            ].map(([label, status]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3"
              >
                <span className="text-sm text-neutral-700">{label}</span>
                <span className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-neutral-200 p-4">
          <div className="text-sm font-medium">Microcopy recomendado</div>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            “No se trata solo de cumplir. Se trata de entender cómo está tu
            negocio para crecer con más seguridad.”
          </p>
        </div>
      </div>
    </div>
  );
}

function ProposalB() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[26px] border border-neutral-200 bg-white p-5 md:p-6">
        <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
          Dolores frecuentes
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
          Una sección que parte de lo que hoy le duele al cliente.
        </h3>

        <div className="mt-5 space-y-3">
          {[
            "No sé si estoy registrando bien mis movimientos",
            "Tengo miedo a multas o atrasos",
            "No entiendo mis números para decidir",
            "Siento desorden en lo contable y tributario",
          ].map((item, idx) => (
            <div
              key={item}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-xs font-semibold text-neutral-600">
                  {idx + 1}
                </div>
                <div className="text-sm leading-6 text-neutral-700 md:text-base">
                  {item}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[26px] border border-neutral-200 bg-neutral-50 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white p-5 md:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Vista conceptual
                </div>
                <div className="mt-1 text-xl font-semibold md:text-2xl">
                  Contabilidad convertida en orden
                </div>
              </div>
              <div className="h-12 w-12 rounded-2xl border border-neutral-300 bg-neutral-100" />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <StatCard title="Ingresos" />
              <StatCard title="Egresos" />
              <StatCard title="Pendientes" />
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5">
            <div className="text-sm font-medium">Qué ve el usuario</div>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Una interfaz limpia, moderna y muy digerible. Se siente
              estratégica, no burocrática.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5">
            <div className="text-sm font-medium">Interacción recomendada</div>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Hover suave en desktop y acordeón o tarjetas expandibles en móvil.
              Sin exceso de movimiento.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-5 md:col-span-2">
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-medium text-white">
                Quiero una revisión de mi situación
              </button>
              <button className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-700">
                Ver beneficios del servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProposalC() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[26px] border border-neutral-200 bg-neutral-50 p-5 md:p-7">
        <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
          Acompañamiento
        </div>

        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
          Una sección que muestra cómo Contagesti acompaña, no solo ejecuta.
        </h3>

        <div className="mt-6 space-y-4">
          {[
            [
              "01",
              "Diagnóstico",
              "Revisamos el estado actual de tu negocio y detectamos lo urgente.",
            ],
            [
              "02",
              "Orden",
              "Organizamos la información clave para que todo tenga sentido.",
            ],
            [
              "03",
              "Seguimiento",
              "Te acompañamos para que no vuelvas al desorden.",
            ],
          ].map(([n, title, desc]) => (
            <div
              key={n}
              className="rounded-3xl border border-neutral-200 bg-white p-4 md:p-5"
            >
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-neutral-300 bg-neutral-100 text-sm font-semibold">
                  {n}
                </div>
                <div>
                  <div className="text-base font-semibold">{title}</div>
                  <div className="mt-1 text-sm leading-6 text-neutral-600">
                    {desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="rounded-[26px] border border-neutral-200 bg-white p-5 md:p-6">
          <div className="text-xs uppercase tracking-[0.22em] text-neutral-500">
            Resultado / prueba social
          </div>

          <div className="mt-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
            <div className="h-12 w-12 rounded-2xl border border-neutral-300 bg-white" />
            <p className="mt-4 text-base leading-7 text-neutral-700 md:text-lg">
              “Ahora entiendo mis números y sé qué decisiones tomar. Ya no
              siento que la contabilidad sea una carga.”
            </p>
            <div className="mt-4 text-sm font-medium">
              Cliente pyme / emprendedor
            </div>
          </div>
        </div>

        <div className="rounded-[26px] border border-neutral-200 bg-white p-5 md:p-6">
          <div className="text-sm font-medium">CTA recomendado</div>
          <div className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Hablemos de cómo ordenar tu contabilidad.
          </div>
          <p className="mt-3 text-sm leading-7 text-neutral-600 md:text-base">
            Muy útil para cerrar la sección con una sensación humana y directa.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            <button className="rounded-2xl border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-medium text-white">
              Escribir por WhatsApp
            </button>
            <button className="rounded-2xl border border-neutral-300 bg-neutral-50 px-5 py-3 text-sm font-medium text-neutral-700">
              Agendar orientación
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
        {title}
      </div>
      <div className="mt-3 h-16 rounded-2xl border border-dashed border-neutral-300 bg-white" />
      <div className="mt-3 h-2 w-2/3 rounded-full bg-neutral-300" />
      <div className="mt-2 h-2 w-1/2 rounded-full bg-neutral-200" />
    </div>
  );
}
