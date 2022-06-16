import { useState } from "react";
import { Oefening } from "../models/Oefening";
import OefeningView from "./OefeningView";

interface CategorieViewProps {
	oefeningenLijst: Oefening[];
	onback: () => void;
}

const CategorieView = (props: CategorieViewProps) => {
	const [currrentOefening, changeCurrentOefening] = useState<JSX.Element | undefined>();

	const onBack = () => {
		changeCurrentOefening(undefined);
	};

	const clickOefening = (oefening: Oefening) => {
		changeCurrentOefening(<OefeningView oefening={oefening} onback={onBack} />);
	};

	return (
		<div>
			{currrentOefening === undefined ? (
				<>
					<div className="backContainer">
						<button onClick={props.onback}>Back</button>
					</div>
					<div className="homePageContainer">
						{props.oefeningenLijst.map((item) => (
							<div onClick={() => clickOefening(item)}>{item.titel}</div>
						))}
					</div>
				</>
			) : (
				currrentOefening
			)}
		</div>
	);
};

export default CategorieView;
