import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div style={{ backgroundColor: "#242424", color: "#fff", padding: "2rem" }}>
      <h1>Mon Pokédex</h1>
      <PokemonCard />
    </div>
  );
}

export default App;