import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submit a Talk | Morning Startup Perth',
  description: 'Submit your talk proposal for Morning Startup Perth',
}

export default function SubmitTalkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}