function HomePage() {
  return (
    <>
      <div className="site-6xl-container text-white">
        <div className="space-y-4">
          <p>
            Hey, I'm a Senior Software Engineer at Company. I enjoy working with
            Next.js and crafting beautiful front-end experiences.
          </p>
          <p>
            This portfolio is built with Next.js and a library called Nextra. It
            allows you to write Markdown and focus on the content of your
            portfolio.
          </p>

          <p>Deploy your own in a few minutes.</p>
        </div>
        <hr></hr>
        <div>
          <ul class="list-disc list-inside">
            <li>Twitter @uguruyarx</li>
            <li>Github @uguruyar</li>
            <li>Linkedin @uguruyar</li>
            <li>Email uguruyarx@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="site-6xl-container mt-20">
        <img src="/i-am.jpeg" alt="" />
      </div>
    </>
  )
}

export default HomePage
