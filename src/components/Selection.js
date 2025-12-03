
import React, { useState } from "react";

const Selection = ({ applyColor }) => {
const [style, setStyle] = useState({});

return (
<div
className="fix-box"
style={style}
onClick={() => applyColor(setStyle)}
>
Selection </div>
);
};

export default Selection;
