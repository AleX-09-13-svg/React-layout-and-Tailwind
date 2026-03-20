import { StrictMode } from "react"; //Обертка
import { createRoot } from "react-dom/client"; //функция для создания реакт рендера
import "./index.css"; //Импорт глобальных стилей
import App from "./App.jsx"; // Импортируем главный компонент

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
); //Находим контейнер в html и монтируем компонент App
