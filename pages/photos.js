function Photos() {
  return (
    <>
      <div className="site-6xl-container text-white">
        <div className="space-y-4">
          <div className="py-10 text-2xl text-highlight">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              beatae aliquam laborum provident a, ullam ex vel nobis aspernatur
              nisi aperiam, praesentium excepturi! Obcaecati alias rem
              voluptatem quod, voluptatibus nisi!
            </p>
            <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div class=" border border-zinc-200 rounded-xl p-4 dark:border-zinc-700">
                <a
                  href="https://unsplash.com/@uguruyar"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="hover:underline"
                >
                  Unsplash Views
                </a>
                <p class="mt-1 text-3xl font-bold spacing-sm text-highlight">
                  000
                </p>
              </div>
              <div class=" border border-zinc-200 rounded-xl p-4 dark:border-zinc-700">
                <a
                  href="https://unsplash.com/@uguruyar"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="hover:underline"
                >
                  Unsplash Downloads
                </a>
                <p class="mt-1 text-3xl font-bold spacing-sm text-highlight">
                  000
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-between">
            <img src="/public/photos/x.jpg" alt="x" />
            <img src="/public/photos/y.jpg" alt="y" />
            <img src="/public/photos/z.jpg" alt="z" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Photos
