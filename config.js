// Paste your Apps Script Web app URL here (Deploy → Manage deployments → Web app URL, ends in /exec).
var API_URL = 'https://script.google.com/macros/s/AKfycbxLrYE3aqwqfaKrWDk8c1ImahzeTs5E1lCGT2HVAGfZssupdjjlHS5yOCXhEBNHjKgn-A/exec';

// Calls the Apps Script backend. No Google cookies are sent, so the number of
// Google accounts signed in on the phone doesn't matter.
function api(payload) {
  return fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' }, // avoids a CORS preflight
    body: JSON.stringify(payload),
    credentials: 'omit',
    redirect: 'follow'
  }).then(function (r) {
    if (!r.ok) throw new Error('Server error ' + r.status);
    return r.json();
  });
}
