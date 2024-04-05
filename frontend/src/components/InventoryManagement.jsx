import NewItem from "./NewItem"
import GetItems from "./GetItems"

const InventoryManagement = () => {
  return (
    <main className="flex flex-row w-screen h-screen">
      <NewItem />
      <GetItems />
    </main>
  )
}

export default InventoryManagement