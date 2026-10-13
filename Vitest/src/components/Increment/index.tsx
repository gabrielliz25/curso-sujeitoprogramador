import { useState } from "react"

const Increment = () => {
    const [value, setValue] = useState<number>(0)
    
    return <div>
        <span>Contador: {value}</span>
        <button onClick={() => setValue(value + 1)}>+1</button>
    </div>
}

export default Increment