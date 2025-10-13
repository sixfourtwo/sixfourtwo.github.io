import styles from "./header.module.css";
import { Staatliches} from "next/font/google";
import { ReactNode } from "react";

const jacq = Staatliches({subsets: ["latin"], weight: "400"});

interface headerProps {
    children: ReactNode
    center?: boolean
}

export default function Header(props: headerProps) { 
    return (<div className={`${jacq.className} ${styles.header}`} style={props.center ? {textAlign: "center", fontSize: "4rem"} : {}}>
        {props.children}
    </div>);
}