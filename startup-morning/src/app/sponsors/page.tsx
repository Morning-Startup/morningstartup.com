'use client'

import { useState } from 'react'

export default function SponsorsPage() {
  const [activeTier] = useState('all')

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
          </p>
        </div>

        {/* Add your sponsors content here */}
      </div>
    </div>
  )
}