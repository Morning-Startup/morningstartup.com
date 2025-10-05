"use client"

import { type Metadata } from "next" // Assuming Metadata type is correctly imported
import Link from "next/link"
import Image from "next/image" // Import Image component

// Note: Define Metadata in your page file (e.g., app/about/page.tsx)
// export const metadata: Metadata = {
//  title: 'About | Morning Startup Perth',
//  description: 'About Morning Startup - The largest startup community in Australia',
// };

// Team data remains the same
const team = [
	{
		name: "Scott Glew",
		role: "Community Lead",
		image: "/assets/img/team/scott.png",
	},
	{
		name: "Erin Clark",
		role: "Community Lead",
		image: "/assets/img/team/erin.jpg",
	},
	{
		name: "Nina Karisik",
		role: "Community Lead",
		image: "/assets/img/team/nina.jpg",
	},
	{
		name: "Dave Newmann",
		role: "Community Lead",
		image: "/assets/img/team/dave.png",
	},
]

export default function AboutPage() {
	// Get current year for footer
	const currentYear = new Date().getFullYear()

	return (
		// Added overflow-hidden and flex structure
		<div className="relative min-h-screen animate-fade-in overflow-hidden bg-white flex flex-col">
			{/* Main Content Area */}
			<main className="flex-grow">
				{/* Header Section with Background Shapes */}
				<div className="relative isolate bg-gray-50 px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:px-8">
					{/* Background Shapes */}
					<div
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>

					<div className="mx-auto max-w-2xl lg:text-center">
						{/* Title with gradient text */}
						<h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
							About Us
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Morning Startup is Perth's largest startup community, bringing together founders,
							entrepreneurs, and innovators to share knowledge and build connections.
						</p>
					</div>
					{/* Optional: Second background shape */}
					<div
						className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
				</div>

				{/* Mission/Community/Events Section */}
				<div className="bg-white py-20 sm:py-24">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						{/* Adjusted padding and max-width */}
						<div className="mx-auto max-w-5xl lg:max-w-none">
							<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:grid-cols-3">
								{/* Item 1: Mission */}
								<div className="flex flex-col items-center p-6 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50">
									{/* Optional Icon */}
									{/* <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"> <Icon /> </div> */}
									<dt className="text-xl font-semibold leading-7 text-gray-900">Our Mission</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										To foster innovation and entrepreneurship in Western Australia by creating
										meaningful connections and sharing knowledge.
									</dd>
								</div>

								{/* Item 2: Community */}
								<div className="flex flex-col items-center p-6 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50">
									{/* Optional Icon */}
									{/* <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"> <Icon /> </div> */}
									<dt className="text-xl font-semibold leading-7 text-gray-900">Our Community</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										Over 7,000 members strong, our community includes founders, developers,
										investors, and startup enthusiasts.
									</dd>
								</div>

								{/* Item 3: Events */}
								<div className="flex flex-col items-center p-6 rounded-lg transition duration-300 ease-in-out hover:bg-gray-50">
									{/* Optional Icon */}
									{/* <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50"> <Icon /> </div> */}
									<dt className="text-xl font-semibold leading-7 text-gray-900">Our Events</dt>
									<dd className="mt-2 text-base leading-7 text-gray-600">
										Regular meetups featuring successful founders, technical workshops, and
										networking opportunities.
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>

				{/* Team section - Modernized */}
				<div
					className="relative bg-gray-50 py-20 sm:py-24"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:text-center">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Our Team
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Meet the people behind Morning Startup Perth.
							</p>
						</div>

						{/* Team Grid - Using Card Style */}
						<div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
							{team.map((person) => (
								<div
									key={person.name}
									className="group flex flex-col"
								>
									{/* Frosted glass card for team members */}
									<div className="relative flex-grow overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03]">
										<div className="relative mx-auto h-48 w-48 rounded-full overflow-hidden mb-6 shadow-md">
											<Image
												className="h-full w-full object-cover"
												src={person.image}
												alt={person.name}
												width={192} // Provide width
												height={192} // Provide height
												onError={(e) => {
													e.currentTarget.src = `https://placehold.co/192x192/e2e8f0/94a3b8?text=${encodeURIComponent(
														person.name.charAt(0)
													)}`
													e.currentTarget.srcset = ""
												}}
											/>
										</div>
										<h3 className="text-lg font-semibold leading-7 text-gray-900">{person.name}</h3>
										<p className="text-sm leading-6 text-indigo-600">{person.role}</p>
										{/* Optional: Add social links or short bio here */}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</main>

			{/* Footer Section */}
			<footer
				className="bg-gray-900"
				aria-labelledby="footer-heading"
			>
				<h2
					id="footer-heading"
					className="sr-only"
				>
					Footer
				</h2>
				<div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
					<div className="xl:grid xl:grid-cols-3 xl:gap-8">
						<div className="space-y-8">
							{/* Optional: Logo */}
							<p className="text-sm leading-6 text-gray-300">
								Perth's largest startup community. Connecting founders, innovators, and the
								ecosystem.
							</p>
						</div>
						<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
							<div className="md:grid md:grid-cols-2 md:gap-8">
								<div>
									<h3 className="text-sm font-semibold leading-6 text-white">Navigate</h3>
									<ul
										role="list"
										className="mt-6 space-y-4"
									>
										<li>
											<Link
												href="/"
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												Home
											</Link>
										</li>
										<li>
											<Link
												href="/sponsors"
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												Sponsors
											</Link>
										</li>
										<li>
											<Link
												href="/about"
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												About
											</Link>
										</li>{" "}
										{/* Added About link */}
										<li>
											<Link
												href="/contact"
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												Contact
											</Link>
										</li>
									</ul>
								</div>
								<div className="mt-10 md:mt-0">
									<h3 className="text-sm font-semibold leading-6 text-white">Connect</h3>
									<ul
										role="list"
										className="mt-6 space-y-4"
									>
										<li>
											<a
												href="https://www.meetup.com/morning-startup-perth/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												Meetup Events
											</a>
										</li>
										<li>
											<a
												href="https://morningstartup.slack.com/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												Slack Community
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="md:grid md:grid-cols-1 md:gap-8">
								<div>
									<h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
									<ul
										role="list"
										className="mt-6 space-y-4"
									>
										<li>
											<a
												href="https://perthvideo.com.au/morning-startup-perth/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												Event Archives
											</a>
										</li>
										<li>
											<a
												href="https://www.startupwa.org"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												Startup WA
											</a>
										</li>
										<li>
											<a
												href="https://startupnews.com.au"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												Startup News
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
						<p className="text-xs leading-5 text-gray-400">
							&copy; {currentYear} Morning Startup Perth. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
