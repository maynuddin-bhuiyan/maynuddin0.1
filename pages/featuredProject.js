import React from 'react';
import FeaturedProject from '../Component/Home/FeaturedProject/FeaturedProject';
import Footer from '../Component/Shared/Footer/Footer';
import Navbar from '../Component/Shared/Navbar/Navbar';

const featuredProject = () => {
    return (
        <div>
            <Navbar />
            <FeaturedProject />
            <Footer />
        </div>
    );
};

export default featuredProject;