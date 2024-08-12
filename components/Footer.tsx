import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex justify-center">
      <Link
        className="my-4"
        href="https://github.com/liuyuhe666"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with ❤️ by Liu Yuhe
      </Link>
    </footer>
  )
}
