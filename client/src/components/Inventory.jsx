import CreateItem from "./CreateItem"
import GetItems from "./GetItems"

const inventory = () => {
  return (
    <main className="flex flex-row w-screen h-screen">
      <CreateItem />
      <GetItems />
    </main>
  )
}

export default inventory