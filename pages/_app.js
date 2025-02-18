// pages/_app.js
import "../styles/globals.css";
import Header from "../components/Header/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
