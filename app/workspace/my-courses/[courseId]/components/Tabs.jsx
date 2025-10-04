"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Tabs ({courseId, activeTab}) {
    const pathname = usePathname
    const tabs = [
        {label: "Lessons", value: "lessons"},
        {label: "Quizzes", value: "quizzes"},
        {label: "Assignments", value: "assignments"},
        {label: "Announcement", value: "announcement"}
    ];

    return (
        <div className="flex gap-6 border-b border-grey-600 mb-4">
            {tabs.map((tab) => (
                <Link
                key={tab.value}
                href={`/workspace/my-courses/${courseId}?tab=${tab.value}`}
                className={`
                pb-2 text-sm
                capitalize transition-all
                ${activeTab === tab.value ? "text-green-500 border-b-2 border-green-500 font-semibold" : " text-gray-800 hover:text-green-400"}
                `}
                >
                    {tab.label}
                </Link>
            ))}
        </div>
    );
}