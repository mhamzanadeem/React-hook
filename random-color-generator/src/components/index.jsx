import { useEffect, useState } from "react";

export default function RCG() {

    const [type, settype] = useState("hex")
    const [color, setcolor] = useState("#FFFFFF")

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        // #678765
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setcolor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setcolor(`rgb(${r},${g}, ${b})`);
    }

    useEffect(() => {
        if (type === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [type]);

    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    width: "100%",
                    background: color,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <button style={{ backgroundColor: "#000000", color: "#FFFFFF", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => settype("rgb")}>
                    set RGB type
                </button>
                <button style={{ backgroundColor: "#000000", color: "#FFFFFF", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => settype("hex")}>
                    set Hex type
                </button>

                <button style={{ backgroundColor: "#000000", color: "#FFFFFF", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={type === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>
                    Generate color
                </button>

                <div style={{ color: "#000000" }}>Type: {type} Color: {color}</div>



            </div >
        </>);


}