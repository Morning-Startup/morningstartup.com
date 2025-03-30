'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen animate-fade-in">
      {/* Hero section */}
      <div className="relative isolate px-6 pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Australia's Largest
              <br />
              <span className="block gradient-text text-5xl sm:text-7xl font-extrabold tracking-tight mt-3 whitespace-nowrap">Startup Community</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join over 7,000 founders, entrepreneurs, and innovators building the future of tech in Western Australia.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://www.meetup.com/morning-startup-perth/"
                className="rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition"
              >
                View Events
              </Link>
              <Link
                href="https://www.meetup.com/morning-startup-perth/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Submit a Talk <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Active Members</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                7,000+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Events Hosted</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                200+
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">Speaker Talks</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                500+
              </dd>
            </div>
          </dl>
        </div>
      </div>
      
      {/* Get Involved Section */}
      <div className="mt-32 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get Involved</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join Perth's thriving startup community and connect with like-minded entrepreneurs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 left-0 h-2 w-full bg-black"></div>
                  <div className="p-8">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-gray-200">
                      <svg className="h-8 w-8 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-center text-lg font-bold text-gray-900">Morning Meetups</h3>
                    <p className="mt-4 text-center text-sm leading-relaxed text-gray-600">
                      We meet every two weeks rain, hail or shine. Founded by Scott & Dave and organized by founders, for founders.
                    </p>
                    <div className="mt-6 text-center">
                      <Link 
                        href="https://www.meetup.com/morning-startup-perth/" 
                        className="inline-flex items-center text-sm font-medium text-black transition hover:text-gray-700"
                      >
                        View Schedule
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 left-0 h-2 w-full bg-black"></div>
                  <div className="p-8">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-gray-200">
                      <svg className="h-8 w-8 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-center text-lg font-bold text-gray-900">Evening Sundowners</h3>
                    <p className="mt-4 text-center text-sm leading-relaxed text-gray-600">
                      Mornings not your thing? Join us for a sundowner on the first Wednesday of every month at Otherside of Nowhere.
                    </p>
                    <div className="mt-6 text-center">
                      <Link 
                        href="https://www.meetup.com/morning-startup-perth/events/" 
                        className="inline-flex items-center text-sm font-medium text-black transition hover:text-gray-700"
                      >
                        Learn More
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 left-0 h-2 w-full bg-black"></div>
                  <div className="p-8">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-gray-200">
                      <svg className="h-8 w-8 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-center text-lg font-bold text-gray-900">Stay Connected</h3>
                    <p className="mt-4 text-center text-sm leading-relaxed text-gray-600">
                      Join our Slack community to keep the conversation going between events and connect with fellow founders.
                    </p>
                    <div className="mt-6 text-center">
                      <Link 
                        href="https://morningstartup.slack.com/" 
                        className="inline-flex items-center text-sm font-medium text-black transition hover:text-gray-700"
                      >
                        Join Slack
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="absolute top-0 left-0 h-2 w-full bg-black"></div>
                  <div className="p-8">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 transition-all duration-300 group-hover:bg-gray-200">
                      <svg className="h-8 w-8 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                    </div>
                    <h3 className="mt-6 text-center text-lg font-bold text-gray-900">Past Events</h3>
                    <p className="mt-4 text-center text-sm leading-relaxed text-gray-600">
                      Missed a topic? Access our archive of amazing speakers and presentations from past events.
                    </p>
                    <div className="mt-6 text-center">
                      <Link 
                        href="https://perthvideo.com.au/morning-startup-perth/" 
                        className="inline-flex items-center text-sm font-medium text-black transition hover:text-gray-700"
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
      </div>
    </div>
  )
}