import React, { useContext, useEffect } from "react"

export const KandyList = () => {
    const { kandy, getKandy } = useContext(KandyContext)
}

useEffect(() => {
    getKandy()
}, [])

