import React from "react";

export function onRenderBody({ setPostBodyComponents }) {
  setPostBodyComponents([
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "f49eaeaf632e40e6972673a30ef1ed25"}'
    ></script>,
  ]);
}
