import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState, useEffect } from "react";
import Slider from "./Slider";
import { FaSignOutAlt } from "react-icons/fa";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

// Add your Client ID here ⬇️
const clientId = "af4500d8-da40-46cd-974d-48c96cacff27";

export default function AIAssist() {
  const [client, setClient] = useState(null);

  useEffect(() => {
    try {
      const initializedClient = getClient({ clientId });
      setClient(initializedClient);
    } catch (error) {
      console.error("Failed to initialize Botpress client", error);
    }
  }, []);

  return (
    <div className="justify-around flex">
      <Slider />
      <div style={{ width: "70vw", height: "90vh" }} className="mt-10">
        <style>{style}</style>
        {client && (
          <WebchatProvider theme={theme} client={client}>
            
            <Webchat />
          </WebchatProvider>
        )}
      </div>
    </div>
  );
}
