import React from 'react'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import ImageOfLocationMap from './ImageOfLocationMap'
import ProjectSection from './ProjectSection'

function PageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <ProjectSection/>
        <AboutSection/>
        <ContactSection/>
        <ImageOfLocationMap/>
    </div>
  )
}

export default PageContent