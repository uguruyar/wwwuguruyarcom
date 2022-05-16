import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-4xl-container py-6">
      <nav className="space-x-6">
        <Link href="/">
          <a>About Me</a>
        </Link>
        <Link href="/blog">
          <a>Articles</a>
        </Link>
        <Link href="/blog">
          <a>Portfolio</a>
        </Link>
        <Link href="/blog">
          <a>What I Read?</a>
        </Link>
        <Link href="/blog">
          <a>Bookmarks</a>
        </Link>
      </nav>
    </header>
  )
}
