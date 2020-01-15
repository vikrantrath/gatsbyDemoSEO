import React from 'react'
import FeaturedSection from './HomeComponents/FeaturedSection'
import WhyChooseUs from './HomeComponents/WhyChooseUs'
import Solutions from './HomeComponents/Solutions'

export default function Home() {
    return (
        <section id="Home">
            <FeaturedSection />
            <Solutions />
            <WhyChooseUs />
        </section>
    )
}