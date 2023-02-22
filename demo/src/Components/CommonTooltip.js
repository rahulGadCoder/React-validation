import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const CommonTooltip = (props) => {
  const placement = "bottom";
  return (
    <>
      <OverlayTrigger
        placement={placement}
        overlay={
          <Tooltip id={`tooltip-${placement}`}>{props.title}</Tooltip>}>
          <i className="fa fa-question" aria-hidden="true"></i>
      </OverlayTrigger>
    </>
  );
};

export default CommonTooltip;
