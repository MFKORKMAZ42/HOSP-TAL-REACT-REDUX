/*
1.store'a konulacak stateler için oluşturulan reducer'ları import et.
2.import ettiğin reducerları store'a yüklemek üzere combine(birleştirme) et.
3Combine edilen state'leri store'a yükle
*/

import { combineReducers, createStore } from "redux";

import hastalarReducer from "./hastalarReducer";
import randevularReducer from "./randevularReducer";
import islemlerReducer from "./islemlerReducer";

const rootReducer = combineReducers({
  hastalarState: hastalarReducer,
  randevularState: randevularReducer,
  islemler: islemlerReducer,
});

const store = createStore(rootReducer);

export default store;
