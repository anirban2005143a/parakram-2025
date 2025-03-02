import React from 'react'
import { HeroParallax } from '../../../components/aceternity/parallax';

const MemorySection = () => {

    const products = [
        {
            title: "Moonbeam",
            // link: "https://gomoonbeam.com",
            thumbnail:
                "/memories/cric.jpeg",
        },
        {
            title: "Cursor",
            link: "https://cursor.so",
            thumbnail:
                "/memories/foot.jpg",
        },
        {
            title: "Rogue",
            link: "https://userogue.com",
            thumbnail:
                "/memories/cri.jpeg",
        },

        {
            title: "Editorially",
            link: "https://editorially.org",
            thumbnail:
                "/memories/cric2.jpeg",
        },
        {
            title: "Editrix AI",
            link: "https://editrix.ai",
            thumbnail:
                "/memories/athe.jpg",
        },
        {
            title: "Pixel Perfect",
            link: "https://app.pixelperfect.quest",
            thumbnail:
                "/memories/chess.jpeg",
        },

        {
            title: "Algochurn",
            link: "https://algochurn.com",
            thumbnail:
                "/memories/foot2.jpg",
        },
        {
            title: "Aceternity UI",
            link: "https://ui.aceternity.com",
            thumbnail:
                "/memories/athe.jpg",
        },
        {
            title: "Tailwind Master Kit",
            link: "https://tailwindmasterkit.com",
            thumbnail:
                "/memories/foot3.jpg",
        },
        {
            title: "SmartBridge",
            link: "https://smartbridgetech.com",
            thumbnail:
                "/memories/chess.jpeg",
        },
        {
            title: "Renderwork Studio",
            link: "https://renderwork.studio",
            thumbnail:
                "/memories/chess.jpeg",
        },

        {
            title: "Creme Digital",
            link: "https://cremedigital.com",
            thumbnail:
                "/memories/cric2.jpeg",
        },
        {
            title: "Golden Bells Academy",
            link: "https://goldenbellsacademy.com",
            thumbnail:
                "/memories/cric.jpeg",
        },
        {
            title: "Invoker Labs",
            link: "https://invoker.lol",
            thumbnail:
                "/memories/chess.jpeg",
        },
        {
            title: "E Free Invoice",
            link: "https://efreeinvoice.com",
            thumbnail:
                "/memories/cri.jpeg",
        },
    ];


    return (
        <section id='memories' >
            <HeroParallax products={products} />;
        </section>
    )
}

export default MemorySection