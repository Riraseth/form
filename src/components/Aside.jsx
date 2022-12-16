import { Link } from 'react-router-dom';
import { useFormContext } from '../formContext';

const Aside = () => {
  const { step, setStep } = useFormContext();
  return (
    <aside className="aside">
      <nav className="aside__nav">
        <Link
          className={`aside__link ${step >= 1 ? 'active' : ''}`}
          to="/"
          onClick={() => setStep(1)}
        >
          1
        </Link>
        <div
          className={`aside__line aside__line--bottom ${
            step >= 1 ? 'active' : ''
          }`}
        ></div>
        <div
          className={`aside__line aside__line--top ${
            step >= 2 ? 'active' : ''
          }`}
        ></div>
        <Link
          className={`aside__link ${step >= 2 ? 'active' : ''}`}
          to="/2"
          onClick={() => setStep(2)}
        >
          2
        </Link>
        <div
          className={`aside__line aside__line--bottom ${
            step >= 2 ? 'active' : ''
          }`}
        ></div>
        <div
          className={`aside__line aside__line--top ${
            step >= 3 ? 'active' : ''
          }`}
        ></div>
        <Link
          className={`aside__link ${step >= 3 ? 'active' : ''}`}
          to="/3"
          onClick={() => setStep(3)}
        >
          3
        </Link>
        <div
          className={`aside__line aside__line--bottom ${
            step >= 3 ? 'active' : ''
          }`}
        ></div>
        <div
          className={`aside__line aside__line--top ${
            step >= 4 ? 'active' : ''
          }`}
        ></div>
        <Link
          className={`aside__link ${step >= 4 ? 'active' : ''}`}
          to="/4"
          onClick={() => setStep(4)}
        >
          4
        </Link>
        <div
          className={`aside__line aside__line--bottom ${
            step >= 4 ? 'active' : ''
          }`}
        ></div>
        <div
          className={`aside__line aside__line--top ${
            step >= 5 ? 'active' : ''
          }`}
        ></div>
        <Link
          className={`aside__link ${step >= 5 ? 'active' : ''}`}
          to="/5"
          onClick={() => setStep(5)}
        >
          5
        </Link>
      </nav>
    </aside>
  );
};

export default Aside;
