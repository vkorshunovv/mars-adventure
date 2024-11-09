"use client";

import CustomCursor from "@/components/CustomCursor";
import DeepSpaceScene from "@/components/DeepSpaceScene";
import MarsScene from "@/components/MarsScene";
import { useState } from "react";

export default function Home() {
  const [isMarsJourneyStarted, setMarsJourneyStarted] = useState(false);

  return (
    <div>
      <CustomCursor />
      {!isMarsJourneyStarted ? (
        <DeepSpaceScene onClick={() => setMarsJourneyStarted(true)} />
      ) : (
        <MarsScene />
      )}
    </div>
  );
}
