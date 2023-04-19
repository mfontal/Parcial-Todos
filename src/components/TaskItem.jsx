export const TaskItem = ({ title, userId, id, body }) => {
    return (
        <>
            <div>
                <p>Titulo: {title}</p>
                <p>UserId: {userId}</p>
                <p>id: {id}</p>
                <p>Texto: {body}</p>
            </div>
            <hr />
        </>
    );
};
