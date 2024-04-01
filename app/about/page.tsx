import Heading from "../components/Heading"
import AboutLayout from "../layouts/about-layout"

export const metadata = {
  title: 'Praxis Website - About',
  description: 'About descr'
}

export default function About() {
    return ( 
      <AboutLayout>
        <div className='d-flex justify-content-center fixed-bottom-text text-secondary bg-light'>
          <Heading>About</Heading>
        </div>
      </AboutLayout>
    )
}