import type { Metadata } from "next";
import StartProjectClient from "./StartProjectClient";

export const metadata: Metadata = {
  title: "Start a Project | Arkive Labs",
  description:
    "Tell Arkive Labs what you are building, what is getting in the way and what needs to move next.",
};

export default function StartProjectPage() {
  return <StartProjectClient />;
}
