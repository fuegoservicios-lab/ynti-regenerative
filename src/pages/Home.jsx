import React from 'react';
import Hero from '../components/Hero';
import BlogFeed from '../components/BlogFeed';
import ExperienceEducation from '../components/ExperienceEducation';
import Skills from '../components/Skills';
import SuccessStories from '../components/SuccessStories';

const Home = () => {
    return (
        <>
            <Hero />
            <BlogFeed />
            <ExperienceEducation />
            <Skills />
            <SuccessStories />
        </>
    );
};

export default Home;
