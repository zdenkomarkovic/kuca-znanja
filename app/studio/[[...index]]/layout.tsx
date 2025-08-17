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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            background: #fff;
            overflow-x: hidden;
          }
          
          /* Reset svega što može doći iz glavne aplikacije */
          .studio-container {
            all: unset;
            display: block;
            width: 100%;
            height: 100vh;
          }
        `}</style>
      </head>
      <body>
        <div className="studio-container">
          {children}
        </div>
      </body>
    </html>
  )
} 