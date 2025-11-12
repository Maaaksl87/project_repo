function LinkHandler() {
  function handleClick(e) {
    e.preventDefault();
    alert("Посилання натиснуто!");
  }

  return (
    <>
      <div>LinkHandler</div>
      <a href="https://todor.academy/" target="_blank" onClick={handleClick}>
        Натисни на мене
      </a>
    </>
  );
}

export default LinkHandler;
