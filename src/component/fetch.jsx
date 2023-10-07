import React, { useState, useEffect } from 'react';

function JsonTable() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch JSON data (replace with your JSON source)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>JSON Data Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>{data.key}</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default JsonTable;
