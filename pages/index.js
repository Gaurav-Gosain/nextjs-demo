import { Button } from "@mui/material";
import Head from "next/head";
import CustomButton from "../components/CustomButton";
import CustomCard from "../components/CustomCard"

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center">
      <CustomCard />
      <CustomButton title="Hello World!" color="secondary" variant="contained" />
      <CustomButton color="error" variant="outlined" />
    </div>
  );
}
