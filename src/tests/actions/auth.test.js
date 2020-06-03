import {login, logout} from "../../actions/auth";

test('should generate login action obj', () => {
    const uid = 'aiueo';
    const action = login(uid);
    expect(action).toEqual({
        type: "LOGIN",
        uid: uid
    });
});

test('should generate logout action obj', () => {
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT"
    });

});