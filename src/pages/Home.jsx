import React, { useEffect } from 'react';
import Header from '../components/molecules/Header.jsx';
import CodeEditor from '../components/atoms/CodeEditor.jsx';
import { useGlobalStore } from '../store/useGlobalStore.js';
import * as jose from 'node-jose';

const Home = () => {
  const { jwtState, setJwtState } = useGlobalStore();

  const handleEncodedChange = (val) => {
    setJwtState({ encodedJwt: val });
  };

  const handleHeaderChange = (val) => {
    setJwtState({ decodedHeader: val });
  };

  const handlePayloadChange = (val) => {
    setJwtState({ decodedPayload: val });
  };

  return (
    <div className='container' id='maincontainer'>
      <Header />
      <div id="mainalert" className="alert alert-warning fade" role="alert" style={{ display: 'none' }}>
        <h4 className="alert-heading">Warning!</h4>
        <p>A message here</p>
      </div>

      <div className='controls' id='controls'>
        <div className='left-col'>
          <div>
            <span>Variant:</span>
            <select
              id='sel-variant'
              className='form-control form-control-sm form-select'
              value={jwtState.variant}
              onChange={(e) => setJwtState({ variant: e.target.value })}
            >
              <option value='signed'>signed</option>
              <option value='encrypted'>encrypted</option>
            </select>
          </div>
        </div>

        <div className='right-col'>
          <div className='signed-options' style={{ display: jwtState.variant === 'signed' ? 'block' : 'none' }}>
            <div>
              <span>Alg:</span>
              <select
                id='sel-alg-signed'
                className='form-control form-control-sm form-select'
                value={jwtState.algSigned}
                onChange={(e) => setJwtState({ algSigned: e.target.value })}
              >
                <option value='RS256'>RS256</option>
                <option value='RS384'>RS384</option>
                <option value='RS512'>RS512</option>
                <option value='PS256'>PS256</option>
                <option value='PS384'>PS384</option>
                <option value='PS512'>PS512</option>
                <option value='HS256'>HS256</option>
                <option value='HS384'>HS384</option>
                <option value='HS512'>HS512</option>
                <option value='ES256'>ES256</option>
                <option value='ES384'>ES384</option>
                <option value='ES512'>ES512</option>
              </select>
            </div>
          </div>
          <div className='encrypted-options' style={{ display: jwtState.variant === 'encrypted' ? 'block' : 'none' }}>
            <div>
              <span>Key Alg:</span>
              <select
                id='sel-alg-encrypted'
                className='form-control form-control-sm form-select'
                value={jwtState.algEncrypted}
                onChange={(e) => setJwtState({ algEncrypted: e.target.value })}
              >
                <option value='RSA-OAEP'>RSA-OAEP</option>
                <option value='RSA-OAEP-256'>RSA-OAEP-256</option>
                <option value='dir'>dir</option>
                <option value='ECDH-ES'>ECDH-ES</option>
                <option value='ECDH-ES+A128KW'>ECDH-ES+A128KW</option>
                <option value='ECDH-ES+A192KW'>ECDH-ES+A192KW</option>
                <option value='ECDH-ES+A256KW'>ECDH-ES+A256KW</option>
                <option value='PBES2-HS256+A128KW'>PBES2-HS256+A128KW</option>
                <option value='PBES2-HS384+A192KW'>PBES2-HS384+A192KW</option>
                <option value='PBES2-HS512+A256KW'>PBES2-HS512+A256KW</option>
              </select>
            </div>
            <div>
              <span>Content Enc:</span>
              <select
                id='sel-enc'
                className='form-control form-control-sm form-select'
                value={jwtState.enc}
                onChange={(e) => setJwtState({ enc: e.target.value })}
              >
                <option value='A128GCM'>A128GCM</option>
                <option value='A256GCM'>A256GCM</option>
                <option value='A128CBC-HS256'>A128CBC-HS256</option>
                <option value='A192CBC-HS384'>A192CBC-HS384</option>
                <option value='A256CBC-HS512'>A256CBC-HS512</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className='main'>
        <div className='left-col'>
          <p>Encoded JWT <span className='length'></span>
            <button type="button" className="btn btn-outline-secondary btn-md btn-copy">
              <span className="bi bi-clipboard"></span>
            </button>
          </p>
          <CodeEditor
            value={jwtState.encodedJwt}
            mode="encodedjwt"
            onChange={handleEncodedChange}
          />
        </div>

        <div className='center-col action-buttons'>
          <button type="button" className="btn btn-outline-secondary btn-md btn-decode">
            <span className="bi bi-arrow-right"></span>
          </button>
          <button type="button" className="btn btn-outline-secondary btn-md btn-encode">
            <span className="bi bi-arrow-left"></span>
          </button>
          <button type="button" className="btn btn-outline-secondary btn-md btn-verify">
            <span className="bi bi-check2-circle"></span>
          </button>
        </div>

        <div className='right-col'>
          <p>Header <span className='length'></span>
            <button type="button" className="btn btn-outline-secondary btn-md btn-copy">
              <span className="bi bi-clipboard"></span>
            </button>
          </p>
          <CodeEditor
            value={jwtState.decodedHeader}
            mode="javascript"
            onChange={handleHeaderChange}
          />

          <p>Payload <span className='length'></span>
            <button type="button" className="btn btn-outline-secondary btn-md btn-copy">
              <span className="bi bi-clipboard"></span>
            </button>
          </p>
          <CodeEditor
            value={jwtState.decodedPayload}
            mode="javascript"
            onChange={handlePayloadChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
