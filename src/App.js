import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setLoading(!loading)
    }, 2000)
  }, [])
  if (loading) {
    return (
      <>
        <Flex className="loading--section" alignItems={"center"} justifyContent={"center"} w={"100%"} h={"100vh"}>
          <div class="macbook">
            <div class="inner">
              <div class="screen">
                <div class="face-one">
                  <div class="camera"></div>
                  <div class="display">
                    <div class="shade"></div>
                  </div>
                  <span>MacBook Air</span>
                </div>
                <title>Layer 1</title>
              </div>
              <div class="macbody">
                <div class="face-one">
                  <div class="touchpad">
                  </div>
                  <div class="keyboard">
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key space"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                  </div>
                </div>
                <div class="pad one"></div>
                <div class="pad two"></div>
                <div class="pad three"></div>
                <div class="pad four"></div>
              </div>
            </div>
            <div class="shadow"></div>
          </div>

        </Flex>

      </>
    )
  }
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
