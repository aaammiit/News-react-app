import React from 'react'

// Here we receive props and destructre this props 
function Navbar({ setCategory, setCountry ,setQuery ,query}) {

    // this is the function of pass query ans setQuery
    const handleSubmit = (event) => {
        // this is for not refresh pages 
        event.preventDefault();
      };
    
    // this is a coutry with there code
    const countries = {
        "ae": "United Arab Emirates",
        "ar": "Argentina",
        "at": "Austria",
        "au": "Australia",
        "be": "Belgium",
        "bg": "Bulgaria",
        "br": "Brazil",
        "ca": "Canada",
        "ch": "Switzerland",
        "cn": "China",
        "co": "Colombia",
        "cz": "Czech Republic",
        "de": "Germany",
        "eg": "Egypt",
        "fr": "France",
        "gb": "United Kingdom",
        "gr": "Greece",
        "hk": "Hong Kong",
        "hu": "Hungary",
        "id": "Indonesia",
        "ie": "Ireland",
        "in": "India",
        "it": "Italy",
        "jp": "Japan",
        "kr": "South Korea",
        "lt": "Lithuania",
        "lv": "Latvia",
        "ma": "Morocco",
        "mx": "Mexico",
        "my": "Malaysia",
        "ng": "Nigeria",
        "nl": "Netherlands",
        "nz": "New Zealand",
        "ph": "Philippines",
        "pl": "Poland",
        "pt": "Portugal",
        "ro": "Romania",
        "ru": "Russia",
        "sa": "Saudi Arabia",
        "se": "Sweden",
        "sg": "Singapore",
        "sk": "Slovakia",
        "th": "Thailand",
        "tr": "Turkey",
        "tw": "Taiwan",
        "ua": "Ukraine",
        "us": "United States",
        "ve": "Venezuela",
        "za": "South Africa"
    };
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand badge bg-light text-secondary fs-6" href="/">Mag-News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    {/* here set setCategory() with specific categroy General News  */}
                                    <p className="nav-link fs-6 mt-2" role="button" onClick={() => setCategory('general')}>General News</p>
                                </li>
                                <li className="nav-item">
                                     {/* here set setCategory() with specific categroy Entertainment  */}
                                    <p className="nav-link fs-6 mt-2" role="button" onClick={() => setCategory('entertainment')}>Entertainment</p>
                                </li>
                                <li className="nav-item">
                                    {/* here set setCategory() with specific categroy Sport  */}
                                    <p className="nav-link fs-6 mt-2" role="button" onClick={() => setCategory('sports')}>Sport</p>
                                </li>
                                <li className="nav-item">
                                    {/* here set setCategory() with specific categroy Bussiness  */}
                                    <p className="nav-link fs-6 mt-2" role="button" onClick={() => setCategory('business')}>Bussiness</p>
                                </li>
                                <li className="nav-item">
                                    {/* here set setCategory() with specific categroy science  */}
                                    <p className="nav-link fs-6 mt-2" role="button" onClick={() => setCategory('science')}>science</p>
                                </li>
                                <li className="nav-item">
                                    {/* here set setCategory() with specific categroy technology  */}
                                    <p className="nav-link fs-6 mt-2" role="button" onClick={() => setCategory('technology')}>technology</p>
                                </li>
                                <li className="nav-item dropdown">
                                    {/* Here Our Country Dropdown */}
                                    <a className="nav-link dropdown-toggle fs-6 mt-2" id="navbarDropdownMenuLink" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country
                                    </a>
                                    <ul className="dropdown-menu" style={{ maxHeight: '300px', overflowY: 'auto' }} aria-labelledby="navbarDropdownMenuLink">
                                        {/* here we itreate over countries object through map() and get coutrys by there code*/}
                                        {Object.keys(countries).map((countryCode, _) => (
                                            <li key={countryCode}>
                                                {/* here we setCountry() by countrycode  use onClick() and filter the articles  */}
                                                <p className="dropdown-item text-primary" role="button" onClick={() => setCountry(countryCode)}>
                                                    {/* here all countres */}
                                                    {countries[countryCode]}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* this is a form for pass query and serach articles function is handleSubmit() */}
                        <form className="d-flex" onSubmit={handleSubmit}>
                            {/* here we use value,and onchange() and setQuery That target value */}
                            <input className="form-control me-2" value={query} type="search" placeholder="Search" aria-label="Search" onChange={(event) => setQuery(event.target.value)} />
                        </form>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Navbar