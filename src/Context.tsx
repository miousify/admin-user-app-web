import React from "react";

export  const StoreContext= React.createContext({
    store: {
        id: undefined,
        token: undefined
    }
});

export interface AppContextInterface {
    store: {
        email:string,
        token: string,
        id: string
    }
}
export const AppContext = React.createContext<AppContextInterface>({
    store: {
        email:"",
        token: "",
        id: ""
    }
});
