"use client"

import Link from "next/link"
import { ChatBubbleLeftRightIcon, VideoCameraIcon } from "@heroicons/react/24/outline"

export default function Home() {
	const currentYear = new Date().getFullYear()

	return (
		<div className="relative min-h-screen animate-fade-in overflow-hidden bg-white flex flex-col">
			<main
				className="flex-grow"
				role="main"
				aria-label="Main content"
			>
				<div className="relative isolate px-6 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:px-8">
					<div
						className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
						aria-hidden="true"
					>
						<div
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>

					<div className="mx-auto max-w-3xl">
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
								Western Australia's Largest
								<br />
								<span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl sm:text-7xl font-extrabold tracking-tight mt-3">
									Startup Community
								</span>
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Join over 7,000 founders, entrepreneurs, and innovators building the future of tech
								in Western Australia.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<Link
									href="https://www.meetup.com/morning-startup-perth/"
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									aria-label="View upcoming events on Meetup (opens in new tab)"
								>
									View Events
								</Link>
								<Link
									href="/submit-talk"
									className="group text-sm font-semibold leading-6 text-gray-900 transition duration-300 ease-in-out hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
									aria-label="Submit a talk proposal"
								>
									Submit a Talk{" "}
									<span
										aria-hidden="true"
										className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
									>
										→
									</span>
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
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
						/>
					</div>
				</div>

				{/* Stats Section */}
				<section
					className="pt-12 pb-16 sm:pt-16 sm:pb-24"
					aria-labelledby="stats-heading"
				>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<h2
							id="stats-heading"
							className="sr-only"
						>
							Community Statistics
						</h2>
						<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
							<div className="mx-auto flex max-w-xs flex-col gap-y-4">
								<dt className="text-base leading-7 text-gray-600">Active Members</dt>
								<dd
									className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
									aria-label="Over 7,000 active members"
								>
									7,000+
								</dd>
							</div>
							<div className="mx-auto flex max-w-xs flex-col gap-y-4">
								<dt className="text-base leading-7 text-gray-600">Events Hosted</dt>
								<dd
									className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
									aria-label="Over 200 events hosted"
								>
									200+
								</dd>
							</div>
							<div className="mx-auto flex max-w-xs flex-col gap-y-4">
								<dt className="text-base leading-7 text-gray-600">Speaker Talks</dt>
								<dd
									className="order-first text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl"
									aria-label="Over 500 speaker talks"
								>
									500+
								</dd>
							</div>
						</dl>
					</div>
				</section>

				{/* Our Events Section - Modernized with Equal Height Cards */}
				<section
					className="relative bg-gray-50 py-24 sm:py-32"
					aria-labelledby="events-heading"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d1d5db' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:text-center">
							<h2
								id="events-heading"
								className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
							>
								Our Events
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Organised by founders, for founders — Join Perth's thriving startup community and
								connect with like-minded entrepreneurs.
							</p>
						</div>

						<div className="mx-auto mt-20 max-w-5xl">
							{/* Updated grid with equal height cards using h-full and flex */}
							<div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
								{/* Card 1: Morning Meetups */}
								<article className="group h-full">
									{/* Added h-full and flex flex-col for equal height */}
									<div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03] h-full flex flex-col focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
										<div className="w-full h-32 rounded-lg overflow-hidden mb-6">
											<img
												src="/assets/img/photos/morning-startup.jpg"
												alt="Morning Startup event showing attendees networking and listening to a speaker"
												className="h-full w-full object-cover"
											/>
										</div>
										<h3 className="mt-6 text-center text-lg font-semibold leading-6 text-gray-900">
											Morning Startup
										</h3>
										<div className="mt-4 flex justify-center gap-2">
											<span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-4 w-4 text-indigo-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												7:30am
											</span>
											<span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-4 w-4 text-indigo-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 8c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8zm0-2c3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 3.314 2.686 6 6 6z"
													/>
												</svg>
												Riff, 45 St Georges Tce
											</span>
										</div>
										<p className="mt-4 text-center text-sm leading-6 text-gray-600">
											Our 'OG' meetup at 7:30 am <strong>every second Wednesday</strong>, rain hail
											or shine! We'll host an awesome speaker or pitch event, with coffee, food and
											startup banter!
										</p>
										<div className="mt-6 flex-1">
											<h3 className="text-left font-semibold text-base mb-3">Agenda</h3>
											<ul className="pl-0 mb-4 flex flex-col gap-2 text-left">
												<li className="flex items-start gap-2">
													<span className="mt-1 text-indigo-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M5 13l4 4L19 7"
															/>
														</svg>
													</span>
													<span className="text-sm leading-6 text-gray-600">
														<strong>7:30 am</strong>: Shameless plugs and announcements. Introduce
														yourself or announce your startup to the Perth startup community!
													</span>
												</li>
												<li className="flex items-start gap-2">
													<span className="mt-1 text-indigo-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M5 13l4 4L19 7"
															/>
														</svg>
													</span>
													<span className="text-sm leading-6 text-gray-600">
														<strong>7:45 am</strong>: An awesome startup related talk, panel or
														pitch practice session!
													</span>
												</li>
												<li className="flex items-start gap-2">
													<span className="mt-1 text-indigo-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M5 13l4 4L19 7"
															/>
														</svg>
													</span>
													<span className="text-sm leading-6 text-gray-600">
														<strong>8:30 am</strong>: Networking &amp; delicious breakfast treats
													</span>
												</li>
												<li className="flex items-start gap-2">
													<span className="mt-1 text-indigo-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M5 13l4 4L19 7"
															/>
														</svg>
													</span>
													<span className="text-sm leading-6 text-gray-600">
														<strong>9:00 am</strong>: Finish
													</span>
												</li>
											</ul>
										</div>
										<p className="text-center text-sm leading-6 text-gray-600 flex-1">
											Can't make it in person? Join the{" "}
											<a
												href="https://perthvideo.com.au/morning-startup-perth"
												target="_blank"
												rel="noopener noreferrer"
												className="text-indigo-600 underline hover:text-indigo-500"
											>
												live stream on PerthVideo.com.au
											</a>{" "}
											courtesy of the Department of Jobs, Science, Tourism, and Innovation.
										</p>
										<div className="mt-6 text-center">
											<Link
												href="https://www.meetup.com/morning-startup-perth/"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
												aria-label="View Morning Startup schedule on Meetup (opens in new tab)"
											>
												View Schedule on meetup.com
												<svg
													className="ml-1 h-4 w-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M14 5l7 7m0 0l-7 7m7-7H3"
													/>
												</svg>
											</Link>
										</div>
									</div>
								</article>

								{/* Card 2: Founder Sundowners */}
								<article className="group h-full">
									<div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03] h-full flex flex-col focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
										<div className="w-full h-32 rounded-lg overflow-hidden mb-6">
											<img
												src="/assets/img/photos/founder-sundowner.jpg"
												alt="Founder Sundowner event showing founders networking at a casual evening gathering"
												className="h-full w-full object-cover"
											/>
										</div>
										<h3 className="mt-6 text-center text-lg font-semibold leading-6 text-gray-900">
											Founder Sundowner
										</h3>
										<div className="mt-4 flex justify-center gap-2">
											<span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-4 w-4 text-indigo-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
												5:30pm
											</span>
											<span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="h-4 w-4 text-indigo-500"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 8c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8zm0-2c3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 3.314 2.686 6 6 6z"
													/>
												</svg>
												Otherside of Nowhere, West Leederville
											</span>
										</div>

										<p className="mt-4 text-center text-sm leading-6 text-gray-600 flex-1">
											Mornings not your thing? Join us for a casual sundowner on the{" "}
											<strong>first Wednesday of every month</strong> at Otherside of Nowhere in
											West Leederville.
										</p>

										<div className="mt-6 flex-1">
											<h3 className="text-left font-semibold text-base mb-3">Agenda</h3>
											<ul className="pl-0 mb-4 flex flex-col gap-2 text-left">
												<li className="flex items-start gap-2">
													<span className="mt-1 text-indigo-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M5 13l4 4L19 7"
															/>
														</svg>
													</span>
													<span className="text-sm leading-6 text-gray-600">
														<strong>5:30 pm</strong>: Find the Founder Sundowner table! We're
														usually right by the door, but ask the amazing bar staff and they'll
														point you in the right direction.
													</span>
												</li>
												<li className="flex items-start gap-2">
													<span className="mt-1 text-indigo-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M5 13l4 4L19 7"
															/>
														</svg>
													</span>
													<span className="text-sm leading-6 text-gray-600">
														<strong>5:31pm</strong>: Start chatting with other founders! There are
														no speakers or formalities. Just a bunch of startups, in a pub, having
														fun, and learning from each other.
													</span>
												</li>
												<li className="flex items-start gap-2">
													<span className="mt-1 text-indigo-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M5 13l4 4L19 7"
															/>
														</svg>
													</span>
													<span className="text-sm leading-6 text-gray-600">
														<strong>8:00 pm (ish)</strong>: Finish
													</span>
												</li>
											</ul>
										</div>

										<p className="text-center text-sm leading-6 text-gray-600 flex-1">
											Pizza is provided courtesy of our amazing sponsors, but save up ahead of time
											to cover the cost of your own Perth-priced-drinks!
										</p>
										<div className="mt-6 text-center">
											<Link
												href="https://www.meetup.com/morning-startup-perth/events/"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
												aria-label="View Founder Sundowner schedule on Meetup (opens in new tab)"
											>
												View Schedule on meetup.com
												<svg
													className="ml-1 h-4 w-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M14 5l7 7m0 0l-7 7m7-7H3"
													/>
												</svg>
											</Link>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>

				{/* Connect or Binge Section */}
				<section
					className="py-24 sm:py-32"
					aria-labelledby="connect-heading"
				>
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:text-center">
							<h2
								id="connect-heading"
								className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
							>
								Connect or Binge
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Stay engaged with our community between events. Connect with fellow founders Slack
								or binge the archive or our past events.
							</p>
						</div>

						<div className="mx-auto mt-20 max-w-5xl">
							<div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
								{/* Card 1: Stay Connected */}
								<article className="group h-full">
									<div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03] h-full flex flex-col focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
										<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												enable-background="new 0 0 2447.6 2452.5"
												viewBox="0 0 2447.6 2452.5"
												aria-hidden="true"
											>
												<g
													clip-rule="evenodd"
													fill-rule="evenodd"
												>
													<path
														d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z"
														fill="#36c5f0"
													/>
													<path
														d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z"
														fill="#2eb67d"
													/>
													<path
														d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z"
														fill="#ecb22e"
													/>
													<path
														d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0"
														fill="#e01e5a"
													/>
												</g>
											</svg>
										</div>
										<h3 className="mt-6 text-center text-lg font-semibold leading-6 text-gray-900">
											Stay Connected
										</h3>
										<p className="mt-4 text-center text-sm leading-6 text-gray-600 flex-1">
											Join our Slack community to keep the conversation going between events and
											connect with fellow founders.
										</p>
										<div className="mt-6 text-center">
											<Link
												href="https://morningstartup.slack.com/"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
												aria-label="Join our Slack community (opens in new tab)"
											>
												Join Slack
												<svg
													className="ml-1 h-4 w-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M14 5l7 7m0 0l-7 7m7-7H3"
													/>
												</svg>
											</Link>
										</div>
									</div>
								</article>

								{/* Card 2: Past Events */}
								<article className="group h-full">
									<div className="relative overflow-hidden rounded-xl border border-gray-200/80 bg-white/60 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:border-indigo-300 group-hover:scale-[1.03] h-full flex flex-col focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
										<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 transition-all duration-300 group-hover:bg-indigo-100">
											<VideoCameraIcon
												className="h-8 w-8 text-indigo-600"
												aria-hidden="true"
											/>
										</div>
										<h3 className="mt-6 text-center text-lg font-semibold leading-6 text-gray-900">
											Past Events
										</h3>
										<p className="mt-4 text-center text-sm leading-6 text-gray-600 flex-1">
											Missed a topic? Access our archive of amazing speakers and presentations from
											past events.
										</p>
										<div className="mt-6 text-center">
											<Link
												href="https://perthvideo.com.au/morning-startup-perth/"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center text-sm font-medium text-indigo-600 transition duration-300 ease-in-out hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
												aria-label="Watch archived event videos on PerthVideo (opens in new tab)"
											>
												Watch Archives
												<svg
													className="ml-1 h-4 w-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M14 5l7 7m0 0l-7 7m7-7H3"
													/>
												</svg>
											</Link>
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>
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
						{/* Optional: Logo/Description */}
						<div className="space-y-8">
							{/* If you have a logo SVG or Image component, place it here */}
							{/* <img className="h-7" src="/path/to/your/logo-white.svg" alt="Company name" /> */}
							<p className="text-sm leading-6 text-gray-300">
								Perth's largest startup community. Connecting founders, innovators, and the
								ecosystem.
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
									<ul
										role="list"
										className="mt-6 space-y-4"
									>
										<li>
											<Link
												href="/"
												className="text-sm leading-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
											>
												Home
											</Link>
										</li>
										<li>
											<Link
												href="/sponsors"
												className="text-sm leading-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
											>
												Sponsors
											</Link>
										</li>
										{/* Add other relevant internal links */}
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
												className="text-sm leading-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
												aria-label="View events on Meetup (opens in new tab)"
											>
												Meetup Events
											</a>
										</li>
										<li>
											<a
												href="https://morningstartup.slack.com/"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm leading-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
												aria-label="Join our Slack community (opens in new tab)"
											>
												Slack Community
											</a>
										</li>
										<li>
											<Link
												href="/contact"
												className="text-sm leading-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
											>
												Contact Us
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="md:grid md:grid-cols-1 md:gap-8">
								{" "}
								{/* Adjusted for single column */}
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
												className="text-sm leading-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
												aria-label="Watch event archives on PerthVideo (opens in new tab)"
											>
												Event Archives
											</a>
										</li>
										{/* Add links to Startup WA, Startup News etc. if desired */}
										<li>
											<a
												href="https://www.startupwa.org"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm leading-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
												aria-label="Visit Startup WA website (opens in new tab)"
											>
												Startup WA
											</a>
										</li>
										<li>
											<a
												href="https://startupnews.com.au"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm leading-6 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
												aria-label="Read startup news (opens in new tab)"
											>
												Startup News
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* Copyright */}
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
