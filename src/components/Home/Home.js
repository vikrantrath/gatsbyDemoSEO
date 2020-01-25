import React from 'react'
import FeaturedSection from './HomeComponents/FeaturedSection'
import WhyChooseUs from './HomeComponents/WhyChooseUs'
import Solutions from './HomeComponents/Solutions'
import Industry from './HomeComponents/Industry'
import LatestPublication from './HomeComponents/LatestPublication'
import Benefits from './HomeComponents/Benefits'
import Clients from './HomeComponents/Clients'

export default function Home() {
    return (
        <section id="Home">
            <FeaturedSection />
            <Solutions />
            <Industry />
            <LatestPublication />
            <Benefits />
            <Clients />
            <WhyChooseUs />
        </section>
    )
}