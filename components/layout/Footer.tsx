import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full h-20 pt-7 flex text-center justify-center bg-white">
            <p className="text-sm">
                © {new Date().getFullYear()} Miyu. All rights reserved.
            </p>
        </footer>
    )
}