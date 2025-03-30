import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Morning Startup Perth',
  description: 'About Morning Startup  - The largest startup community in Australia',
}

const team = [
  {
    name: 'Scott Glew',
    role: 'Community Lead',
    image: '/assets/img/team/scott.jpg'
  },
  {
    name: 'Erin Clark',
    role: 'Community Lead',
    image: '/assets/img/team/erin.jpg'
  },
  {
    name: 'Nina Karisik',
    role: 'Community Lead',
    image: '/assets/img/team/nina.jpg'
  },  
  {
    name: 'Dave Newmann',
    role: 'Community Lead',
    image: '/assets/img/team/dave.png'
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
      </div>

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-full bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the people behind Morning Startup Perth.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-20 sm:grid-cols-2 md:gap-x-24">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col items-center group">
                <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 shadow-md bg-white p-1 transform transition duration-300 group-hover:shadow-lg group-hover:scale-105">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={person.image}
                    alt={person.name}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                <p className="text-base text-gray-600 mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}