import styles from "./header.module.css";
import { Jacquard_12} from "next/font/google";
import { ReactNode } from "react";

const jacq = Jacquard_12({weight: "400", subsets: ["latin"]});

interface headerProps {
    children: ReactNode
}

export default function Header(props: headerProps) { 
    return (<div className={`${jacq.className} ${styles.header}`}>
        {props.children}
    </div>);
}