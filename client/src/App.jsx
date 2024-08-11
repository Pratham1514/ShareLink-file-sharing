import logo from "../public/icons8-file-share-96.png";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="md:text-5xl text-2xl mt-10 text flex md:gap-5 gap-2 items-center">
          <img src={logo} alt="logo" className="md:w-16 w-10" />
          ShareLink
        </div>

        <div className="flex flex-col gap-5 items-center mt-10 md:w-[700px] w-[280px] md:h-[300px] h-[200px] bg-teal-500/30 rounded-[30px] text-teal-950">
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
