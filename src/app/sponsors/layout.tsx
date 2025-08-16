import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sponsors | Morning Startup Perth',
  description: 'Our sponsors and supporters at Morning Startup Perth',
}

export default function SponsorsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}