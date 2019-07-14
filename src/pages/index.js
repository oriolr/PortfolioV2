import React from "react"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="introduction">
      <h2>Hi There!</h2>
      <h3>My name is  Rosler.</h3> 
      <p>I am a Web Developer, Toastmaster and Podcaster</p>
      <button>Hire Me!</button>
    </section>
    <Projects />
    <About />
    <Contact />
  </Layout>
 
)

export default IndexPage
