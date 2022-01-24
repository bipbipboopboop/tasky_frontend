import * as React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function TaskAccordion(props) {
  function handleDelete() {
    props.deleteItem(props.item);
  }
  function handleComplete() {
    props.completeItem(props.item);
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {props.item.title} {props.item.tag}
        </AccordionSummary>
        <AccordionDetails>
          <div className="d-flex flex-column">
            <div>
              <Link
                to={`/tasks/${props.item.id}`}
                className="btn btn-secondary m-2"
              >
                Edit
              </Link>
              <button className="btn btn-success m-2" onClick={handleComplete}>
                Done
              </button>
              <button className="btn btn-primary m-2" onClick={handleDelete}>
                Delete
              </button>
            </div>
            {props.item.description}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
