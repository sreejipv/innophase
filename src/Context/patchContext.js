import { createContext } from 'react'

const PatchContext = createContext({
    patchName: "",
    setPatchName: () => {}
  })

export default PatchContext