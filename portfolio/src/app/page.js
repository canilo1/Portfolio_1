import NavBar from "./components/navbar";
import NavBar2 from "./components/navbar2";

export default function Home() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <NavBar2 />
      </div>
    </div>
  );
}
