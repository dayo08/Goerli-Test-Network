import "./css/openingpage.css";

function Openingpage() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div className="morph_cont">
          <div className="morph_word">Software Engineer</div>
          <div className="morph_word">Front End Developer</div>
          <div className="morph_word">Data Analyst</div>
        </div>

        {/* wave start */}

        <div className="row">
          <div className="wave_anim" style={{ height: 250 }}>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
            <div className="wave wave4"></div>

          </div>
        </div>

        {/* wave end */}
      </div>
    </>
  );
}

export default Openingpage;
