import Menu from "../../components/users/Menu";
import UserLayout from "../../layouts/UserLayout";

export default function Profile() {
  return (
    <UserLayout>
      <article className="px-4 md:px-16 min-h-screen flex">
        <Menu />
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus debitis quod recusandae, eos quae cumque atque laborum, quaerat rerum voluptas commodi sunt accusantium et deleniti eaque adipisci veritatis maiores exercitationem!
        </section>
      </article>
    </UserLayout>
  )
}