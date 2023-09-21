const BASE_URL = "http://192.168.1.5:7080/api/v1";

const getRequest = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need here
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`API GET request failed: ${error.message}`);
  }
};

const postRequest = async (endpoint, data) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need here
      },
    };
    if (data != null) {
      requestOptions.body = JSON.stringify(data);
    }
    const url = `${BASE_URL}/${endpoint}`;
    console.log(url);
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`API POST request failed: ${error.message}`);
  }
};

const putRequest = async (endpoint, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need here
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`API PUT request failed: ${error.message}`);
  }
};

const deleteRequest = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need here
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`API DELETE request failed: ${error.message}`);
  }
};

export { getRequest, postRequest, putRequest, deleteRequest };
