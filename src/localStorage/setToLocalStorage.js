export const toLocalStorage = (localPost, jsonArr, key) => {
    if (!localPost) {
        const json = JSON.stringify(jsonArr);
        localStorage.setItem(key, json);
        return;
    }

    jsonArr.push(localPost);
    const json = JSON.stringify(jsonArr);
    localStorage.setItem(key, json);
}
