import React from 'react';

const Footer = () => {
  return (
    <div className="footerBar">
      <h1>
        <p>Copyright © 2018 by 4Horsemen LTD.
All rights reserved. This site or any portion thereof
may not be reproduced or used in any manner whatsoever
without the express written permission of the creators
except for the use of brief quotations in an online review.</p>
        <br/>
        <p>Follow us on Social Media</p>
        <ul className="socialIcons">
          <li><a className="facebook" href="https://www.facebook.com/">Fa</a></li>
          <li><a className="twitter" href="https://twitter.com/Twitter?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Tw</a></li>
          <li><a className="instagram" href="https://www.instagram.com/?hl=en">In</a></li>
          <li><a className="linkedIn" href="https://uk.linkedin.com/">Li</a></li>
        </ul>
      </h1>
    </div>
  );
};

export default Footer;
