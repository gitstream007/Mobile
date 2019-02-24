import ConstantsAPI from "../ConstantsAPI";

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': ''
};

class APIService{
    static  FetchFunction() {
        console.log('ok 1');
   return fetch(ConstantsAPI.URL_TEST)
       .then((response) =>
           {
               console.log(response);
               if(response.status === 200)
               {
                   console.log('promise ok');
                   return Promise.resolve(response.json())
               }
               else
               {
                   console.log('promise PAS ok');
                   return Promise.reject(response.json())
               }
           }
       )
    }
}

export default APIService;

/*

        static  FetchFunction(username, password) {
        return fetch(ConstantsAPI.URL, {method: 'POST', headers: headers, body: JSON.stringify({
                username: username,
                password: password
            })} )
            .then((response) =>
                {
                    console.log(response._bodyText);

                    if (response._bodyText.status == 'SUCCESS') {
                        // Save Token for future use
                    } else {
                        // response._bodyText.message
                    }
                }
            ).catch((err) => {
                console.log(err);
            });

*/
