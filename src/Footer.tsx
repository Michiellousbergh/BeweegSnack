import logoUcll from "./images/logo_ucleuvenlimburg_socialmedia_rgb.png";
import logoUHasselt from "./images/logo_uhasselt.png";
import {HiMail} from "react-icons/hi";

const Footer = () => {
	return (
		<header>
			<div className="footer">
			<a href="https://www.ucll.be/nl">
				<img src={logoUcll} className="logo" alt="logo" />
			</a>
			<a href="https://www.uhasselt.be/nl">
				<img src={logoUHasselt} className="logo" alt="logo" />
			</a>
			</div>

			<div className="mentions">
				<p>created by</p>
				<p>Michiel Lousbergh <a href="mailto:michiellousbergh@student.ucll.be"><HiMail/></a></p>
				<p>Maureen Verwichte <a href="mailto:maureen.verwichte@student.ucll.be"><HiMail/></a></p>
			</div>
		</header>
	);
};

export default Footer;
