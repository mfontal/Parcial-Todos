export const SearchResults = ({ results }) => {
    return (
        <>
            <ul>
                {results.map((result) => (
                    <div
                        className="card mt-4"
                        key={result.id}>
                        <h5 className="card-header">{result.userId}</h5>
                        <div className="card-body">
                            <h5 className="card-title">{result.title}</h5>
                            <p className="card-text">{result.body}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </>
    );
};
