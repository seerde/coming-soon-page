import { MaazeebLogo } from './components/MaazeebLogo';

export const App = () => {
  return (
    <div className="coming-soon">
      <div className="coming-soon__content">
        <header className="coming-soon__header">
          <MaazeebLogo className="coming-soon__logo" width={126} height={66} />
        </header>
        <main className="coming-soon__main" role="main">
          <span className="coming-soon__badge" aria-hidden="true">
            Maazeeb
          </span>
          <h1 className="coming-soon__title">Coming Soon</h1>
        </main>
      </div>
      <div className="coming-soon__door" aria-hidden="true" />
    </div>
  );
};

export default App;
