export default function TasksList({ tasks }) {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
              <td>
                {task.isFavorite ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFB800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-star w-5 h-5">
                    <polygon points="2 9.24 9.76 9.24 12 2 14.24 9.24 22 9.24 16.12 14.76 18.24 22 12 17.76 5.76 22 7.88 14.76"></polygon>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4B5563"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-star w-5 h-5">
                    <polygon points="2 9.24 9.76 9.24 12 2 14.24 9.24 22 9.24 16.12 14.76 18.24 22 12 17.76 5.76 22 7.88 14.76"></polygon>
                  </svg>
                )}
              </td>
              <td>{task.title}</td>
              <td>
                <div>
                  {task.description.length > 100
                    ? task.description.slice(0, 100) + "..."
                    : task.description}
                </div>
              </td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag) => (
                    <li key={tag}>
                      <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">{task.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button className="text-red-500">Delete</button>
                  <button className="text-blue-500">Edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
