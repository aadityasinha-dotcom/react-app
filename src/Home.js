import { upstate, useState } from 'react';

const Home = () => {
    //let name = 'Adi';
    const [name, setName] = useState('Adi');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Aryan');
        setAge(14);
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;