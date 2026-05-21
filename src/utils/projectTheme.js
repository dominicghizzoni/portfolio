export const getProjectColor = (name) => {
  const map = {
    Sideline: "text-green-400",
    VocalSphere: "text-purple-400",
    DayBeats: "text-pink-400",
    "P2P File Sharing": "text-blue-400",
    "Vertex Cover (NP-Complete)": "text-purple-400",
    PokeTeamer: "text-pink-400",
    "Minesweeper (C++)": "text-orange-400",
  };

  return map[name] || "text-white";
};