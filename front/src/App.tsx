import "./App.css";
import { useEffect, useState } from "react";
import Theme from "./theme";
import { ZkConnect, ZkConnectResponse } from "@sismo-core/zk-connect-client";
import axios from "axios";
import { DataRequest } from "@sismo-core/zk-connect-client";


// The `request` function sends your user to the Sismo vault app to generate the proof.


const zkConnect = new ZkConnect({
  appId: "0x55c80a16f20a1c1083860d0e83f1a90b",
});


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [vaultId, setVaultId] = useState();

  useEffect(() => {
    const zkConnectResponse = zkConnect.getResponse();
    if(zkConnectResponse) {
      setIsLoading(true);
      axios.post('http://localhost:8080/auth', { zkConnectResponse })
        .then(res => {
          setIsLoading(false);
          console.log(res.data)
          setVaultId(res.data.vaultId)
        })
        .catch(err => {
          console.log(err.response.data.status);
          setIsLoading(false);
        });
    }
  }, []); 

  function onButtonClick() {
    zkConnect.request();
  }

  return (
    <Theme>
      <div className="container">
        <button className="zk-connect-button"
          onClick={onButtonClick}
        >
          zkConnect
        </button>
      </div>
      <div className="vault-id">
        { isLoading && (
          <>
          Loading
          </>
        )}
        { !isLoading && vaultId && (
          <>
          {vaultId}
          </>
        )}
      </div>
    </Theme>
  );
}


export default App;