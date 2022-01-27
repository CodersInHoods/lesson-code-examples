import { useState } from "react"

export const InputAndValue = () => {

    const [currentValue, setCurrentValue] = useState('guess');

    const handleInputChange = (event) => {
        setCurrentValue(event.target.value)
    }

    return <label>
        this is a reactive value p thing
        <input onChange={handleInputChange} />
        <p>{currentValue}</p>
    </label>
}