'use client';

// Removed useState as it wasn't used
import Image from 'next/image';
import Link from 'next/link';

// Define sponsor data - Updated per requirements
const sponsors = [
  {
    name: 'Spacecubed',
    logo: '/assets/img/sponsors/spacecubed.png',
    description: 'Spacecubed provides our beautiful event space. They offer a series of co-working and shared office spaces in Perth, Newman, as well as the East Coast.',
    website: 'https://www.spacecubed.com'
  },
  {
    name: 'JTSI',
    logo: '/assets/img/sponsors/dealroom.png', // Kept as per original code comment
    description: 'The Department of Jobs, Tourism, Science and Innovation (JTSI - pronounced Jit-see!) offers an amazing array of programs and grants for startups, from early stages to capital raising. They also encourage WA startups to list on Dealroom to strengthen ecosystem advocacy.',
    website: 'https://www.wa.gov.au/organisation/department-of-jobs-tourism-science-and-innovation'
  },
  {
    name: 'Purpose Ventures',
    logo: '/assets/img/sponsors/purpose.jpg', // Kept as per original code comment
    description: 'Purpose Ventures is a venture capital fund based in Perth, Western Australia. They are industry agnostic and invest from Pre-Seed to Series B rounds. They look for purpose-driven founders with ambition to build companies that can have global impact. They also supply us with caffeine! Just tell Joey Zaza you\'re at Morning Startup to get your free coffee!',
    website: 'https://www.purpose.ventures'
  },
  {
    name: 'AMMO Marketing',
    logo: '/assets/img/sponsors/ammo.png',
    description: 'Morning Startup wouldn\'t be possible without the support of the team from AMMO Marketing. They help founders accelerate growth through targeted marketing strategy. Check out their Weird Growth podcast if you haven\'t already - lots of amazing speakers.',
    website: 'https://www.ammo.marketing'
  },
  {
    name: 'Beacham Group',
    logo: '/assets/img/sponsors/beachem.png', // Kept as per original code comment
    description: 'Beacham Group has been another big supporter making this meetup possible. Beacham is a boutique IT and digital professional services recruitment firm. Check them out if you are looking for work or hiring.',
    website: 'https://www.beachamgroup.com'
  },
  {
    name: 'KeepSpace',
    logo: '/assets/img/sponsors/keepspace.png',
    description: 'The delicious baked goods attendees enjoy are courtesy of the lovely team at KeepSpace. For e-commerce businesses, they are a 3rd Party Logistics (3PL) provider offering Fulfilment Services, Dead Weight Shipping, Website APIs, and Guaranteed Landing Costs on transparent software.',
    website: 'https://www.keepspace.com.au'
  },
  {
    name: 'Perth Video',
    logo: '/assets/img/sponsors/perthvideo.png',
    description: 'The livestream is provided by the lovely people at PerthVideo.com.au. They offer videography, streaming, and AV work across WA for events of any size, creating engaging video recaps, highlights, and promotional videos for startups. Highly recommended for their accommodating service!',
    website: 'https://www.perthvideo.com.au'
  },
  {
    name: 'Meshpoints',
    logo: '/assets/img/sponsors/programsd.png', // Kept as per original code comment
    description: 'Meshpoints supports innovative startups through specialized programs designed to accelerate growth and success in the Perth ecosystem.',
    website: 'https://www.meshpoints.com'
  }
];

// Define ecosystem champions - Updated name and removed specified entities
const ecosystemChampions: any[] = [
  // Removed Plus Eight, Startup WA, and Startup News as requested
];

