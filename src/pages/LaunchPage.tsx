import { useState } from 'react';
import { PageLayout } from './PageLayout';

const DEFAULT_LAUNCH_ENDPOINT = 'https://maazeeb-launch-server-ebcdb12d5d7c.herokuapp.com/launch';

export const LaunchPage = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const launchEndpoint = import.meta.env.VITE_LAUNCH_ENDPOINT ?? DEFAULT_LAUNCH_ENDPOINT;

  const onLaunch = async () => {
    setStatus('loading');
    setMessage(null);

    try {
      const response = await fetch(launchEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to launch');
      }

      setStatus('success');
      setMessage('Launch started. The public site will be online shortly.');
    } catch (error) {
      console.error('Failed to disable maintenance mode', error);
      setStatus('error');
      setMessage('Could not launch the site. Please try again.');
    }
  };

  return (
    <PageLayout
      button={
        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={onLaunch}
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center rounded-md bg-[#252527] px-8 py-3 text-[21px] font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-70"
            aria-label="Launch the Maazeeb public website"
          >
            {status === 'loading' ? 'Launching...' : 'Click here to Launch'}
          </button>
          {message ? (
            <p
              className={`text-sm font-semibold ${
                status === 'error' ? 'text-red-300' : 'text-emerald-300'
              }`}
            >
              {message}
            </p>
          ) : null}
        </div>
      }
    />
  );
};

export default LaunchPage;
