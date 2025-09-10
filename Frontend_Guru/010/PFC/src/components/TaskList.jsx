const TaskRender = ({ task, isDone }) => {
  console.time(`Початок з React: ${task}`);
  const el = isDone ? <li>{task} ✅</li> : <li>{task} ❌</li>;
  console.timeEnd(`Початок з React: ${task}`);
  return el;
};

export default function TaskList() {
  return (
    <section>
      <h2>First task(Pure Components)</h2>
      <ul>
        <TaskRender task="Зробити домашку по реакт" isDone={true} />
        <TaskRender task="Вивчити новий матеріал" isDone={true} />
        <TaskRender task="туда - сюда міліонер" isDone={false} />
      </ul>
    </section>
  );
}
