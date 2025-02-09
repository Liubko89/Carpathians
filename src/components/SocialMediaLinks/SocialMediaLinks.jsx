import css from "./SocialMediaLinks.module.css";
import icons from "../../assets/icons.svg";
import clsx from "clsx";

const SocialMediaLinks = ({ verticalDirection = false }) => {
  return (
    <ul className={clsx(css.socialLinks, verticalDirection && css.vertical)}>
      <li>
        <a
          className={css.socialLink}
          href="tg://user?id=@Liubomyr_Romanyshyn"
          title="telegram"
          target="blank"
        >
          <svg className={css.socialLinkIcon} width="33" height="33">
            <use href={`${icons}#icon-telegram`}></use>
          </svg>
        </a>
      </li>
      <li>
        <a className={css.socialLink} href="/" title="instagram">
          <svg className={css.socialLinkIcon} width="33" height="33">
            <use href={`${icons}#icon-instagram`}></use>
          </svg>
        </a>
      </li>
      <li>
        <a className={css.socialLink} href="/" title="facebook">
          <svg className={css.socialLinkIcon} width="33" height="33">
            <use href={`${icons}#icon-facebook`}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;
