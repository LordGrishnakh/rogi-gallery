import { css } from "@emotion/core";
import ClipLoader from "react-spinners/CircleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const App: React.FC<{ loading: boolean; className: string; }> = (props) => {
  let color = "#ffffff"

  return (
    <div className={props.className}>
      <ClipLoader color={color} loading={props.loading} css={override} size={150} />
    </div>
  );
}

export default App;