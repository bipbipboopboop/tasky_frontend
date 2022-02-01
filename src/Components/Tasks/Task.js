import * as React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
// import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskAccordion(props) {
  function handleDelete() {
    props.deleteItem(props.item);
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div className="d-flex flex-inline justify-content-between">
            <div className="px-2 text-left">
              <p>{props.item.title}</p>
            </div>
            <div className="px-2 text-right">
              <small>
                <span
                  className="p-1"
                  style={{
                    backgroundColor: "#03fc98",
                    borderRadius: "0.5rem",
                    lineHeight: "100%",
                  }}
                >
                  {props.item.tag}
                </span>
              </small>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="d-flex flex-column">
            <div>
              <Link
                to={`/tasks/${props.item.id}`}
                className="btn btn-secondary m-2"
              >
                View
              </Link>
              {props.item.is_completed ? (
                <button className="btn btn-primary m-2" onClick={handleDelete}>
                  Hide
                </button>
              ) : (
                <button className="btn btn-primary m-2" onClick={handleDelete}>
                  Delete
                </button>
              )}
            </div>
            {props.item.description}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
