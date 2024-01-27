export const getKey = async (data) => {
  try {
    return await fetch("/api/getToken", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
  } catch (error) {
    return error;
  }
};
