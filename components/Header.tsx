import Link from 'next/link'
import Image from 'next/image'
import UserButton from './UserButton'

export function Header() {
  return (
    <header className="flex justify-center border-b">
      <div className="flex justify-between items-center w-full h-16 max-w-3xl px-4 mx-auto sm:px-6">
        <div className="flex gap-4 items-center">
          <Link href="/">
            <Image src="/logo.svg" width={32} height={32} alt="Logo" />
          </Link>
          <span className="font-bold text-2xl">Lyh-Demo</span>
        </div>
        <UserButton />
      </div>
    </header>
  )
}
