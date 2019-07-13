import React from "react"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hi There!</h2>
    <h3>My name is  Rosler. I am a Web Developer, Toastmaster and Podcaster</h3>
    <Projects />
    <About />
    <Contact />
  </Layout>
 
)

export default IndexPage
