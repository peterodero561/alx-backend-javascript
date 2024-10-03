import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstname, lastname, filename) {
  return Promise.allSettled([signUpUser(firstname, lastname), uploadPhoto(filename)])
    .then((results) => {
	    return results.map((result) => {
		    if (result.status === 'fulfilled') {
			    return {
				    status: result.status,
				    value: result.value
			    };
		    } else {
			    return { status: result.status, value: result.reason };
		    }
	    });
    });
}
