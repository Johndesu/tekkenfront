export interface Article{
    id: number;
    title: string;
    hero: string;
    urlHandle: string;
    thumbnail: string;
    content: string;
    summary: string;
    publishedAt: number;
    isPublished: boolean;
    isDeleted: boolean;
}