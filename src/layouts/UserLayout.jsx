import Header from "../components/Header"

export default function UserLayout({ children }) {
  return (
    <main className="font-abc text-secondary">
      <Header headerAnimation />
      <div className="mt-28 grow">
        {children}
      </div>
      <footer className="bg-[#87d2d8] p-8 flex justify-between">
        <span>Torres de Las Americas, Punta Pacifica, Panama.</span>
        <span>©2024 Vangow. All Rights Reserved</span>
      </footer>
    </main>
  )
}