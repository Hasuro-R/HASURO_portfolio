import { routeIndex } from "@/lib/route/routeIndex";
import { MetadataRoute } from "next";

const url = 'https://hasuro.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = routeIndex.map((route) => ({
        url: `${url}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes];
};
