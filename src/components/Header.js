const Header = () => {
    return(
       <header>
          <div className= "logo">
            <img src= "	https://flowbite.com/docs/images/logo.svg"/>
            <h2>GeekFood</h2>
          </div>
          <div className="list">
            <ul>
                <li>Home</li>
                <li>Quote</li>
                <li>Restraunts</li>
                <li>Food</li>
                <li>Contact</li>
            </ul>
          </div>
          <button className="getstart">Get Started</button>
       </header>
    );
}

export default Header;