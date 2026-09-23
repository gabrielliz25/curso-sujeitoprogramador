import { createPeople } from "./createPeople"
import alterarNome from "./createPeople"

const p1 = createPeople("Gabriel", "Liz", 19)

alterarNome(p1, "João")
console.log(p1)