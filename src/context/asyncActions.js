const apiUrlList =
  'https://dev.flom.app/api/v2/product/list';

export const getList = async () => {
  let serverStatus = 0;
    return fetch(apiUrlList, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        serverStatus = response.status;
        return response.json();
      })
      .then((data) => {
        if (serverStatus === 200) {
          return data.data.products.slice(0, 6);
        }
        //data error
      })
      .catch((error) => {
        //response error
      });
  };
