import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [url, setUrl] = useState("");
  const [isQRcodeSet, setIsQRcodeSet] = useState(false);

  const handleInputChange = (event) => {
    if (isQRcodeSet === true) {
      return;
    }
    setUrl(event.target.value);
  };

  const handleQRCodeGeneration = () => {
    if (!url) {
      return;
    }
    setIsQRcodeSet(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-200 to-blue-300">
      <h1 className="text-4xl font-bold mb-8 text-[#171a44]">
        QRCode Generator!
      </h1>

      {!isQRcodeSet && (
        <div className="flex flex-col justify-center">
          <input
            type="text"
            className="w-72 px-4 py-[12px] mb-4 rounded-md shadow-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o texto para gerar o QR Code"
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

      {isQRcodeSet && (
        <button
          onClick={() => setIsQRcodeSet(false)}
          className="w-72 px-6 py-3 rounded-md bg-blue-500 text-white font-semibold shadow-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Gerar novo QR Code
        </button>
      )}

      {isQRcodeSet && (
        <div className="p-4">
          <QRCode value={url} size={250} />
        </div>
      )}
    </div>
  );
}

export default App;
