import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Your <head> content here (CV link, etc.) */}
      </head>
      {/* Set the body as a flex container, column direction */}
      <body className="flex flex-col min-h-screen"> 
        <ThemeProvider>
          <Navbar />
          
          {/* This main content area will now grow and push the footer down */}
          <main className="flex-grow">{children}</main> 
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
