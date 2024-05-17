import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {}, [setIsQrCodeDefined]);

  const [url, setUrl] = useState("");
  const [isQrCodeDefined, setIsQrCodeDefined] = useState(false);

  const handleInputChange = (event) => {
    if (isQrCodeDefined === true) {
      return;
    }
    setUrl(event.target.value);
  };

  const handleQRCodeGeneration = () => {
    if (!url) {
      return;
    }
    setIsQrCodeDefined(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-200 to-blue-300">
      <h1 className="text-4xl font-bold mb-8 text-[#171a44]">
        QRCode Generator!
      </h1>

      {!isQrCodeDefined && (
        <div className="flex flex-col justify-center">
          <input
            type="text"
            className="w-72 px-4 py-[12px] mb-4 rounded-md shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite um link ou texto para gerar o QR Code"
            value={url}
            onChange={handleInputChange}
          />
          <button
            onClick={handleQRCodeGeneration}
            className="w-72 px-6 py-3 rounded-md bg-blue-500 text-white font-semibold shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Gerar QR Code
          </button>
        </div>
      )}

      {isQrCodeDefined && (
        <button
          onClick={() => setIsQrCodeDefined(false)}
          className="w-72 px-6 py-3 rounded-md bg-blue-500 text-white font-semibold shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Gerar novo QR Code
        </button>
      )}

      {isQrCodeDefined && (
        <motion.div
          className="p-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <QRCode value={url} size={250} />
        </motion.div>
      )}
    </div>
  );
}

export default App;
