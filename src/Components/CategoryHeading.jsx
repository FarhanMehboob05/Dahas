import React from "react";

export default function CategoryHeading({ h2Heading }) {
    return (
        < section className="container mx-auto my-6 p-4" >
            < h2 className="text-3xl font-bold text-center mb-4" >
                {h2Heading}
            </ h2>
        </section >
    )
}

