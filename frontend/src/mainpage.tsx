import React from "react";
import "./mainpage.css";
// import "./formcomponents.css";
import LOGO_PATH from "./assets/tmc-logo.jpeg";
import LEARNMORE_PATH from "./assets/help-outline.svg";
import Form from "./components/Form/Form";

const MainPage: React.FC = () => {
  // const formRef = useRef<HTMLFormElement>(null);
  // const [complete, onComplete] = useState(false);
  //const [value, onChange] = useState<Value>(new Date());

  return (
    <main id="mainpage">
      <div className="parent">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 className="form-heading">Report an Incident</h1>
          <button
            onClick={() => {
              console.log("user requested help");
            }}
            style={{
              border: "none",
              background: "none",
              padding: "0",
              cursor: "pointer",
            }}
          >
            <img
              style={{
                width: "24px", // Equivalent to w-6
                height: "24px", // Equivalent to h-6
                flexShrink: 0,
              }}
              src={LEARNMORE_PATH}
              alt="Description"
            />
          </button>
        </div>

        <img
          style={{
            maxWidth: "60px",
            maxHeight: "61px",
            height: "auto",
            width: "auto",
            flexShrink: 0,
          }}
          src={LOGO_PATH}
          alt="Description"
        />
      </div>

      <Form />
    </main>
  );
};

export default MainPage;
