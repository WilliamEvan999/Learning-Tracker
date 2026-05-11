import {
  user,
  stats,
  courses,
  tasks,
  activities,
} from "@/app/data";

import StatCard from "@/app/component/StatCard";
import DashboardPanel from "@/app/component/DashboardPanel";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* WELCOME SECTION */}
      <section>
        <h1 className="text-3xl font-bold text-slate-800">
          Hello, {user.name} 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Ready to continue learning today?
        </p>
      </section>

      {/* STATS CARDS */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={
              stat.title === "Total Courses"
                ? "📚"
                : stat.title === "Completed Tasks"
                ? "✅"
                : stat.title === "Study Hours"
                ? "⏰"
                : "🔥"
            }
          />
        ))}

      </section>

      {/* FOCUS + DEADLINES */}
      <section className="grid gap-6 lg:grid-cols-2">

        {/* TODAY'S FOCUS */}
        <DashboardPanel
          title="Today's Focus"
          href="/tasks"
        >

          {tasks
            .filter((task) => !task.completed)
            .slice(0, 3)
            .map((task) => (
              <div
                key={task.id}
                className="rounded-xl border border-orange-200 bg-orange-50 p-4"
              >

                <div className="flex items-center gap-3">

                  <div className="h-3 w-3 rounded-full bg-orange-400" />

                  <p className="font-medium text-slate-700">
                    {task.title}
                  </p>

                </div>

                <p className="mt-2 text-sm text-slate-500">
                  Priority task for today
                </p>

              </div>
            ))}

        </DashboardPanel>

        {/* UPCOMING DEADLINES */}
        <DashboardPanel
          title="Upcoming Deadlines"
          href="/calendar"
        >

          <div className="rounded-xl border border-red-200 bg-red-50 p-4">

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-slate-800">
                Calculus Quiz
              </h3>

              <span className="rounded-lg bg-red-100 px-2 py-1 text-xs text-red-600">
                Tomorrow
              </span>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Mathematics • 09:00 AM
            </p>

          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 p-4">

            <div className="flex items-center justify-between">

              <h3 className="font-semibold text-slate-800">
                English Presentation
              </h3>

              <span className="rounded-lg bg-red-100 px-2 py-1 text-xs text-red-600">
                May 15
              </span>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              English Speaking
            </p>

          </div>

        </DashboardPanel>

      </section>

      {/* ACTIVE COURSES */}
      <DashboardPanel
        title="Active Courses"
        href="/courses"
      >

        {courses.slice(0, 3).map((course) => (
          <div key={course.id}>

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-semibold text-slate-800">
                  {course.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {course.category} • {course.lessons} Sessions
                </p>

              </div>

              <span className="text-sm font-semibold text-sky-700">
                {course.progress}%
              </span>

            </div>

            <div className="mt-3 h-2 w-full rounded-full bg-slate-200">

              <div
                className="h-2 rounded-full bg-sky-600"
                style={{
                  width: `${course.progress}%`,
                }}
              />

            </div>

          </div>
        ))}

      </DashboardPanel>

      {/* RECENT ACTIVITY */}
      <DashboardPanel
        title="Recent Activity"
        href="/activity"
      >

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between border-b border-slate-100 pb-4"
          >

            <p className="text-sm text-slate-700">
              {activity.activity}
            </p>

            <span className="text-xs text-slate-400">
              {activity.time}
            </span>

          </div>
        ))}

      </DashboardPanel>

    </div>
  );
}