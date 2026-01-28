function WhatsAppImage({
  size = "60px",
  verticalPosition = "bottom",
  horizontalPosition = "right",
  offset = 30,
  phoneNumber
}) {
  const positionStyle = {
    position: "fixed",
    zIndex: 9999,
  };

  // Vertical
  if (verticalPosition === "top") positionStyle.top = `${offset}px`;
  if (verticalPosition === "bottom") positionStyle.bottom = `${offset}px`;
  if (verticalPosition === "center") {
    positionStyle.top = "50%";
    positionStyle.transform = "translateY(-50%)";
  }

  // Horizontal
  if (horizontalPosition === "left") positionStyle.left = `${offset}px`;
  if (horizontalPosition === "right") positionStyle.right = `${offset}px`;
  if (horizontalPosition === "center") {
    positionStyle.left = "50%";
    positionStyle.transform = "translate(-50%, -50%)";
  }

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={positionStyle}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{
          width: size,
          height: size,
        }}
      />
    </a>
  );
}

export default WhatsAppImage;
