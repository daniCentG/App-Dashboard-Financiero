import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";
import ReportsContent from "./ReportsContent";
import UsersContent from "./UsersContent";
import SettingsContent from "./SettingsContent";
import { translations } from "../translations";

const FinancialDashboard = ({ darkMode, setDarkMode, setIsLoggedIn }) => {
  // Estado para controlar si la barra lateral está abierta o cerrada
  const [open, setOpen] = useState(true);
  // Estado para controlar si el submenú está abierto o cerrado
  const [submenuOpen, setSubmenuOpen] = useState(false);
  // Estado para controlar la pestaña activa
  const [activeTab, setActiveTab] = useState("dashboard");
  // Estado para controlar la moneda seleccionada
  const [currency, setCurrency] = useState("USD");
  // Estado para controlar el tipo de informe seleccionado
  const [reportType, setReportType] = useState("sales");
  // Estado para controlar el idioma seleccionado
  const [language, setLanguage] = useState("en");

  // Traducciones basadas en el idioma seleccionado
  const t = translations[language];

  // Función para manejar el cambio de moneda
  const handleCurrencyChange = (value) => {
    setCurrency(value);
  };

  // Función para manejar el cambio de idioma
  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  return (
    <div className={`flex ${darkMode ? "dark" : ""} ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"}`}>
      <Sidebar
        open={open}
        setOpen={setOpen}
        submenuOpen={submenuOpen}
        setSubmenuOpen={setSubmenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        t={t}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setReportType={setReportType}
        setIsLoggedIn={setIsLoggedIn}
      />
      <div className={`p-7 flex-1 ${darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-900"} shadow-lg`}>
        {activeTab === "dashboard" && <DashboardContent t={t} darkMode={darkMode} language={language} />}
        {(activeTab === "sales" || activeTab === "purchase") && <ReportsContent t={t} darkMode={darkMode} reportType={reportType} currency={currency} />}
        {activeTab === "users" && <UsersContent t={t} darkMode={darkMode} />}
        {activeTab === "settings" && <SettingsContent t={t} darkMode={darkMode} currency={currency} handleCurrencyChange={handleCurrencyChange} language={language} handleLanguageChange={handleLanguageChange} />}
      </div>
    </div>
  );
};

export default FinancialDashboard;
