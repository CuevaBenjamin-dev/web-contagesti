type FooterPrincipalProps = {
  brandName?: string;
  tagline?: string;
  whatsappHref?: string;
  phone?: string;
  email?: string;
  address?: string;
};

const servicios = [
  { label: "Contabilidad", href: "/contabilidad" },
  { label: "Capacitaciones", href: "/capacitaciones" },
  { label: "Transformación digital", href: "/transformacion-digital" },
];

const accesos = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Contacto", href: "/#contacto" },
];

export default function FooterPrincipal({
  brandName = "Contagesti",
  tagline = "Soluciones claras para emprendedores, microempresas y pequeñas empresas.",
  whatsappHref = "https://wa.me/51999999999",
  phone = "+51 999 999 999",
  email = "contacto@contagesti.com",
  address = "Trujillo, Perú",
}: FooterPrincipalProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2f241d] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-200/80">
                {brandName}
              </div>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                Conversemos sobre lo que tu negocio necesita hoy.
              </h2>
              <p className="mt-2 text-sm leading-7 text-white/75 md:text-base">
                {tagline}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#2f241d] transition-all duration-300 hover:-translate-y-0.5"
              >
                Escríbenos por WhatsApp
              </a>

              <a
                href="/#contacto"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="text-xl font-semibold tracking-[-0.02em]">
              {brandName}
            </div>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/72">
              Acompañamos a negocios que buscan más orden, más claridad y
              soluciones prácticas para crecer mejor sin complicarse.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white/75">
                Perú
              </span>
              <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white/75">
                Atención cercana
              </span>
              <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white/75">
                Soluciones prácticas
              </span>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200/80">
              Servicios
            </div>
            <ul className="mt-4 space-y-3">
              {servicios.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200/80">
              Accesos
            </div>
            <ul className="mt-4 space-y-3">
              {accesos.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/72 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-200/80">
              Contacto
            </div>

            <div className="mt-4 space-y-3">
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="block text-sm leading-6 text-white/72 transition-colors duration-300 hover:text-white"
              >
                {phone}
              </a>

              <a
                href={`mailto:${email}`}
                className="block text-sm leading-6 text-white/72 transition-colors duration-300 hover:text-white"
              >
                {email}
              </a>

              <p className="text-sm leading-6 text-white/72">{address}</p>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Horario de atención
              </div>
              <p className="mt-2 text-sm leading-6 text-white/72">
                Lunes a sábado
                <br />
                9:00 a. m. – 6:00 p. m.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-4 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {brandName}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/privacidad"
              className="transition-colors duration-300 hover:text-white"
            >
              Política de privacidad
            </a>
            <a
              href="/terminos"
              className="transition-colors duration-300 hover:text-white"
            >
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
