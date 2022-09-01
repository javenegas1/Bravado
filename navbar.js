module.exports = [
    generalRoutes=[
        { href: "/bravado/", title: "Home" },
        { href: "/bravado/general", title: "General" },
        { href: "/bravado/tech", title: "Tech" },
        { href: "/bravado/finance", title: "Finance" },
        { href: "/bravado/register", title: "Register" },
        { href: "/bravado/login", title: "Login" },
    ],
    
    userRoutes = [
        { href: "/bravado/", title: "Home" },
        { href: "/bravado/newSubmission", title: "Post" },
        { href: "/bravado/general", title: "General" },
        { href: "/bravado/tech", title: "Tech" },
        { href: "/bravado/finance", title: "Finance" },
        { href: "/bravado/logout", title: "Logout" },
    ]
]

const generalRoutes = [
    { href: "/bravado/", title: "Home" },
    { href: "/bravado/general", title: "General" },
    { href: "/bravado/tech", title: "Tech" },
    { href: "/bravado/finance", title: "Finance" },
    { href: "/bravado/register", title: "Register" },
    { href: "/bravado/login", title: "Login" },
];

const userRoutes = [
    { href: "/bravado/", title: "Home" },
    { href: "/bravado/newSubmission", title: "Post" },
    { href: "/bravado/general", title: "General" },
    { href: "/bravado/tech", title: "Tech" },
    { href: "/bravado/finance", title: "Finance" },
    { href: "/bravado/logout", title: "Logout" },
];

// let navbar = function navbar(req, res, next) {
//     if (!req.session.thisUser) {
//         routes = generalRoutes;
//     } else {
//         routes = userRoutes;
//     }
//     next();
// };

module.exports = navbar