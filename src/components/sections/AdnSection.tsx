import { useEffect, useRef } from 'react'

const COMPOSITION_ID = '60160403DC6D4A08BFD47EA7B9EDDBBB'

interface StageLike {
  addChild: (child: unknown) => void
}

interface CompositionLibrary {
  animaadnweb1080: new () => unknown
  Stage: new (canvas: HTMLCanvasElement) => StageLike
  properties: { fps: number; id: string }
}

interface Composition {
  getLibrary: () => CompositionLibrary
}

interface CreatejsGlobal {
  Ticker: { framerate: number; addEventListener: (type: string, listener: unknown) => void }
}

interface AdobeAnGlobal {
  getComposition: (id: string) => Composition
  makeResponsive: (
    isResp: boolean,
    isHor: string,
    isVert: boolean,
    nScaleFactor: number,
    nToScale: unknown[],
  ) => void
  compositionLoaded: (id: string) => void
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (existing) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error(`No se pudo cargar ${src}`))
    document.body.appendChild(script)
  })
}

/**
 * Sección "ADN". En escritorio reproduce la animación original de Adobe Animate
 * (createjs + anima-adn-web-1080.js). En móvil muestra la imagen estática.
 */
export default function AdnSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let cancelled = false

    async function init() {
      try {
        await loadScript('/assets/adn/createjs.min.js')
        await loadScript('/assets/adn/anima-adn-web-1080.js')
      } catch {
        return
      }
      if (cancelled) return

      const canvas = canvasRef.current
      const container = containerRef.current
      const overlay = document.getElementById('dom_overlay_container')
      if (!canvas || !container || !overlay) return

      const AdobeAn = (window as unknown as { AdobeAn: AdobeAnGlobal }).AdobeAn
      const createjs = (window as unknown as { createjs: CreatejsGlobal }).createjs
      if (!AdobeAn || !createjs) return

      const comp = AdobeAn.getComposition(COMPOSITION_ID)
      const lib = comp.getLibrary()
      const exportRoot = new lib.animaadnweb1080()
      const stage = new lib.Stage(canvas)
      stage.addChild(exportRoot)
      createjs.Ticker.framerate = lib.properties.fps
      createjs.Ticker.addEventListener('tick', stage)
      AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, container, overlay])
      AdobeAn.compositionLoaded(lib.properties.id)
    }

    init()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="w-full">
      <div className="bg-[rgba(226,226,226,0.5)] pb-10">
        <div className="mx-auto max-w-[1300px] px-[15px] lg:px-0">
          {/* Animación (escritorio) */}
          <div
            ref={containerRef}
            id="animation_container"
            className="relative mx-auto hidden h-[700px] w-full max-w-[1080px] bg-white min-[1080px]:block"
          >
            <canvas
              ref={canvasRef}
              id="canvas"
              width="1080"
              height="700"
              className="absolute block h-[700px] w-[1080px] bg-white"
            />
            <div
              id="dom_overlay_container"
              className="pointer-events-none absolute left-0 top-0 h-[700px] w-[1080px] overflow-hidden"
            />
          </div>

          {/* Imagen estática (móvil) */}
          <img
            src="/assets/home/adn-movil.png"
            alt="ADN Las Bambas"
            className="mx-auto block max-w-[354px] min-[1080px]:hidden"
          />
        </div>
      </div>
    </section>
  )
}
