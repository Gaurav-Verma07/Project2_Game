import classes from "../../Styles/styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.text}>
        <p>
          A simple Card game by <span>GAURAV VERMA</span>
        </p>
        <p>Made with React.js</p>
        <p>
          It's an open source project so feel free to contribute... Let me know
          if you'd like to add some cool features to make this more
          user-friendly.
        </p>
      </div>
      <ul>
        <li>
          <a href="https://github.com/lucky-web-dev">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gaurav-verma-933a48198/">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="mailto: cosmosian07@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
