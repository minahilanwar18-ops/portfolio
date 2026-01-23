import './globals.css'; // Add this import

export const metadata = {
  title: "Graphic Designer Portfolio",
  description: "Creative UI/UX & Graphic Design Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
