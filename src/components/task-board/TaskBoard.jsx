import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskModal from "./TaskModal";
import TasksList from "./TasksList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Task Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Javscript", "React"],
    priority: "high",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleOnSave = (task, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, task]);
    } else {
      setTasks(tasks.map((t) => (task.id === t.id ? task : t)));
    }
    setShowTaskModal(false);
  };

  const handleOnEdit = (task) => {
    setTaskToUpdate(task);
    setShowTaskModal(true);
  };

  const handleCloseModal = () => {
    setTaskToUpdate(null);
    setShowTaskModal(false);
  };

  const [noTasksFoundText, setNoTasksFoundText] = useState("No Tasks Found. Please Add One.");

  const handleSearch = (searchTerm) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredTasks.length === 0) {
      setNoTasksFoundText("No Tasks Found for this search term.");
    }
    setTasks(filteredTasks);
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  const handleFav = (id) => {
    // const taskIndex = tasks.findIndex((task) => task.id === id);
    // const newTasks = [...tasks];
    // newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    // setTasks(newTasks);

    // The better way of managing updates in the object within an array as a state in react.
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, isFavorite: !task.isFavorite } : task))
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto relative">
        <SearchTask onSearch={handleSearch} />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions setShowTaskModal={setShowTaskModal} onDeleteAll={handleDeleteAll} />
          {tasks.length > 0 ? (
            <TasksList
              tasks={tasks}
              onEdit={handleOnEdit}
              onDelete={handleDelete}
              onFav={handleFav}
            />
          ) : (
            <p className="text-center text-3xl">{noTasksFoundText}</p>
          )}
        </div>

        {showTaskModal && (
          <TaskModal
            onSave={handleOnSave}
            taskToUpdate={taskToUpdate}
            onCloseModal={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}
