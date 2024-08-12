import { auth } from '@/auth'
import prisma from '@/lib/prisma'

export default async function Home() {
  const session = await auth()
  const userCount = await prisma.user.count()
  const onlineCount = await prisma.session.count()
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col p-6 items-center justify-center">
          <div className="mb-2 text-3xl font-extrabold">{userCount}</div>
          <div className="text-gray-500 dark:text-gray-400">用户总数</div>
        </div>
        <div className="flex flex-col p-6 items-center justify-center">
          <div className="mb-2 text-3xl font-extrabold">{onlineCount}</div>
          <div className="text-gray-500 dark:text-gray-400">在线人数</div>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 rounded-md">
        <div className="p-4 font-bold bg-gray-200 rounded-t-md">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  )
}
