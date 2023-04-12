
import Footer from "@/components/Footer";
import Middle from "@/components/Middle";
import { TransferProvider } from "@/context/TransferContext";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div>
        <TransferProvider>
          
          <Middle />
          
        </TransferProvider>
      </div>
    </div>
  );
}
