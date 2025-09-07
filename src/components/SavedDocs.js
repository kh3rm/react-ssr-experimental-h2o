import { useState, useEffect, useRef } from 'react';
import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:8337";

function SavedDocs() {

    return (
      <>
        <div id="docs-container">
            <h1>***db-retrieved clickable saved documents(components) goes here***</h1>
        </div>
      </>
    );
  }

  export default SavedDocs;