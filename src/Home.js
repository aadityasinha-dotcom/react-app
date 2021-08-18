const Home = () => {

    let name = 'Adi';

    const handleClick = () => {
        name = 'Aryan';
    }

    const handleClickAgain = (name) => {
        console.log('hello' + name);
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('Adi')}>Click me again</button>
        </div>
    );
}
 
export default Home;