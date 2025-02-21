"use client"
import { store } from "@/redux/store"
import { Provider } from "react-redux"



const CustomProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Provider store={store}>{children}</Provider>
    </div>
  )
}

export default CustomProvider