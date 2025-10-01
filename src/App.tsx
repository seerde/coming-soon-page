import { MaazeebLogo } from './components/MaazeebLogo';

export const App = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon__container">
        <header className="coming-soon__header" aria-label="Maazeeb logo">
          <MaazeebLogo className="coming-soon__logo" width={120} height={64} />
        </header>

        <section className="coming-soon__hero" aria-labelledby="coming-soon-title">
          <div className="coming-soon__media" aria-hidden="true" />

          <div className="coming-soon__content" role="presentation">
            <div className="coming-soon__badge" aria-hidden="true">
              <span className="coming-soon__badge-border" />
              <span className="coming-soon__badge-label">The place is yours</span>
            </div>

            <h1 id="coming-soon-title" className="coming-soon__title">
              Maazeeb
            </h1>

            <p className="coming-soon__subtitle">
              Not just a door... <span>a gateway to the future of events.</span>
            </p>
            <p className="coming-soon__description">Event management will never be the same.</p>

            <button type="button" className="coming-soon__cta" aria-label="Maazeeb coming soon">
              <svg
                className="coming-soon__cta-icon"
                width="18"
                height="18"
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
              <span>Coming soon</span>
            </button>
          </div>
        </section>

        <footer className="coming-soon__footer">
          <img src="/assets/footer-divider.png" alt="" aria-hidden="true" />
          <p>© 2025 Maazeeb. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
