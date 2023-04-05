import { useEffect, useState } from "react"
import { getTTNInfo } from "./api/ttn.api"
import { TTN } from "./types/ttn.type";

function App() {
  useEffect(() => {
    const fetchTTN = async (ttnNumber: number) => {
      const data: TTN | undefined = await getTTNInfo(ttnNumber);

      console.log(data);
    };

    fetchTTN(20450493068613);
  }, []);

  return <h1>Hello world!</h1>
}

export default App
