import React from "react";

const TaskItem = React.memo(({ task, isDone }) => {
  console.time(`Початок з React.memo: ${task}`);
  const element = isDone ? <li>{task} ☑️</li> : <li>{task} 📛</li>;
  console.timeEnd(`Початок з React.memo: ${task}`);
  return element;
});

export default function ReactMemoList() {
  return (
    <section>
      <h2>Використовуємо React.memo</h2>
      <ul>
        <TaskItem task="ще завдання?" isDone={true} />
        <TaskItem task="розділити великий проект на менші" isDone={true} />
        <TaskItem task="туда - сюда міліонер(2)" isDone={false} />
      </ul>
    </section>
  );
}
