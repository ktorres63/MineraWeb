import { Link } from 'react-router'
import { galleryItems } from '../../data/home'

export default function SocialProjects() {
  return (
    <section className="w-full border-t border-brand-red">
      <div className="mx-auto max-w-[1300px] px-[15px] pb-[70px] pt-[58px] lg:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative">
            <div className="mb-[5px] text-[20px] leading-[36px] text-brand-red">Las Bambas</div>
            <div className="mb-10 max-w-[500px] text-left text-[34px] font-black leading-[40px] text-brand-red">
              Proyectos sociales
            </div>
            <span
              aria-hidden="true"
              className="absolute right-0 top-[50px] h-full max-h-[120px] w-px bg-brand-red"
            />
          </div>
          <div className="pt-[50px] pl-[30px] text-left text-[18px] leading-[30px] text-brand-ink max-lg:pt-0 max-lg:pl-0">
            Aportamos crecimiento y evolución a los pobladores de nuestras áreas de influencia a
            través de diversas actividades promovidas y desarrolladas de la mano con las
            comunidades.
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-[70px] sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <Link
              key={item.image}
              to={item.href}
              className="group relative block cursor-pointer overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 z-10 flex items-start justify-start bg-[rgba(238,39,36,0.79)] p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <span className="text-[15px] leading-[24px] text-white">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
