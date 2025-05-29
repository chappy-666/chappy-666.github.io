import Link from "next/link";
import React from "react";

export default function Header() {
    return(
    <header className="w-full text-xl tracking-wide">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4 ">
            <Link href="/" className="font-bold text-2xl">chappy</Link>
        </div>
    </header>
    )
}
