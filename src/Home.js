import { upstate } from 'react';

const Home = () => {
    //let name = 'Adi';
    const [name, setName] = useState('Adi');

    const handleClick = () => {
        setName('Aryan');
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;