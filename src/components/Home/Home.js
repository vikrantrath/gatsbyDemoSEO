import React from 'react'
import FeaturedSection from './HomeComponents/FeaturedSection'
import WhyChooseUs from './HomeComponents/WhyChooseUs'

export default function Home() {
    return (
        <section id="Home">
            <WhyChooseUs />
            <FeaturedSection />
        </section>
    )
}