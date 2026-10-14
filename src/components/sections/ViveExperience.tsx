import { Link } from 'react-router'
import { vive } from '../../data/home'

export default function ViveExperience() {
  return (
    <section
      className="w-full bg-brand-red bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${vive.background})` }}
    >
      <div className="mx-auto flex h-[418px] max-w-[1300px] items-center justify-end px-[15px] lg:px-0">
        <div className="w-full max-w-[456px]">
          <div className="mb-5 flex items-center">
            <img src={vive.image} alt="" className="mr-[30px] w-[123px]" />
            <div className="text-[20px] leading-[24px] text-white">
              {vive.textLead}
              <br />
              <span className="text-[42px] font-bold leading-[42px]">{vive.textStrong}</span>
            </div>
          </div>
          <Link
            to={vive.href}
            className="group relative mt-[50px] flex h-[63px] w-full max-w-[456px] cursor-pointer items-center rounded-[14px] border border-white bg-brand-red px-6 pt-[17px] text-left text-[18px] text-white transition-colors duration-200 hover:bg-white hover:text-brand-red"
          >
            {vive.cta}
            <span
              aria-hidden="true"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-[18px] font-bold group-hover:text-brand-red"
            >
              &gt;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
