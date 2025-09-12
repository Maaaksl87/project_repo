function OutfitSelector({ season }) {
  const seasons = {
    літо: "шорти, футболка, кепка",
    осінь: "штани, кофта/куртка, кепка",
    зима: "теплі штани, тепла куртка, шапка",
    весна: "шорти, легенька кофтинка, кепка",
  };

  const clothes = seasons[season];

  return (
    <div>
      {clothes && (
        <p>
          <strong>{season}</strong>: {clothes}
        </p>
      )}
    </div>
  );
}

export default OutfitSelector;
