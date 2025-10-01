import { MaazeebLogo } from './components/MaazeebLogo';
import { SectionLabel } from './components/SectionLabel';

export const App = () => {
  const assetPrefix = import.meta.env.BASE_URL ?? '/';
  const footerDividerSrc = `${assetPrefix}assets/footer-divider.png`;
  const backgroundImageSrc = `${assetPrefix}assets/door-bg.png`;

  return (
    <div className="relative flex min-h-screen flex-col bg-[#000006] text-white">
      <header className="bg-[#0B0910]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-8 sm:px-10 lg:px-16">
          <MaazeebLogo className="h-12 w-auto drop-shadow-[0_16px_48px_rgba(46,18,95,0.45)]" />
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full overflow-x-hidden bg-[#000006]">
          <div className="relative px-20 py-24 max-md:mt-[320px] max-md:px-4 max-md:py-14">
            <div className="relative z-[2] mx-auto flex w-full max-w-6xl flex-col gap-8 px-8 py-[90px] max-md:gap-10 max-md:p-0">
              <div className="flex flex-col lg:w-[65%]">
                <div className="flex flex-col gap-4 max-md:items-center mb-4">
                  <SectionLabel>The place is yours</SectionLabel>
                  <h1 className="bg-clip-text bg-label-gradient text-transparent font-semibold text-[60px] leading-[72px] max-md:text-center max-md:text-[36px] max-md:leading-[44px]">
                    Maazeeb
                  </h1>
                </div>

                <p className="bg-clip-text bg-label-gradient text-transparent text-[26px] font-bold leading-[30px] max-md:text-center max-md:text-[18px] max-md:leading-7">
                  Not just a door...{' '}
                  <span className="text-white">a gateway to the future of events.</span>
                </p>

                <p className="text-[20px] leading-8 text-zinc-200 max-md:text-center max-md:text-base max-md:leading-7 mb-8 font-semibold">
                  Event management will never be the same.
                </p>

                <div className="flex max-md:justify-center">
                  <button
                    type="button"
                    className="inline-flex items-center bg-[#252527] gap-8 rounded-md px-8 py-3 text-[21px] font-semibold text-white transition"
                    aria-label="Maazeeb coming soon"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                      <svg
                        className="h-10 w-10"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Zm6-6v-4a6 6 0 1 0-12 0v4l-1.8 1.8a1 1 0 0 0 .7 1.7H19.1a1 1 0 0 0 .7-1.7L18 16Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    Coming soon
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 z-[1] h-full">
            <img className="h-full object-cover" src={backgroundImageSrc} alt="Door background" />
          </div>
        </section>
      </main>

      <footer className="bg-[#0B0910]">
        <div className="mx-auto flex w-full flex-col gap-12 px-4 py-12 sm:px-6 md:px-8">
          <div className="h-[24px] flex items-center justify-center">
            <img
              className="block h-full w-fit object-cover"
              src={footerDividerSrc}
              alt="Footer divider"
            />
          </div>

          <div className="flex">
            <p className="text-sm text-white/80">© 2025 Maazeeb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
