import { upstate, useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum', author: 'mario', id: 1 },
        { title: 'Welcome Party', body: 'lorem ipsum', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum', author: 'mario', id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map(() => (
                <div className="blog-preview" key={blogs.id}>
                    <h2>{ blogs.title }</h2>
                    <p>Written by { blogs.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;