import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Jumbotron = () => {
  return (
    <section className="home-section--1">
      <div
        className="p-5"
        style={{ backgroundColor: "#f7e7ce", minHeight: "50vh" }}
      >
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              {/* <h1>Welcome to Tasky</h1> */}
              <TypeWriterEffect
                startDelay={100}
                cursorColor="black"
                text="Welcome to Tasky"
                hideCursorAfterText={true}
                typeSpeed={50}
              />
              <TypeWriterEffect
                textStyle={{
                  fontSize: "1em",
                }}
                startDelay={2000}
                cursorColor="black"
                hideCursorAfterText={true}
                text="Build your schedule with us today!"
                typeSpeed={50}
              />
              {/* <Typewriter text={"Build your schedule with us today!"} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ab
          fugit. Blanditiis, cumque! Eos, culpa unde molestias, impedit cum
          tempora ut veritatis explicabo libero exercitationem iusto eaque autem
          ullam inventore!
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
