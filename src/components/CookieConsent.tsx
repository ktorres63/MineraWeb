import { useState } from 'react'
import { Plus } from 'lucide-react'

type Consent = 'all' | 'none' | 'custom'

const STORAGE_KEY = 'lb-cookie-consent'

function CookieButton({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-[37px] w-[185px] cursor-pointer items-center justify-between rounded-[3px] border border-brand-cookie px-3.5 text-left text-[12px] text-brand-cookie transition-colors duration-200 hover:bg-brand-cookie hover:text-white"
    >
      <span>{children}</span>
      <span aria-hidden="true" className="group-hover:text-white">
        &gt;
      </span>
    </button>
  )
}

interface Category {
  id: string
  name: string
  description: string
  always?: boolean
}

const categories: Category[] = [
  {
    id: 'necessary',
    name: 'Cookies Estrictamente Necesarias',
    description:
      'Estas cookies son estrictamente necesarias para el correcto funcionamiento del sitio web.',
    always: true,
  },
  {
    id: 'performance',
    name: 'Cookies de Estadística',
    description:
      'Estas cookies permiten la recopilación del número de visitas y las fuentes de tráfico para evaluar el rendimiento de nuestro sitio web. Nos ayudan a identificar qué páginas son las más o menos visitadas y cómo los usuarios navegan por el sitio web. Toda la información recopilada por estas cookies es anónima. Si el usuario decide bloquear las cookies, no podremos rastrear su visita ni evaluar el rendimiento del sitio web.',
  },
  {
    id: 'marketing',
    name: 'Cookies de Publicidad',
    description:
      'Estas cookies almacenan información sobre el comportamiento del usuario, identificando su acceso desde distintos dispositivos, lo cual se usa para ofrecer publicidad de interés; también apoyada por cookies de terceros.',
  },
]

