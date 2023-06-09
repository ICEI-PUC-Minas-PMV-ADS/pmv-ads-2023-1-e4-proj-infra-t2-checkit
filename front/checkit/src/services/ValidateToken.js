export default function validateToken() {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken != null) {
      const tokenObject = JSON.parse(jwtToken);
      return {
        jwtToken: tokenObject.jwtToken,
        userId: tokenObject.userId
      };
    }

    return {
      jwtToken: "",
      userId: ""
    };
  }
