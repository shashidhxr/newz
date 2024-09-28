import Avatar from "./Avatar"

interface AppbarProps {
  name: string
}

export default function Appbar({
  name
}: AppbarProps){
    return (
      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-center bg-gray-400 p-2">
          <div className="text-xl font-bold">
            newz
          </div>
          <div className="flex justify-between"> 
            <div className="mx-3">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                  subscribe
                </button>
            </div>
            <div className="mx-3">
                <Avatar name={name}></Avatar>
            </div>
          </div>
        </div>
      </div>
      )
}