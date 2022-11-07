import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Provider } from "react-redux";
import store from "./redux/reducers/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

//Redux yapısını kurduktan sonra 9. ve 10. satırı import edip <App/> i provider içine alıp
//15.satırdaki gibi oluşturduğumuz store'u Provider'a tanıtıyoruz.
