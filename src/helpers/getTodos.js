export const getTodos = async (searchTerm) => {
    const url = `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`;
    const resp = await fetch(url);
    const tasksList = await resp.json();
    const tasks = tasksList.map((task) => {
        return {
            userId: task.userId,
            id: task.id,
            title: task.title,
            body: task.body,
        };
    });
    console.log(tasksList);
    return tasks;
};
