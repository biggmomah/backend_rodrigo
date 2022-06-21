import 'dotenv/config'
import os from 'os'
import cluster from 'cluster'
const CPUs = os.cpus().length
import minimist from 'minimist'
const args = minimist(process.argv.slice(2))
import app from './app.js'

const PORT = args.port || 8080
const MODE = args.mode || 'FORK'



if (MODE === 'CLUSTER') {
    if (cluster.isPrimary) {
        console.log(`Number of CPUs is ${CPUs}`);
        console.log(`Master ${process.pid} is online`);

        for (let i = 0; i < CPUs.length; i++) {
            cluster.fork();
        }

        cluster.on('exit', function (worker, code, signal) {
            console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
            console.log('Starting a new worker');
            cluster.fork();
        });

    }
}


app.listen(PORT, () => console.log(`running on port ${PORT}`))
