import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Du Lịch Vinh - Cửa Lò | 30/04 - 01/05/2026',
  description: 'Kế hoạch du lịch Vinh Cửa Lò Nghệ An 2 ngày 1 đêm - Lịch trình cực chi tiết cho nhóm 5 người, ngân sách 2 triệu/người',
  keywords: 'du lịch vinh, cửa lò, nghệ an, 30/4, 1/5, 2026, lịch trình, hải sản, cháo lươn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
