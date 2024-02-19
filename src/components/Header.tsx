import { type PropsWithChildren} from "react"

type HeaderProps = {
    image:{
        src: string, 
        alt: string
    }
}

export default function Header({children, image}: PropsWithChildren<HeaderProps>){
    return(
        <header>
            <img {...image} />
            {children}
        </header>
    )
}