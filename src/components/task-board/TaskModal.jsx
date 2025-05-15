import { useState } from "react";

export default function TaskModal({ onSave, taskToUpdate, onCloseModal }) {
  const [task, setTask] = useState(
    taskToUpdate ?? {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavorite: false,
    }
  );

  const isAdd = Object.is(taskToUpdate, null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());

  //   const tagsArr = data.tags.split(",").map((tag) => tag.trim());

  //   const newData = {
  //     ...data,
  //     tags: tagsArr,
  //     isFavorite: false,
  //   };

  //   console.log(newData);

  //   setTasks((prevTasks) => [...prevTasks, newData]);
  //   setShowTaskModal(false);
  //   // Here you can send the data to your backend or perform any other action
  // };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "tags") {
      value = value.split(",").map((tag) => tag.trim());
    }
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <>
      <div
        onClick={onCloseModal}
        className="bg-black/30 h-full w-full z-20 fixed top-0 left-0"></div>

      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 absolute top-30 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 ">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Update Task"}
        </h2>

        {/* <!-- inputs --> */}
        <div className="space-y-9 text-white lg:space-y-10">
          {/* <!-- title --> */}
          <div className="space-y-2 lg:space-y-3">
            <label for="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              // onChange={(e) => setTask({ ...task, title: e.target.value })}
              onChange={handleChange}
              required
            />
          </div>
          {/* <!-- description --> */}
          <div className="space-y-2 lg:space-y-3">
            <label for="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required></textarea>
          </div>
          {/* <!-- input group --> */}
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            {/* <!-- tags --> */}
            <div className="space-y-2 lg:space-y-3">
              <label for="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>
            {/* <!-- priority --> */}
            <div className="space-y-2 lg:space-y-3">
              <label for="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required>
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        {/* <!-- inputs ends --> */}
        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            // type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSave(task, isAdd);
            }}
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80">
            {isAdd ? "Create New Task" : "Update Task"}
          </button>
        </div>
      </form>
    </>
  );
}
