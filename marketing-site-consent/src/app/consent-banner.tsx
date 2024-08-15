"use client";
import React from 'react';
export default function ConsentBanner() {
  const [isConsentAccepted, setIsConsentAccepted] = React.useState<boolean | undefined>(undefined);
  if (isConsentAccepted !== undefined) return;
  return (
    <div className="fixed bottom-0 z-[60] inset-x-0">
        <div className="p-4 bg-white border border-gray-200 shadow-sm dark:bg-neutral-900 dark:border-neutral-800">
        <div className="max-w-sm w-full mx-auto">
            <h2 className="font-semibold text-gray-800 dark:text-white">
            Cookie Settings
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
            We use cookies to improve your experience and for marketing. Visit our <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">Cookies Policy</a> to learn more.
            </p>

            <div className="mt-5 inline-flex gap-x-2">
            <button type="button" 
            onClick={() => {
                setIsConsentAccepted(true)
                window.syft.enable();
            }}
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Agree
            </button>
            <button type="button" 
            onClick={() => setIsConsentAccepted(false)}
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                Reject
            </button>
            </div>
        </div>
        </div>
    </div>);
}
