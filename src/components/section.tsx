import React from "react";

interface SectionProps {
    title: string;
}
export function Section(props: React.PropsWithChildren<SectionProps>) {
    return (
        <div className="px-4 pb-4">
            <div className="font-bold text-gray-200">{props.title}</div>
            <div>{props.children}</div>
        </div>
    )
}