import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "My App",
  description: "Static Next.js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Sans&family=Geist+Mono&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"
          defer
        ></script>
      </head>
      <body className="font-geist-sans font-geist-mono antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}