export async function fetchAPI(url, cb, body={}) {
    let response = await fetch(`https://aarambh-server-ten.vercel.app${url}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (response.ok) { 
      let data = await response.json();
      cb(data)
    } else {
      // alert("HTTP-Error: " + response.status);
    }
}