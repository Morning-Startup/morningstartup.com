"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<nav
			className={`fixed w-full z-50 top-0 transition-all duration-300 ${
				scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-20">
					<div className="flex items-center">
						<Link
							href="/"
							className="flex items-center"
						>
							<Image
								src="/assets/img/logo-original.png"
								alt="Morning Startup Logo"
								width={250}
								height={250}
							/>
						</Link>
					</div>

					{/* Desktop menu */}
					<div className="hidden sm:flex sm:items-center sm:space-x-1">
						<Link
							href="https://www.meetup.com/morning-startup-perth/"
							className="px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded-full transition"
						>
							Events
						</Link>
						<Link
							href="/about"
							className="px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded-full transition"
						>
							About
						</Link>
						<Link
							href="/sponsors"
							className="px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded-full transition"
						>
							Sponsors
						</Link>
						<Link
							href="/submit-talk"
							className="ml-2 px-5 py-2 text-sm text-white bg-black hover:bg-gray-800 rounded-full transition transform hover:scale-105"
						>
							Submit Talk
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="sm:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-700 hover:text-black transition"
						>
							{isOpen ? (
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`sm:hidden transition-all duration-300 ease-in-out ${
					isOpen ? "opacity-100 max-h-64" : "opacity-0 max-h-0 overflow-hidden"
				}`}
			>
				<div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-sm">
					<Link
						href="/events"
						className="block px-3 py-2 text-base text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition"
					>
						Events
					</Link>
					<Link
						href="/about"
						className="block px-3 py-2 text-base text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition"
					>
						About
					</Link>
					<Link
						href="/sponsors"
						className="block px-3 py-2 text-base text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition"
					>
						Sponsors
					</Link>
					<Link
						href="/submit-talk"
						className="block px-3 py-2 text-base text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition"
					>
						Submit Talk
					</Link>
				</div>
			</div>
		</nav>
	)
}
