import { createContext, useState } from "react";

const context = [];
const setContext = function () {};

export const PokemonsDetailsContext = createContext([context, setContext]);

export const PokemonsDetailsContextProvider = function (props) {
  const [context, setContext] = useState();

  return (
    <PokemonsDetailsContext.Provider value={[context, setContext]}>
      {props.children}
    </PokemonsDetailsContext.Provider>
  );
};
