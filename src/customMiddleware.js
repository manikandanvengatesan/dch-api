const rp = require('request-promise');

module.exports = customMiddleware = async (req, res, next) => {
    const keycloakHost = "bouncer.stixcloudtest.com";
    const realmName = "eTicketService";
    const options = {
        method: 'GET',
        url: `https://${keycloakHost}/auth/realms/${realmName}/protocol/openid-connect/userinfo`,
        headers: {
            // add the token you received to the userinfo request, sent to keycloak
            Authorization: req.feathers.headers.authorization,
        },
    };
    await rp(options)
        .then(function (users) {
            console.log(users, "user")
            return next();
        })
        .catch(function (err) {
            res.status(500).send({ error: `You're not allowed to perform this action!` });
        });
}