const { googleConnexion } = require('./googleConnexion');

let userRepository = null;
let auth = null;
let router = null;

beforeEach(function () {
    userRepository = {
        add: jest.fn()
    };
    auth = {
        loginGoogle: jest.fn()
    };
    router = {
        push: jest.fn()
    };
});

const userDataFromFirebase = {
    uid: 'fakeId',
    email: 'sylvain.guehria@gmail.com',
    firstName: 'sylvain',
    lastName: 'guehria'
};

it('if it the first connexion with google, the user is added to the database and the provider is added', async function () {
    auth.loginGoogle.mockResolvedValue({...userDataFromFirebase, isNewUser: true});

    await googleConnexion(userRepository)(auth, router);
    expect(userRepository.add).toHaveBeenCalledWith({...userDataFromFirebase, provider: 'google' });
});

it('if it not he first connection with google, the user is not added to the database', async function () {
    auth.loginGoogle.mockResolvedValue({...userDataFromFirebase, isNewUser: false});

    await googleConnexion(userRepository)(auth, router);
    expect(userRepository.add).toBeCalledTimes(0);
});

it('if the connection succeed, the user is redirect to "/" ', async function () {
    auth.loginGoogle.mockResolvedValue({...userDataFromFirebase});

    await googleConnexion(userRepository)(auth, router);
    expect(router.push).toHaveBeenCalledWith('/');
});


it('if the connection fails, the user is not redirect ', async function () {
    auth.loginGoogle.mockResolvedValue(null);

    await googleConnexion(userRepository)(auth, router);
    expect(router.push).toBeCalledTimes(0);
});