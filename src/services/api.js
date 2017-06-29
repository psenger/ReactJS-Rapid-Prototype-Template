const API_ROOT = `${process.env.API_URL || '/api/v1'}`;

function callApi (endpoint, params) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  // @todo: PAS We have two problems here.
  //        1. fetch according to a friend of mine does not support timeout and can we cancel it.
  //        2. this pattern needs help with paging.
  return fetch(fullUrl, params)
            .then((response) => {
              if (response.ok) { // a boolean stating whether the response was successful (status in the range 200-299) or not.
                return response.json();
              }
              let message = 'Server Error';

              try {
                message = response.statusText;
              } catch (e) {
                /* eslint-disable no-console */
                console.log(e);
                /* eslint-enable no-console */
              }
              let status = 500;

              try {
                status = response.status;
              } catch (e) {
                /* eslint-disable no-console */
                console.log(e);
                /* eslint-enable no-console */
              }
              let e = new Error(message);

              e.status = status;
              throw e;
            });

}

export const fetchProfiles = () => callApi('/profiles/*', null);
export const fetchProfile = (id) => callApi(`/profiles/${id}`, null);
/**
 * Fetch All the buttons and bars from the server. No parameters and no Paging.
 *
 * @function
 */
export const fetchButtonBars = () => callApi('/buttons/', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
