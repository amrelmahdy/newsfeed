export const getArticleIndexFromDeepList = (url: string) => {
    if(url === ""){
        return 0
    }
    const splitted = url.split("/").filter(item => item !== "");
    const last = parseInt(splitted[splitted.length - 1]);
    if(isNaN(last)){
        return 0
    }
    return last;
}