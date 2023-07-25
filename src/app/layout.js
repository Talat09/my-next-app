"use client";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import Loader from "./component/Loader";
import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin", "Poppins"] });

// export const metadata = {
//   title: "Talat Mahmud Portfolio",
//   description: "Next-Js-APP",
// };

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time according to your needs
  }, []);
  return (
    <html lang="en">
      <body className="bg-black">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
