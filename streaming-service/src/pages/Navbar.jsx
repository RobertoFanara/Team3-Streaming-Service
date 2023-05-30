function Navbar() {
    return(
      <>
      <div className="nav-container">
        <div className="central-nav">
         <div className="home-div"><img src="/src/assets/images/home.svg" className="nav-icons"/><p className="nav-name">Home</p></div>
         <div className="category-div"><img src="/src/assets/images/category.svg" className="category-icon"/><p className="category-name">Categories</p></div>
         <div className="profile-div"><img src="/src/assets/images/user.svg" className="nav-icons"/><p className="nav-name">Profile</p></div>
        </div>

        <div className="right-nav">
         <div className="search-zone">
          <button className="nav-button">🔍︎</button>
          <input type="text" className="nav-search-bar" placeholder=" Search"/> 
         </div>

         <div className="user-nav">
         <img src="/src/assets/images/bell.svg" className="bell-icon"/>
         <img src="/src/assets/images/profile.svg" className="profile-icon"/>
         </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Navbar