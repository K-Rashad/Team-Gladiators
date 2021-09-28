

export const APIService = {
  makeWithdraw,
  loginUser,
};


function loginUser(data) {
  const requestOptions = {
    method: "PATCH",
    headers: {
           "Content-type": "application/json",
          },
    body: JSON.stringify(data)
      
        
    
    
  };
  return fetch(
    "http://localhost:5000/login",
    requestOptions
  ).then(handleResponse);
}






function makeWithdraw(data) {
  const requestOptions = {
    method: "PATCH",
    headers: {
           "Content-type": "application/json",
          },
    body: JSON.stringify(data)
      
        
    
    
  };
  return fetch(
    "http://localhost:5000/withdraw",
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
 console.log(response);
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    // if (!response.ok) {
    //   const error =
    //     "Oops! Something went wrong there, Please try again." ||
    //     (data && data.message) ||
    //     response.status;
    //   return Promise.reject(new Error(error));
    // }
    return data;
  });
}
