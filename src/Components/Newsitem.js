import React from 'react'
import image1 from '..//assest//th.jpeg';

// here we receive props and destrutre
function Newsitem({ title, description, url, image }) {
    return (
        <>
        {/* here we show our all aritcle in card form */}
            <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '300px' }}>
                <img src={image ? image : image1} style={{ height: '200px', width: '280px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title?title.slice(0, 40):"AmitBhai"}</h5>
                    <p className="card-text">{description }</p>
                    <a href={url} rel="noreferrer" target='_blank' className="btn btn-primary">Read More</a>
                </div>
            </div>

        </>
    )
}

export default Newsitem