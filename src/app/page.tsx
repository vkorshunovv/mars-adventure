"use client";

import DeepSpaceScene from "@/components/DeepSpaceScene";
import MarsScene from "@/components/MarsScene";
import { useState } from "react";

export default function Home() {
  const [isMarsJourneyStarted, setMarsJourneyStarted] = useState(false);

  return (
    <div>
      {!isMarsJourneyStarted ? (
        <DeepSpaceScene onClick={() => setMarsJourneyStarted(true)} />
      ) : (
        <MarsScene />
      )}
    </div>
  );
}
