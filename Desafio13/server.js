const os = require('os');
const cluster = require('cluster')
const minimist = require('minimist');
const app = require('./app')

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "debug";
logger.debug("Some debug messages");

const args = minimist(process.argv.slice(2));
const numCPUs = os.cpus().length
const PORT = args.port || 8080
const MODE = args.mode || 'FORK'


if (MODE === 'CLUSTER') {
    if (cluster.isPrimary()) {
        console.log(`Number of CPUs is ${numCPUs}`)
        console.log(`Master ${process.pid} is online`)

        for (let i = 0; i < numCPUs; i++) {
            cluster.fork()
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
            console.log('Starting a new worker');
            cluster.fork();
        })
    }
}

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
// console.log(MODE)
