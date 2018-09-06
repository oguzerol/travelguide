class slideController {
    fetchSearchTopStories() {
        return fetch(`https://www.reddit.com/r/travel/top.json?limit=5`)
            .then(response => response.json())
            .then(result =>result.data.children.map(obj => obj.data))
    }
}

export default slideController;

