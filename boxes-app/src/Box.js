import React from "react";

function Box(props) {

  const handleSubmit = (e) => {
    const { id } = e.target;
    props.removeBox(id)
  }

	return (
		<>
			<div
				id={props.id}
				style={{
					height: `${props.height}px`,
					width: `${props.width}px`,
					backgroundColor: props.color,
				}}>
				Box
      </div>
      <button
        id={props.id}
        onClick={handleSubmit}
      >X</button>
		</>
	);
}

export default Box;
