import React from "react";
import theme from "@/theme";
import {Container, CssBaseline, ThemeProvider} from "@mui/material";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <html lang="en">
      <body>
      <header>
      </header>
      <main>
        <Container maxWidth="xl">
          {children}
        </Container>
      </main>
      </body>
      </html>
    </ThemeProvider>
  )
}
