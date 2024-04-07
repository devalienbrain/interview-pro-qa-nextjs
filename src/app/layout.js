import "./globals.css";

export const metadata = {
  title: "InterviewPRO",
  description: "Web Development Interview QA App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