export default function SponsorsPage() {
  // Get current year for footer
  const currentYear = new Date().getFullYear();

  return (
    // Added overflow-hidden and flex structure like homepage
    <div className="relative min-h-screen animate-fade-in overflow-hidden bg-white flex flex-col">

      {/* Main Content Area */}
      <main className="flex-grow">

        {/* Header Section with Background Shapes */}
        <div className="relative isolate bg-gray-50 px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:px-8">
           {/* Background Shapes (Copied from homepage) */}
           <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" // Reduced opacity slightly
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>

          <div className="mx-auto max-w-2xl lg:text-center">
             {/* Title with gradient text */}
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Our Sponsors & Supporters
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the organizations helping us build and grow Perth's startup community. Morning Startup brings together over 7,000 members every two weeks, rain, hail or shine. Organized by founders, for founders, we connect and support the ecosystem.
            </p>
          </div>
          {/* Optional: Second background shape (Copied from homepage) */}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]" // Adjusted position slightly
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" // Reduced opacity slightly
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* Unified Sponsors Section - Updated Card Styling */}
        <div className="bg-white py-20 sm:py-24"> {/* Changed background to white */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8"> {/* Adjusted max-width */}
            <div className="mx-auto grid max-w-none grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"> {/* Adjusted grid layout */}
              {sponsors.map((sponsor) => (
                <div key={sponsor.name} className="group flex flex-col"> {/* Added flex flex-col */}
                  {/* Applied frosted glass effect, border hover, scale hover */}
                  <div className="relative flex-grow overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03]">
                    {/* Logo container - removed bg-gray-50 and border-b */}
                    <div className="h-40 flex items-center justify-center mb-4">
                      <div className="relative h-32 w-full"> {/* Adjusted height slightly */}
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          fill
                          style={{ objectFit: 'contain' }}
                          // Optional: Add placeholder on error
                          onError={(e) => { e.currentTarget.src = `https://placehold.co/300x150/e2e8f0/94a3b8?text=${encodeURIComponent(sponsor.name)}`; e.currentTarget.srcset = '' }}
                        />
                      </div>
                    </div>
                    <div className="flex-1"> {/* Removed padding here, added to parent */}
                      <h3 className="text-lg font-semibold text-gray-900">{sponsor.name}</h3>
                      <p className="mt-3 text-sm text-gray-600">
                        {sponsor.description}
                      </p>
                      <div className="mt-4">
                        <a
                          href={sponsor.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          // Using accent color for link
                          className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500"
                        >
                          Visit website
                          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ecosystem Champions Section - Only show if there are champions */}
        {ecosystemChampions.length > 0 && (
          <div
            className="relative bg-gray-50 py-20 sm:py-24"
             style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
               <div className="mx-auto max-w-2xl lg:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ecosystem Champions</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Organizations that help build the broader WA startup ecosystem.
                  </p>
                </div>

              <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {ecosystemChampions.map((champion) => (
                  <div key={champion.name} className="group flex flex-col">
                    <div className="relative flex-grow overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03]">
                      <div className="h-32 flex items-center justify-center mb-4">
                        <div className="relative h-24 w-full">
                           <Image
                            src={champion.logo || `https://placehold.co/200x100/e2e8f0/94a3b8?text=${encodeURIComponent(champion.name)}`}
                            alt={`${champion.name} logo`}
                            fill
                            style={{ objectFit: 'contain' }}
                            onError={(e) => { e.currentTarget.src = `https://placehold.co/200x100/e2e8f0/94a3b8?text=${encodeURIComponent(champion.name)}`; e.currentTarget.srcset = '' }}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{champion.name}</h3>
                        <p className="mt-3 text-sm text-gray-600">
                          {champion.description}
                        </p>
                        <div className="mt-4">
                          <a
                            href={champion.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500"
                          >
                            Learn more
                            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Join Us Section - Updated Button Style */}
        <div className="bg-white py-20 sm:py-24"> {/* Changed background */}
           <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center"> {/* Added padding */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Become a Sponsor</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Support Perth's largest startup community and gain visibility among over 7,000 founders,
              entrepreneurs, and innovators. We've been meeting every two weeks for many years, rain, hail or shine.
            </p>
            <div className="mt-10">
               {/* Matched button style to homepage */}
              <Link
                href="/contact"
                className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-md transform hover:scale-105 inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section (Copied from homepage) */}
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
  );
}