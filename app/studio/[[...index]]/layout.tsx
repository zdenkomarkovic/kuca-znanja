export const metadata = {
  title: 'Sanity Studio',
  description: 'Admin dashboard for content management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 