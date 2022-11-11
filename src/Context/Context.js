import React, { useState } from "react";

export const ContextData = React.createContext();

function ContextProvider({children}) {
    const [qiymat2, setQiymat] = useState(true);

    function click(){
        setQiymat(!qiymat2);
        console.log(qiymat2);
    }
    function add(item, setValue){
        setValue(+item + 1) ;
    }
    function subtract(item, setValue){
        if(item>0){
        setValue(+item - 1);
        }
    }
    return (
        <ContextData.Provider value={{click, qiymat2, add, subtract}}>
            {children}
        </ContextData.Provider>
    )
}

export default ContextProvider;