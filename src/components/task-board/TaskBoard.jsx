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

  const handleSearch = (searchTerm) => {
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks(filteredTasks);
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto relative">
        <SearchTask onSearch={handleSearch} />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions setShowTaskModal={setShowTaskModal} onDeleteAll={handleDeleteAll} />
          <TasksList tasks={tasks} onEdit={handleOnEdit} />
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
