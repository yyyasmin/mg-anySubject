import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NameForm from "./components/NameForm";
import RoomsList from "./components/RoomsList";
import Game from "./components/Game";
import { initRoomsFunc } from "./helpers/init";


function App() {
  const [userName, setUserName] = useState("");
  const [roomsInitialData, setRoomsInitialData] = useState(null);
  const [dataIsSet, setDataIsSet] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const initRoomsObj = await initRoomsFunc();
        setRoomsInitialData(initRoomsObj);
      } catch (error) {
        console.error("Error initializing the app:", error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (roomsInitialData) {
      setDataIsSet(true);
    }
  }, [roomsInitialData]);

  return (
    <Router>
        <Routes>
          {dataIsSet ? (
            <Route
              path="/rooms"
              element={<RoomsList userName={userName} roomsInitialData={roomsInitialData} />}
            />
          ) : null}
          <Route path="/name" element={<NameForm setUserName={setUserName} />} />
          <Route path="/game/:roomId" element={<Game />} />
          <Route path="" element={<NameForm setUserName={setUserName} />} />
        </Routes>
    </Router>
  );
}

export default App;
