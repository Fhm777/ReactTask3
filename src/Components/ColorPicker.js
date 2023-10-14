import { useState } from "react";
import { Block } from './Block';

export function ColorPicker (props) {
    const [bool,setBool] = useState(false); 
    const [bg,setBg] = useState(""); 

    const Blocks = () => {
        if (bool) {
            return props.colors.map ((val) => {
                return <Block onclick={() => {setBg(val); setBool(false);}} color={val}></Block>
            })
        }
    }

    return (
        <div style={{width: "75%", height: "75%", backgroundColor: bg, boxShadow: "0px 0px 20px black", borderRadius: 20, margin: "auto"}}>
            <div style={{paddingTop: "20%", width: "120%", left: "-9.3%",position: "relative"}}>
                {Blocks()}
                <div style={{marginTop: 15}}>
                    <button onClick={() => {setBool(true)}} style={{fontSize: 15, backgroundColor: "yellowgreen", color: "white", border: 0, padding: 10}}>Pick a color</button>
                </div>
            </div>
        </div>
    )
}