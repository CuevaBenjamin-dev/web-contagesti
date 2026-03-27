type TrainingSectionProps = {
  entrepreneurImageSrc?: string;
  teamImageSrc?: string;
};

const trainingCards = [
  {
    eyebrow: "PARA EMPRENDEDORES",
    description:
      "Contenidos prácticos y útiles para ordenar, vender y tomar mejores decisiones.",
  },
  {
    eyebrow: "PARA EQUIPOS",
    description:
      "Formación para mejorar habilidades, coordinación y desempeño dentro de la empresa.",
  },
];

export default function TrainingSection({
  entrepreneurImageSrc = "/images/capacitacion-emprendedor.jpg",
  teamImageSrc = "/images/capacitacion-equipo.jpg",
}: TrainingSectionProps) {
  return (
    <section className="bg-[var(--color-surface-base)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[var(--section-max)] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1080px] text-center">
          <h2 className="type-h2 text-[var(--color-brand-blue-strong)]">
            Capacitaciones para{" "}
            <span className="text-[var(--color-brand-green)]">
              emprendedores y equipos
            </span>
          </h2>

          <p className="type-text mx-auto mt-4 max-w-[980px] text-[var(--color-text-body)]">
            Ayudamos a fortalecer conocimientos, ordenar ideas y mejorar la
            forma de trabajar con capacitaciones diseñadas para la realidad del
            negocio y del equipo.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="mx-auto w-full max-w-[650px]">
            <div className="grid gap-4 sm:grid-cols-2 lg:relative lg:h-[530px] lg:grid-cols-1 lg:gap-0">
              <div className="overflow-hidden rounded-[34px] shadow-[var(--shadow-card)] lg:absolute lg:left-0 lg:top-0 lg:w-[310px]">
                <img
                  src={entrepreneurImageSrc}
                  alt="Emprendedor participando en una capacitación"
                  className="h-full w-full object-cover aspect-[0.95/1]"
                />
              </div>

              <div className="overflow-hidden rounded-[34px] shadow-[var(--shadow-card)] lg:absolute lg:bottom-0 lg:right-0 lg:w-[330px]">
                <img
                  src={teamImageSrc}
                  alt="Equipo recibiendo una capacitación"
                  className="h-full w-full object-cover aspect-[1.02/0.95]"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[520px]">
            <div className="space-y-5">
              {trainingCards.map((card) => (
                <div
                  key={card.eyebrow}
                  className="rounded-[var(--radius-card-md)] border border-[var(--color-border-soft)] bg-transparent p-6 sm:p-7"
                >
                  <p className="type-eyebrow uppercase text-[var(--color-text-muted)]">
                    {card.eyebrow}
                  </p>

                  <p className="mt-4 text-[clamp(1.45rem,1vw+1rem,2rem)] font-medium leading-[1.12] text-[var(--color-text-dark)]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="type-note mx-auto mt-7 max-w-[470px] text-center text-[var(--color-text-note)] sm:mt-8">
              No solo enseñamos conceptos: buscamos que cada capacitación le
              deje algo útil y aplicable al negocio o al equipo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:mt-10 lg:justify-start">
              <a
                href="#quiero-saber-mas"
                className="interactive-button-soft type-button inline-flex min-h-[76px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-green)] px-8 text-center text-white shadow-[var(--shadow-button-green)] sm:min-w-[222px]"
              >
                Quiero saber más
              </a>

              <a
                href="#solicitar-capacitacion"
                className="interactive-button-soft type-button inline-flex min-h-[76px] items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-soft)] bg-[var(--color-surface-base)] px-8 text-center text-[var(--color-brand-blue-strong)] sm:min-w-[264px]"
              >
                Solicitar capacitación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
