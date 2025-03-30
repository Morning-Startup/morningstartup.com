'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Define sponsor data
const sponsors = [
  {
    tier: 'platinum',
    name: 'Spacecubed',
    logo: '/assets/img/sponsors/spacecubed.png',
    description: 'Spacecubed provides our beautiful event space. They offer a series of co-working and shared office spaces in Perth, Newman, as well as the East Coast.',
    website: 'https://www.spacecubed.com'
  },
  {
    tier: 'gold',
    name: 'JTSI',
    logo: '/assets/img/sponsors/jtsi.png',
    description: 'The Department of Jobs, Tourism, Science and Innovation (JTSI) offers an amazing array of programs and grants for everything from startups just starting out through to bridging grants for those raising capital.',
    website: 'https://www.wa.gov.au/organisation/department-of-jobs-tourism-science-and-innovation'
  },
  {
    tier: 'gold',
    name: 'Purpose Ventures',
    logo: '/assets/img/sponsors/purpose.png',
    description: 'Purpose Ventures is a venture capital fund based in Perth, Western Australia. They are industry agnostic and invest from Pre-Seed to Series B rounds. They are looking for purpose-driven founders who have ambition to build companies that can have global impact. They also supply us with caffeine! Just tell Joey Zaza you\'re at Morning Startup to get your free coffee!',
    website: 'https://www.purpose.ventures'
  },
  {
    tier: 'silver',
    name: 'AMMO Marketing',
    logo: '/assets/img/sponsors/ammo.png',
    description: 'Morning Startup wouldn\'t be possible without the support of the team from AMMO Marketing. They help founders accelerate growth through targeted marketing strategy. Check out their Weird Growth podcast if you haven\'t already - lots of amazing speakers.',
    website: 'https://www.ammo.marketing'
  },
  {
    tier: 'silver',
    name: 'Beacham Group',
    logo: '/assets/img/sponsors/beacham.png',
    description: 'Beacham Group has been another big supporter of ours who make this meetup possible. Beacham is a boutique IT and digital professional services recruitment firm. Check them out if you are looking for work or hiring.',
    website: 'https://www.beachamgroup.com'
  },
  {
    tier: 'silver',
    name: 'KeepSpace',
    logo: '/assets/img/sponsors/keepspace.png',
    description: 'The delicious baked goods that you enjoy are courtesy of the lovely team at KeepSpace. They are a 3rd Party Logistics (3PL) provider that can help accelerate your Ecommerce Order Fulfilment for businesses of all shapes & sizes. They offer Fulfilment Services, Dead Weight Shipping, Website APIs, Guaranteed Landing Costs on Beautiful Transparent Software.',
    website: 'https://www.keepspace.com.au'
  },
  {
    tier: 'silver',
    name: 'Perth Video',
    logo: '/assets/img/sponsors/perthvideo.png',
    description: 'The livestream is provided by the lovely people at PerthVideo.com.au. They can provide videography, streaming or AV work, anywhere in WA, for events of any size. They can make boring events look interesting via video recaps/highlights and can even create promotional videos for your startup.',
    website: 'https://www.perthvideo.com.au'
  }
]

// Define community partners
const partners = [
  {
    name: 'Startup WA',
    logo: '/assets/img/partners/startupwa.png',
    description: 'It\'s free to be a member and they do great work advocating for the ecosystem. Many of the government programs on offer are as a result of their lobbying.',
    website: 'https://www.startupwa.org'
  },
  {
    name: 'Startup News',
    logo: '/assets/img/partners/startupnews.png',
    description: 'Subscribe if you haven\'t already. Hits your inbox every week and keeps you up to date with what\'s happening in the WA startup ecosystem.',
    website: 'https://www.startupnews.com.au'
  },
  {
    name: 'Plus Eight',
    logo: '/assets/img/partners/pluseight.png',
    description: 'One of several startup incubator programs available in Perth.',
    website: 'https://www.pluseight.org'
  }
]

export default function SponsorsPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-black">Our Sponsors</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Supporting Perth's Startup Ecosystem
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the organizations helping us build and grow Perth's startup community.
            Morning Startup has been bringing the community together for many years, with over 7,000 members and bi-weekly events.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-x-8 gap-y-16 lg:gap-y-20 grid-cols-1 md:grid-cols-2">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.name}
              className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group"
            >
              <div className="h-48 bg-gray-50 flex items-center justify-center p-8 border-b">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Replace with actual image when available */}
                    <div className="bg-gray-200 h-20 w-40 rounded flex items-center justify-center text-gray-500 font-medium">
                      {sponsor.name} Logo
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold text-gray-900">{sponsor.name}</h3>
                </div>
                <p className="mt-4 text-sm text-gray-600 line-clamp-4">
                  {sponsor.description}
                </p>
                <div className="mt-6">
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-black hover:text-gray-700 inline-flex items-center"
                  >
                    Visit website
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Partners Section */}
        <div className="mx-auto mt-32 max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Community Partners</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Organizations that help build the broader WA startup ecosystem.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-3">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition group"
            >
              <div className="h-32 bg-gray-50 flex items-center justify-center p-6 border-b">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Replace with actual image when available */}
                    <div className="bg-gray-200 h-16 w-32 rounded flex items-center justify-center text-gray-500 font-medium">
                      {partner.name} Logo
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-4">
                <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {partner.description}
                </p>
                <div className="mt-4">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-black hover:text-gray-700 inline-flex items-center"
                  >
                    Learn more
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="mx-auto mt-32 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Become a Sponsor</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Support Perth's largest startup community and gain visibility among over 7,000 founders, 
            entrepreneurs, and innovators. We've been meeting every two weeks for many years, rain, hail or shine.
          </p>
          <div className="mt-10">
            <Link 
              href="/contact" 
              className="px-6 py-3 text-base font-medium text-white bg-black hover:bg-gray-800 rounded-full transition transform hover:scale-105 inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}