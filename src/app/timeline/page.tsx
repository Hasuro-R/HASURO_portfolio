import SubHeader from "@/components/header/SubHeader";
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
        card: 'summary',
        title: 'Timeline',
        description: 'HASUROのTimeline',
    },
}

export default function TimelinePage() {
    return (
        <>
        <SubHeader title='Timeline' />
        <MainTimeline />
        </>
    )
}
