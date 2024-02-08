export const getArticleIndexFromDeepList = (url: string) => {
    const splitted = url.split("/");
    const last = splitted[splitted.length - 1];
    return last;
}