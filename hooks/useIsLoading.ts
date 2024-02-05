
const createIsLoading = (bool: any) => {
    localStorage.setItem('isLoading', bool)
    window.dispatchEvent(new Event("storage"));
}

export default createIsLoading;

