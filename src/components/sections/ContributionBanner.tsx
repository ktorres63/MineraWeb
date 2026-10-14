import { Link } from 'react-router'
import { contributionLinks } from '../../data/home'

export default function ContributionBanner() {
  return (
    <section className="w-full bg-brand-red bg-[url('/assets/img/home-banner-aporte.jpg')] bg-center bg-no-repeat">
      <div className="mx-auto flex h-[418px] max-w-[1074px] items-center px-[15px] lg:px-0">
        <div className="w-full max-w-[402px] pt-0 lg:pt-[30px]">
          <div className="space-y-7">
            {contributionLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="group relative flex h-[63px] w-full max-w-[402px] cursor-pointer items-center rounded-[10px] border border-white px-6 text-left text-[20px] text-white transition-colors duration-200 hover:bg-white hover:text-brand-red"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[20px] group-hover:text-brand-red"
                >
                  &gt;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
