import PublicLayout from "../layouts/PublicLayout";

export default function PageNotFound() {
  return (
    <PublicLayout>
      <main className="flex justify-center items-center h-screen text-secondary font-abc">
        <div className="flex items-center gap-6">
          <span className="text-xl">404</span>
          <span className="w-[1px] h-16 bg-secondary"></span>
          <span>This page could not be found.</span>
        </div>
      </main>
    </PublicLayout>
  )
}