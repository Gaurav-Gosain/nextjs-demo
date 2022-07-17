import React from 'react'
import { Button } from "@mui/material";

const CustomButton = ({title="Default Value", color, variant}) => {
  return (
    <Button
      className="p-6 my-2 text-3xl rounded-3xl"
      color={color}
      variant={variant}
    >
      {title}
    </Button>
  );
}

export default CustomButton