import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { heroSlides } from '../../data/home'

export default function HeroBanner() {
  const [index, setIndex] = useState(0)
  const total = heroSlides.length

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), 6000)
    return () => window.clearInterval(id)
  }, [total])

  return (
    <section className="relative h-[calc(100vh-120px)] min-h-[611px] w-full overflow-hidden bg-brand-ink">
      <ul className="absolute inset-0 block">
        {heroSlides.map((slide, i) => (
          <li
            key={i}
            className={`absolute inset-0 w-full bg-cover bg-center transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={i !== index}
          >
            <div className="mx-auto flex h-full w-full max-w-[1300px] items-center px-[15px] lg:px-0 lg:pb-[70px] lg:pt-[188px]">
              <div className="max-w-full text-left">
                <h3 className="mb-[5px] whitespace-pre-line text-[20px] leading-[28px] text-white">
                  {slide.kicker}
                </h3>
                <h1 className="mb-[60px] text-[54px] font-bold leading-[54px] text-white lg:text-[80px]">
                  <span className="text-[28px] leading-[54px] lg:text-[45px]">
                    {slide.titleLead}
                    <br />
                  </span>
                  {slide.title}
                </h1>
                <Link
                  to={slide.href}
                  className="group relative inline-block h-[63px] w-[186px] cursor-pointer rounded-[10px] border border-white px-4 pt-4 text-[20px] text-white transition-colors duration-200 hover:bg-white hover:text-brand-ink"
                >
                  {slide.cta}
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[15px] group-hover:text-brand-ink"
                  >
                    &gt;
                  </span>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pager */}
      <div className="absolute right-[10px] top-[55%] z-10 flex -translate-y-1/2 flex-col items-center gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            className={`h-3.5 w-3.5 cursor-pointer rounded-full border border-white transition-colors duration-200 ${
              i === index ? 'bg-brand-red' : 'bg-white hover:bg-brand-red'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
