import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Morning Startup Perth',
  description: 'About Morning Startup  - The largest startup community in Australia',
}

const team = [
  {
    name: 'Scott Glew',
    role: 'Community Lead',
    image: '/team/tom.jpg' //
  },
  {
    name: 'Erin Clark',
    role: 'Community Lead',
    image: '/team/tom.jpg' // 
  },
  {
    name: 'Nina Karisik',
    role: 'Community Lead',
    image: '/team/tom.jpg' //
  },  {
    name: 'Dave Newmann',
    role: 'Community Lead',
    image: '/team/tom.jpg'
  },
]

export default function AboutPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-black">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Building Perth's Startup Ecosystem
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Morning Startup is Perth's largest startup community, bringing together founders, 
            entrepreneurs, and innovators to share knowledge and build connections.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Our Mission
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  To foster innovation and entrepreneurship in Western Australia by creating 
                  meaningful connections and sharing knowledge.
                </p>
              </dd>
            </div>
            
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Our Community
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Over 7,000 members strong, our community includes founders, developers, 
                  investors, and startup enthusiasts.
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Our Events
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Regular meetups featuring successful founders, technical workshops, 
                  and networking opportunities.
                </p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the people behind Morning Startup Perth.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <img
                  className="aspect-[3/2] w-full h-full object-cover"
                  src={person.image}
                  alt={person.name}
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}