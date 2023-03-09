import "./App.css";
import { useEffect, useState } from "react";
import Theme from "./theme";
import { ZkConnect, ZkConnectResponse } from "@sismo-core/zk-connect-client";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [vaultId, setVaultId] = useState();

  useEffect(() => {
    // const zkConnectResponse = zkConnect.getResponse();
    // if(zkConnectResponse) {
    //   setIsLoading(true);
    //   axios.post('http://localhost:8080/auth', {  })
    //     .then(res => {
    //       setIsLoading(false);
    //       console.log(res.data)
    //       setVaultId(res.data.vaultId)
    //     })
    //     .catch(err => {
    //       console.log(err.response.data.status);
    //       setIsLoading(false);
    //     });
    // }
  }, []); 

  function onButtonClick() {
    // zkConnect.request();
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
