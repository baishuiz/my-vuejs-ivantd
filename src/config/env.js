let hostName = '';
const routerMode = 'hash';

if (process.env.NODE_ENV === 'development') {
    hostName = 'http://10.166.3.200:7000';
} else if (process.env.NODE_ENV === 'production') {
    hostName = 'http://10.166.10.26:7000';
}

export { hostName, routerMode }