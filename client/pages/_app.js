import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TransferProvider } from "@/context/TransferContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TransferProvider>
        <Navbar />

        <Component {...pageProps} />
        <Footer/>

      </TransferProvider>
    </>
  );
}
