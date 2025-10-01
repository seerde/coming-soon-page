import { PageLayout } from './PageLayout';

export const ComingSoonPage = () => (
  <PageLayout
    button={
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
    }
  />
);

export default ComingSoonPage;
