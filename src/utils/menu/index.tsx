import MenuItems from "../../components/menu-items";

export default function Menu() {
  return (
    <div className="menu-container">
      <MenuItems number={1} step='step 1' title='your info'  />
      <MenuItems number={2} step='step 2' title='SELECT PLAN'  />
      <MenuItems number={3} step='step 3' title='ADD-ONS'  />
      <MenuItems number={4} step='step 4' title='SUMMARY'  />
    </div>
  )
}
