import About from '@/components/about/About'
import Blog from '@/components/blog/Blog'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Projects from '@/components/projects/Projects'
import Reviews from '@/components/reviews/Reviews'
import Services from '@/components/services/Services'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Reviews />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home