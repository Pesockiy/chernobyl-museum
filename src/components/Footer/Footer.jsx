import React, {forwardRef} from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="footer">
      <div className="container"></div>
    </footer>
  );
});

export default Footer;