export default function CookieConsent() {
  const [barVisible, setBarVisible] = useState(
    () => !window.localStorage.getItem(STORAGE_KEY),
  )
  const [panelOpen, setPanelOpen] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const [custom, setCustom] = useState({ performance: true, marketing: true })

  const save = (value: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, value)
    setBarVisible(false)
    setPanelOpen(false)
  }

  const toggle = (id: string) => setOpen((cur) => (cur === id ? null : id))

  return (
    <>
      {/* Barra inferior */}
      <div
        className={`fixed bottom-0 left-0 z-[2000] w-full bg-brand-grey-dark px-6 py-6 shadow-[0_0_15px_-2px_rgba(0,0,0,0.75)] transition-transform duration-300 ${
          barVisible ? 'translate-y-0' : 'translate-y-[150%]'
        }`}
      >
        <div className="mx-auto flex max-w-[1300px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[900px] text-left text-[14px] leading-[22px] text-brand-cookie">
            Este sitio web utiliza cookies estrictamente necesarias, de rendimiento, y de
            publicidad (propias y de terceros) para habilitar funciones básicas, personalizar
            contenido, comprender el uso del sitio web y mostrar anuncios de interés. Al hacer clic
            en "Permitir todas", se dará consentimiento para el uso de estas cookies. De caso
            contrario, hacer clic en "Configuración de cookies" para administrar las preferencias.
            Para obtener más información o cambiar las preferencias, consulta nuestra{' '}
            <a
              href="/assets/misc/politica-de-cookies.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-ink"
            >
              Política de Cookies
            </a>
          </p>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <button
              type="button"
              onClick={() => setPanelOpen(true)}
              className="cursor-pointer text-[12px] text-brand-cookie underline hover:text-brand-ink"
            >
              Configuración de cookies
            </button>
            <div className="flex flex-col gap-2.5">
              <CookieButton onClick={() => save('all')}>Aceptar todas las cookies</CookieButton>
              <CookieButton onClick={() => save('none')}>Rechazar todas las cookies</CookieButton>
            </div>
          </div>
        </div>
      </div>

      {/* Panel lateral */}
      <div
        className={`fixed left-0 top-0 z-[9001] h-screen w-[calc(100%-20px)] max-w-[445px] overflow-hidden bg-brand-grey-dark px-6 pb-8 pt-14 transition-transform duration-300 ${
          panelOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          type="button"
          onClick={() => setPanelOpen(false)}
          aria-label="Cerrar"
          className="absolute right-5 top-5 h-6 w-6 cursor-pointer"
        >
          <img src="/assets/img/btn-close.png" alt="" className="h-full w-full" />
        </button>

        <div className="h-full overflow-y-auto pr-5">
          <h2 className="mb-3 text-[20px] leading-[22px] text-brand-cookie">
            Centro de Preferencias de Privacidad
          </h2>
          <p className="mb-6 text-[12px] leading-[22px] text-brand-ink">
            Al visitar un sitio web, este puede almacenar o recuperar información en el navegador,
            principalmente mediante cookies. El sitio web utiliza la información del usuario, sus
            preferencias o dispositivo para que funcione acorde a sus necesidades. Aunque esta
            información no siempre registra la identidad del usuario, brinda una experiencia que se
            ajusta a sus preferencias. Sin embargo, respetamos el derecho a la privacidad, por lo
            que se pueden bloquear algunas cookies. Hacer clic en las diferentes categorías para
            obtener más información y ajustar las configuraciones predeterminadas. No obstante,
            bloquear algunas cookies podría afectar la experiencia del usuario y los servicios que
            ofrecemos.
          </p>

          <CookieButton onClick={() => save('all')}>Permitir todas</CookieButton>

          <h2 className="mb-3 mt-8 text-[20px] leading-[22px] text-brand-cookie">
            Administrar las Preferencias de Consentimiento
          </h2>

          <ul className="border-t border-dashed border-[#707070]">
            {categories.map((cat) => (
              <li key={cat.id} className="relative border-b border-dashed border-[#707070]">
                <button
                  type="button"
                  onClick={() => !cat.always && toggle(cat.id)}
                  className="flex w-full cursor-pointer items-center gap-3 py-2.5 pl-5 text-left text-[15px] text-brand-ink"
                >
                  <Plus className="h-3 w-3 shrink-0" />
                  <span>{cat.name}</span>
                  {cat.always && (
                    <span className="ml-auto text-[13px] text-brand-cookie underline">
                      Siempre Activas
                    </span>
                  )}
                </button>
                {open === cat.id && (
                  <p className="mb-4 pl-5 text-[11px] leading-[14px] tracking-tight text-brand-ink">
                    {cat.description}
                  </p>
                )}
                {cat.id === 'performance' && (
                  <label className="absolute right-0 top-3 flex cursor-pointer items-center gap-2 text-[10px] uppercase text-[#868d96]">
                    <input
                      type="checkbox"
                      checked={custom.performance}
                      onChange={(e) => setCustom((c) => ({ ...c, performance: e.target.checked }))}
                      className="h-6 w-10 cursor-pointer appearance-none rounded-full border border-[#e0e0e0] bg-white transition-colors checked:bg-brand-cookie"
                    />
                    Estadística
                  </label>
                )}
                {cat.id === 'marketing' && (
                  <label className="absolute right-0 top-3 flex cursor-pointer items-center gap-2 text-[10px] uppercase text-[#868d96]">
                    <input
                      type="checkbox"
                      checked={custom.marketing}
                      onChange={(e) => setCustom((c) => ({ ...c, marketing: e.target.checked }))}
                      className="h-6 w-10 cursor-pointer appearance-none rounded-full border border-[#e0e0e0] bg-white transition-colors checked:bg-brand-cookie"
                    />
                    Publicidad
                  </label>
                )}
              </li>
            ))}
          </ul>

          <CookieButton onClick={() => save('custom')}>Guardar preferencias</CookieButton>
        </div>
      </div>

      {panelOpen && (
        <div
          className="fixed inset-0 z-[9000] bg-black/70"
          onClick={() => setPanelOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
