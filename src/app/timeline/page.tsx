import Header from "@/components/header/Header";
import MainTimeline from "@/components/home/timeline/MainTimeline";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Timeline',
    description: 'HASUROのTimeline',
    openGraph: {
        title: 'Timeline',
        description: 'HASUROのTimeline',
    },
    twitter: {
        title: 'Timeline',
        description: 'HASUROのTimeline',
    },
}

export default function TimelinePage() {
    return (
        <>
        <Header title='Timeline' />
        <MainTimeline />
        </>
    )
}
