import { useState } from 'react';
import { useTranslation } from "react-i18next";

function CVButton() {
  const { t } = useTranslation();
  const [pdfUrl] = useState('/renedo-santiago/Renedo-Santiago-CV.pdf'); // Ruta del PDF en la carpeta public

  const handleOpenPDF = () => {
    // Abre el PDF en una nueva pestaña
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="relative pt-2">
      <button
  onClick={handleOpenPDF}
  className="bg-lime-400 hover:shadow-md hover:shadow-lime-900 hover:scale-[105%] text-black font-bold mt-4 lg:-mt-2 py-2 px-4 rounded duration-300 move transition-all ease-in-out"
  style={{ minWidth: '138px' }}
>
  {t("cv-button")}
</button>
    </div>
  );
}

export default CVButton;