// MAKO — runtime backend URL. The Hostinger deploy uses this file to point
// the compiled site at the production API (Render/Railway). In the Emergent
// preview, leave API_URL empty so the compiled bundle uses same-origin ("/api/*")
// which the ingress routes to the FastAPI backend on port 8001.
window.MAKO_CONFIG = {
  API_URL: "https:mako-backend.onrender.com"
};
