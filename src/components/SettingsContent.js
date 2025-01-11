import React from "react";
import { MdOutlineCurrencyExchange, MdLanguage } from "react-icons/md";

const SettingsContent = ({ t, darkMode, currency, handleCurrencyChange, language, handleLanguageChange }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{t.settings}</h1>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow-lg space-y-6`}>
        <div>
          <h2 className="text-lg font-semibold mb-4">{t.currencySettings}</h2>
          <div className="flex items-center space-x-4">
            <MdOutlineCurrencyExchange className="text-2xl text-gray-500" />
            <select
              value={currency}
              onChange={(e) => handleCurrencyChange(e.target.value)}
              className="border rounded p-2 w-40 text-gray-500">
              <option value="USD">USD (US Dollar)</option>
              <option value="PYG">PYG (Guarani)</option>
              <option value="EUR">EUR (Euro)</option>
            </select>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">{t.languageSettings}</h2>
          <div className="flex items-center space-x-4">
            <MdLanguage className="text-2xl text-gray-500" />
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="border rounded p-2 w-40 text-gray-500">
              <option value="en">{t.english}</option>
              <option value="es">{t.spanish}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
