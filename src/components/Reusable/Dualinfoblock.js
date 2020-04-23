import React from 'react'
import Heading from './Heading';
import { Link } from 'gatsby';

export default function Dualinfoblock({ heading }) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">This is a learning Website</p>
                    </div>
                    <div className="col-4">
                        <div className="card bg-dark">
                            <img src="https://images.pexels.com/photos/2756845/pexels-photo-2756845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="card-img-top" alt="goes here" />
                            <div className="card-body">
                                <h5 className="card-title text-success">Just Click photos</h5>
                                <p className="card-text text-white">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <Link to="#" className="btn btn-warning btn-block">{heading}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
