const Home = () => {
    return (
        <div className="bg-image">
            <form>
                <div className="head">
                    <h1>Contact Form</h1>
                    <p>Please fill all the texts in the fields</p>
                </div>
                <label for="fullName">Your Name:</label>
                <input type="text" placeholder="Full Name" name="fullName"></input>
        
                <label for="email">Your Email:</label>
                <input type="email" placeholder="abcd@xyz.com" name="email" required></input>
        
                <label for="subject">Subject:</label>
                <input type="subject" placeholder="Job Enquiry" name="text" required></input>
                
                <label for="message">Message:</label>
                <textarea placeholder="Your Message Here" name="message" required></textarea>
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default Home;