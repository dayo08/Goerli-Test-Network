import { Navabr, Welcome, Footer, Services, Tarnsaction } from "./components";
import "./App.css";
import { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import comingsoon from "./images/images/eth-comingsoon.gif";
function App() {
  const [open, setopen] = useState(true);

  useEffect(() => {
    setopen(true);
  }, []);

  return (
    <>
      <>
        {open && (
          <div
            className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
            id="modal"
          >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div className="inline-block align-center bg-black text-white  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  ​
                  <AiFillCloseCircle
                    className="mx-auto cursor-pointer"
                    onClick={() => setopen(!open)}
                  />
                  <div className=" px-4 pt-5 pb-4 text-lg sm:p-6 sm:pb-4 text-center">
                    <label>
                      In this site you can transact only on Goerli Test Network
                      for testing
                    </label>

                    <br />
                    <br />
                    <img
                      src={comingsoon}
                      alt=""
                      className="w-2/3 mx-auto border border-black "
                    />

                    <label>Ethereum Mainnet Transaction Coming Soon.....</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navabr />
          <Welcome />
        </div>
        <Services />
        <Tarnsaction />
        <Footer />
      </div>
    </>
  );
}

export default App;
