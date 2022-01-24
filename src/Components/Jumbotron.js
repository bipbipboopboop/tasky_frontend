import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Jumbotron = () => {
  return (
    <section className="home-section--1">
      <div
        className="p-5"
        style={{ backgroundColor: "#f7e7ce", minHeight: "100vh" }}
      >
        <div className="d-flex justify-content-center">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <TypeWriterEffect
                textStyle={{
                  fontSize: "6em",
                }}
                startDelay={100}
                cursorColor="black"
                text="Welcome to Tasky"
                hideCursorAfterText={true}
                typeSpeed={40}
              />
              <TypeWriterEffect
                textStyle={{
                  fontSize: "4em",
                }}
                startDelay={2000}
                cursorColor="black"
                hideCursorAfterText={true}
                text="Manage your tasks with us today!"
                typeSpeed={40}
              />
            </div>
            <div className="pt-4 mt-4">
              <TypeWriterEffect
                textStyle={{
                  fontSize: "3em",
                }}
                startDelay={4000}
                cursorColor="black"
                hideCursorAfterText={true}
                text="Scroll down for a quick tour"
                typeSpeed={30}
              />

              <TypeWriterEffect
                textStyle={{
                  fontSize: "3em",
                }}
                startDelay={5000}
                cursorColor="black"
                hideCursorAfterText={true}
                text="(Or just Sign Up to get started!)"
                typeSpeed={30}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
