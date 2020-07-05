import React from "react"
import Layout from "../layouts"
import SEO from "./seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Watch two streams simultaneously with Duel.to!</h1>
    <p>We currently only support Twitch, but stay tuned for more live streaming services to be supported soon.</p>

    <section>
      <h2>How To Use:</h2>
      <p>All you have to do is put the Twitch usernames of the channels you want to watch in the url like the following examples.</p>
      <ul>
        <li>
          <a href="/angrypug/puppers">https://watch.duel.to/angrypug/puppers</a>
        </li>
        <li>
          <a href="/dansgaming/giantwaffle">https://watch.duel.to/dansgaming/giantwaffle</a>
        </li>
      </ul>
    </section>

  </Layout>
)

export default IndexPage