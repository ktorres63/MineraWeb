import { Link } from 'react-router'
import { latestNews } from '../../data/home'

export default function LatestNews() {
  return (
    <section className="w-full bg-brand-grey">
      <div className="mx-auto max-w-[1300px] px-[15px] pb-[94px] pt-0 lg:px-0">
        <div className="relative mb-[60px] pl-[25px] pt-[70px] text-left text-[40px] font-black leading-[42px] tracking-tight text-brand-red">
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-px bg-brand-red"
          />
          <span className="block text-[20px] font-light">Últimas</span>
          <br />
          Noticias
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {latestNews.map((item) => (
            <article key={item.title} className="mb-[30px] max-w-[268px]">
              <div className="mb-[14px] text-[14px] leading-[26px] text-brand-ink">{item.date}</div>
              <div className="mb-[15px] text-[20px] leading-[26px] tracking-tight text-brand-red">
                {item.title}
              </div>
              <Link
                to={item.href}
                className="group relative inline-flex h-[35px] w-[115px] cursor-pointer items-center rounded-md border border-[#ccc8c8] px-[17px] text-[12px] leading-[35px] text-brand-red transition-colors duration-200 hover:bg-brand-red hover:text-white"
              >
                Ver más
                <span
                  aria-hidden="true"
                  className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[12px] group-hover:text-white"
                >
                  &gt;
                </span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-[80px] text-center">
          <Link
            to="/noticias-y-publicaciones/noticias"
            className="group relative inline-flex h-[63px] w-[402px] max-w-full cursor-pointer items-center rounded-[10px] border border-brand-red px-6 pt-[17px] text-left text-[18px] text-brand-red transition-colors duration-200 hover:bg-brand-red hover:text-white"
          >
            Ver todas las noticias
            <span
              aria-hidden="true"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-[18px] font-bold group-hover:text-white"
            >
              &gt;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
