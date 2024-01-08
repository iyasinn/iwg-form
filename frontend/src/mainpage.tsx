import React, { useState } from "react";
import "./mainpage.css";
// import "./formcomponents.css";
import LOGO_PATH from "./assets/tmc-logo.jpeg";
import LEARNMORE_PATH from "./assets/help-outline.svg";
import Form from "./components/Form/Form";
import Dialog from "@mui/material/Dialog";
import { TransitionProps } from "@mui/material/transitions";
import { Slide } from "@mui/material";
import CLOSEICON_PATH from "./assets/ic_round-close.svg";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MainPage() {
  // const formRef = useRef<HTMLFormElement>(null);
  // const [complete, onComplete] = useState(false);
  //const [value, onChange] = useState<Value>(new Date());
  const [infoRequested, setinfoRequested] = useState(false);

  const handleInfoRequestedToggle = () => {
    setinfoRequested((prevState) => !prevState);
  };

  return (
    <main id="mainpage">
      <div className="parent">
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 className="form-heading">Report an Incident</h1>
          <button
            onClick={handleInfoRequestedToggle}
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

      {infoRequested ? (
        <Dialog
          open={infoRequested}
          TransitionComponent={Transition}
          onClose={handleInfoRequestedToggle}
          maxWidth="lg" // Set maximum width
          fullWidth={true} // Dialog takes the full width of the screen
          PaperProps={{
            style: {
              minHeight: "80vh", // Minimum height of the dialog
              maxHeight: "90vh", // Maximum height of the dialog
              width: "80%", // Set custom width
              // Add more custom styles if needed
            },
          }}
        >
          <div className="box">
            <h1 className="form-heading" style={{ padding: 10 }}>
              About
            </h1>
            <button
              onClick={handleInfoRequestedToggle}
              style={{
                border: "none",
                background: "none",
                padding: "0",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  flexShrink: 0,
                }}
                src={CLOSEICON_PATH}
                alt="Description"
              />
            </button>
          </div>
          <p className="required bottom-margin" style={{ padding: 10 }}>
            Save time by submitting one form instead of 6+. “Report an Incident”
            is designed to accelerate and simplify how you report islamaphobia
            on campus. By filling out this one form, your report is sent to
            multiple official reporting channels, including University of
            Michigan departments (e.g. ECRT) and CAIR.
          </p>
          <h1 className="form-heading" style={{ padding: 10 }}>
            Where Your Data is Shared
          </h1>
          <p className="required" style={{ paddingRight: 10, paddingLeft: 10 }}>
            We only ask for data that is required by the different reporting
            channels you send to. Here is the data each reporting channel asks
            for:
          </p>
          <h1 className="form-heading" style={{ padding: 10 }}>
            Privacy Statement
          </h1>
          <p
            className="required margin-bottom"
            style={{ paddingRight: 10, paddingLeft: 10, paddingBottom: 30 }}
          >
            Muslim Coalition only retains non-identifiable data from your
            submission (e.g. where your report is sent to, Religion).
          </p>
          <div className="row required" style={{ paddingLeft: 10 }}>
            <small>By Muslim Coalition ™</small>
          </div>
        </Dialog>
      ) : (
        <Form />
      )}
    </main>
  );
}
