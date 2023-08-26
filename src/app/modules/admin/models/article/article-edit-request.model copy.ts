export interface UpdateArticleRequest{
    title: string;
    hero: string;
    urlHandle: string;
    thumbnail: string;
    content: string;
    summary: string;
    publishedAt: Date;
    isPublished: boolean;
    isDeleted: boolean;
}