"use client";

import { ReactNode } from "react";

interface Props {
    title: string;
    value: number;
    icon: ReactNode;
}

export default function StatCard({
    title,
    value,
    icon
}: Props) {

    return (

        <div className="rounded-xl border bg-white dark:bg-zinc-900 p-6 shadow-sm">

            <div className="flex justify-between">

                <div>

                    <p className="text-sm text-gray-500">

                        {title}

                    </p>

                    <h2 className="text-3xl font-bold mt-2">

                        {value}

                    </h2>

                </div>

                <div className="text-blue-600">

                    {icon}

                </div>

            </div>

        </div>

    );

}