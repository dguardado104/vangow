export default function PageNotFound(){
  return(
    <main className="flex justify-center items-center h-screen">
      <div className="flex items-center gap-6">
        <span className="text-xl">404</span>
        <span className="w-[1px] h-16 bg-black"></span>
        <span>This page could not be found.</span>
      </div>
    </main>
  )
}