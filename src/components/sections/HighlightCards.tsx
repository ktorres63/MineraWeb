import { Link } from 'react-router'
import { highlights } from '../../data/home'

export default function HighlightCards() {
  return (
    <section className="relative w-full bg-[url('/assets/img/fondo-textura-roja.jpg')] bg-cover bg-center bg-no-repeat py-[86px] lg:bg-auto lg:bg-brand-red lg:bg-[right_bottom]">
      {/* solapa decorativa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[376px] w-[164px] bg-[url('/assets/img/solapa.png')] bg-contain bg-bottom bg-no-repeat lg:block"
      />
      <div className="mx-auto max-w-[1300px] px-[15px] lg:px-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {highlights.map((item, i) => (
            <article
              key={i}
              className="relative w-full lg:w-[calc(100%-40px)]"
            >
              <div className="mb-3 text-[26px] leading-[36px] text-white">{item.subtitle}</div>
              <div className="mb-10 text-[33px] font-black leading-[43px] text-white">
                {item.title}
              </div>
              <Link
                to={item.href}
                className="group relative inline-block h-[63px] w-[186px] cursor-pointer rounded-[10px] border border-white px-4 pt-4 text-[20px] text-white transition-colors duration-200 hover:bg-white hover:text-brand-ink"
              >
                {item.cta}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[15px] group-hover:text-brand-ink"
                >
                  &gt;
                </span>
              </Link>
              {i === 0 && (
                <span
                  aria-hidden="true"
                  className="absolute right-[-15px] top-0 hidden h-full w-px bg-white opacity-50 lg:block"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
