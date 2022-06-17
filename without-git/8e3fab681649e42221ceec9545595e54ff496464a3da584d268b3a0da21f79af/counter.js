import React from "react";
import { connect } from "redux-zero/react";

import actions from "./actions";

const mapToProps = ({ count }) => ({ count });

const s = {
root: { fontFamily: "sans-serif", textAlign: "center" },
btns: { display: "flex", justifyContent: "center" },
btn: { margin: 20 }
};

export default connect(mapToProps, actions)(
({ count, decrement, increment }) => (
<div style={s.root}>
<h1>{count}</h1>
<div style={s.btns}>
<button style={s.btn} onClick={decrement}>
decrement
</button>
<button style={s.btn} onClick={increment}>
increment
</button>
</div>
</div>
)
);