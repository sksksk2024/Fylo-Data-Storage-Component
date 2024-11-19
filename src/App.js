import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <main className="flex 3xs:flex-col lg:flex-row justify-center items-center gap-8 3xs:max-w-container-xs lg:max-w-container-lg px-32P">
      <Left />
      <Right />
    </main>
  );
}

export default App;
