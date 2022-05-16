import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-6xl-container font-bold mt-20 text-white">
      <div className="text-6xl py-6">
        <Link href="/">
          <a>Uğur UYAR</a>
        </Link>
      </div>
      <nav className="space-x-6 flex justify-end text-xl">
        <Link href="/">
          <a>About Me</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/portfoli">
          <a>Portfolio</a>
        </Link>
        <Link href="/photos">
          <a>Photos</a>
        </Link>
        <Link href="/bookmarks">
          <a>Bookmarks</a>
        </Link>
      </nav>
    </header>
  )
}
