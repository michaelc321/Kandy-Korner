import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const KandyContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const KandyProvider = (props) => {
    const [Kandys, setKandys] = useState([])

    const getKandys = () => {
        return fetch("http://localhost:8088/Kandys")
            .then(res => res.json())
            .then(setKandys)
    }

    const addKandy = Kandy => {
        return fetch("http://localhost:8088/Kandys", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Kandy)
        })
            .then(getKandys)
    }

    /*
        You return a context provider which has the
        `Kandys` state, the `addKandy` function,
        and the `getKandy` function as keys. This
        allows any child elements to access them.
    */
    return (
        <KandyContext.Provider value={{
            kandys, addKandy, getKandys
        }}>
            {props.children}
        </KandyContext.Provider>
    )
}