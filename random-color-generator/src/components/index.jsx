import { useEffect, useState } from "react";

export default function RCG() {

    const [type, settype] = useState("hex");
    const [color, setcolor] = useState("#FFFFFF");

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

        setcolor(`rgb(${r}, ${g}, ${b})`);
    }

    useEffect(() => {
        if (type === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [type]);

    return (
        <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <section className="color-tool grid w-full gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
                <div className="flex flex-col justify-center text-center lg:text-left">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-white/60">
                        Random Color Generator
                    </p>
                    <h1 className="text-4xl font-black leading-tight text-[#10B981] sm:text-5xl lg:text-6xl">
                        Create fresh colors instantly
                    </h1>
                    <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
                        Switch between HEX and RGB, then generate a new color with a clean preview.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-wrap">
                        <button
                            className={`min-h-12 rounded-md px-6 font-bold transition focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#131619] ${type === "rgb" ? "bg-[#10B981] text-[#131619]" : "border border-white/10 bg-[#1B2023] text-[#FFFFFF] hover:border-[#10B981]"}`}
                            onClick={() => settype("rgb")}
                        >
                            RGB Type
                        </button>
                        <button
                            className={`min-h-12 rounded-md px-6 font-bold transition focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#131619] ${type === "hex" ? "bg-[#10B981] text-[#131619]" : "border border-white/10 bg-[#1B2023] text-[#FFFFFF] hover:border-[#10B981]"}`}
                            onClick={() => settype("hex")}
                        >
                            HEX Type
                        </button>
                        <button
                            className="min-h-12 rounded-md bg-[#10B981] px-6 font-bold text-[#131619] transition hover:bg-[#34D399] focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2 focus:ring-offset-[#131619]"
                            onClick={type === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}
                        >
                            Generate Color
                        </button>
                    </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-[#131619] p-4 sm:p-5">
                    <div
                        className="color-preview flex min-h-80 items-end overflow-hidden rounded-lg border border-white/10 p-4 shadow-inner sm:min-h-96"
                        style={{ background: color }}
                    >
                        <div className="w-full rounded-md bg-[#131619]/90 p-4 text-left backdrop-blur">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#10B981]">
                                {type} color
                            </p>
                            <p className="mt-2 break-all text-3xl font-black text-[#FFFFFF] sm:text-4xl">
                                {color}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>);


}
