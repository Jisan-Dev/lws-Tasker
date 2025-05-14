import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TasksList from "./TasksList";

export default function TaskBoard() {
  return (
    // <!-- Begin Table -->
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        <SearchTask />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TasksList />
        </div>
      </div>
    </section>
    // End Table
  );
}
