import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        
        {/* LOGO */}
        <div className="border-b border-slate-800 px-6 py-5">
          <h1 className="text-2xl font-bold text-sky-400">
            Learnify
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Learning Tracker
          </p>
        </div>

        {/* MENU */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">

            <li>
              <Link
                href="/Dashboard"
                className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-800"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                href="/courses"
                className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-800"
              >
                Courses
              </Link>
            </li>

            <li>
              <Link
                href="/tasks"
                className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-800"
              >
                Tasks
              </Link>
            </li>

            <li>
              <Link
                href="/progress"
                className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-800"
              >
                Progress
              </Link>
            </li>

            <li>
              <Link
                href="/calendar"
                className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-800"
              >
                Calendar
              </Link>
            </li>

            <li>
              <Link
                href=""
                className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-slate-800"
              >
                Settings
              </Link>
            </li>

          </ul>
        </nav>

        {/* USER PROFILE */}
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-slate-800 p-4">

            {/* PROFILE PHOTO */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
              Z
            </div>

            {/* USER INFO */}
            <div>
              <p className="text-sm font-semibold text-white">
                Zierss
              </p>

              <button className="mt-1 text-xs text-slate-400 hover:text-red-400">
                Logout
              </button>
            </div>

          </div>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}