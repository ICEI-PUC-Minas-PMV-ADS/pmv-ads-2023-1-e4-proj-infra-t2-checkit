export default function validateToken() {
    const jwtToken = localStorage.getItem("jwtToken");
    let token = "";

    if (jwtToken != null) {
      const jwtHeaderToken = jwtToken.slice(13, jwtToken.length - 2);
      token = `Bearer ${jwtHeaderToken}`;
    }

    return token;
  }
