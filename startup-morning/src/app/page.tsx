'use client';

import Link from 'next/link';
import { ClockIcon, MegaphoneIcon, ChatBubbleLeftRightIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen animate-fade-in overflow-hidden bg-white flex flex-col">

      <main className="flex-grow">
        <div className="relative isolate px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Australia's Largest
                <br />
                {/* Ensure 'gradient-text' class exists in your global CSS or define inline */}
                <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl sm:text-7xl font-extrabold tracking-tight mt-3">
                  Startup Community
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join over 7,000 founders, entrepreneurs, and innovators building the future of tech in Western Australia.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="https://www.meetup.com/morning-startup-perth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-md transform hover:scale-105"
                >
                  View Events
                </Link>
                <Link
                  href="/submit-talk" // Assuming a contact page route
                  className="group text-sm font-semibold leading-6 text-gray-900 transition duration-300 ease-in-out hover:text-gray-700"
                >
                  Submit a Talk <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Optional: Second background shape */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* Stats Section */}
        {/* Reduced top padding: pt-12 sm:pt-16 */}
        <div className="pt-12 pb-16 sm:pt-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">Active Members</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                  7,000+
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">Events Hosted</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                  200+
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">Speaker Talks</dt>
                <dd className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                  500+
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Get Involved Section - Modernized with Equal Height Cards */}
        {/* Added a subtle background pattern using SVG */}
        <div
          className="relative bg-gray-50 py-24 sm:py-32"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get Involved</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join Perth's thriving startup community and connect with like-minded entrepreneurs.
              </p>
            </div>

            <div className="mx-auto mt-20 max-w-5xl">
              {/* Updated grid with equal height cards using h-full and flex */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

                {/* Card 1: Morning Meetups */}
                <div className="group h-full">
                  {/* Added h-full and flex flex-col for equal height */}
                  <div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03] h-full flex flex-col">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-100">
                      <ClockIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-center text-lg font-semibold leading-6 text-gray-900">Morning Meetups</h3>
                    <p className="mt-4 text-center text-sm leading-6 text-gray-600 flex-1">
                      We meet every two weeks rain, hail or shine. Founded by Scott & Dave and organized by founders, for founders.
                    </p>
                    <div className="mt-6 text-center">
                      <Link
                        href="https://www.meetup.com/morning-startup-perth/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500"
                      >
                        View Schedule
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 2: Founder Sundowners */}
                <div className="group h-full">
                  <div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03] h-full flex flex-col">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-100">
                      <MegaphoneIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-center text-lg font-semibold leading-6 text-gray-900">Founder Sundowners</h3>
                    <p className="mt-4 text-center text-sm leading-6 text-gray-600 flex-1">
                      Mornings not your thing? Join us for a sundowner on the first Wednesday of every month at Otherside of Nowhere.
                    </p>
                    <div className="mt-6 text-center">
                      <Link
                        href="https://www.meetup.com/morning-startup-perth/events/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500"
                      >
                        Join us
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 3: Stay Connected */}
                <div className="group h-full">
                  <div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03] h-full flex flex-col">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-100">
                      <ChatBubbleLeftRightIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-center text-lg font-semibold leading-6 text-gray-900">Stay Connected</h3>
                    <p className="mt-4 text-center text-sm leading-6 text-gray-600 flex-1">
                      Join our Slack community to keep the conversation going between events and connect with fellow founders.
                    </p>
                    <div className="mt-6 text-center">
                      <Link
                        href="https://morningstartup.slack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500"
                      >
                        Join Slack
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Card 4: Past Events */}
                <div className="group h-full">
                  <div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03] h-full flex flex-col">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-100">
                      <VideoCameraIcon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-center text-lg font-semibold leading-6 text-gray-900">Past Events</h3>
                    <p className="mt-4 text-center text-sm leading-6 text-gray-600 flex-1">
                      Missed a topic? Access our archive of amazing speakers and presentations from past events.
                    </p>
                    <div className="mt-6 text-center">
                      <Link
                        href="https://perthvideo.com.au/morning-startup-perth/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500"
                      >
                        Watch Archives
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Optional: Logo/Description */}
            <div className="space-y-8">
               {/* If you have a logo SVG or Image component, place it here */}
               {/* <img className="h-7" src="/path/to/your/logo-white.svg" alt="Company name" /> */}
               <p className="text-sm leading-6 text-gray-300">
                 Perth's largest startup community. Connecting founders, innovators, and the ecosystem.
               </p>
               {/* Optional: Social Links */}
               {/* <div className="flex space-x-6">
                 <a href="#" className="text-gray-400 hover:text-gray-300"> ... SVG ... </a>
               </div> */}
            </div>
            {/* Footer Links */}
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Navigate</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link href="/" className="text-sm leading-6 text-gray-300 hover:text-white">Home</Link></li>
                    <li><Link href="/sponsors" className="text-sm leading-6 text-gray-300 hover:text-white">Sponsors</Link></li>
                    {/* Add other relevant internal links */}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Connect</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><a href="https://www.meetup.com/morning-startup-perth/" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white">Meetup Events</a></li>
                    <li><a href="https://morningstartup.slack.com/" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white">Slack Community</a></li>
                    <li><Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-1 md:gap-8"> {/* Adjusted for single column */}
                 <div>
                   <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                   <ul role="list" className="mt-6 space-y-4">
                     <li><a href="https://perthvideo.com.au/morning-startup-perth/" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white">Event Archives</a></li>
                     {/* Add links to Startup WA, Startup News etc. if desired */}
                     <li><a href="https://www.startupwa.org" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white">Startup WA</a></li>
                     <li><a href="https://startupnews.com.au" target="_blank" rel="noopener noreferrer" className="text-sm leading-6 text-gray-300 hover:text-white">Startup News</a></li>
                   </ul>
                 </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-400">&copy; {currentYear} Morning Startup Perth. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}