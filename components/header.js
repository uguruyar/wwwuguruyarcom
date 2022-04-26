import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-4xl-container py-6">
      <nav className="space-x-6">
        <Link href="/">
          <a>Hakkımda</a>
        </Link>
        <Link href="/blog">
          <a>Yazılar</a>
        </Link>
        <Link href="/blog">
          <a>Yazılar</a>
        </Link>
        <Link href="/blog">
          <a>Yazılar</a>
        </Link>
        <Link href="/blog">
          <a>Yazılar</a>
        </Link>
      </nav>
    </header>
  )
}
