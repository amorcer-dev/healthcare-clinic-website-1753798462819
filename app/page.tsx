import React from 'react';
import { ClinicHero } from '../components/HeroSection'
import { ClinicFeaturesGrid } from '../components/FeaturesGrid'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClinicHero
        title="HealthCare Clinic"
        subtitle="Professional healthcare services for you and your family"
        ctaText="Book Appointment"
        ctaLink="#contact"
        className=""
      />
      <ClinicFeaturesGrid
        features={[
        {
                "icon": "🩺",
                "title": "Telemedicine",
                "description": "Virtual doctor visits"
        },
        {
                "icon": "🧪",
                "title": "Lab Tests",
                "description": "On-site diagnostics"
        },
        {
                "icon": "📅",
                "title": "Easy Booking",
                "description": "Online appointments"
        }
]}
        className=""
      />
    </main>
  );
}