const fs = require('fs');
const path = require('path');
const logs = path.join(process.cwd(), 'Logs');

const createLogFiles = () => {
    if (!fs.existsSync(logs)) {
        fs.mkdirSync(logs);
        console.log(`Created: ${logs}`);
    }
    process.chdir(logs);

    for (let i = 0; i < 10; i++) {
        const logFileName = `log${i}.txt`;
        fs.writeFileSync(logFileName, `Log file #: ${i}`);
        console.log(`${logFileName}`);
    }
};

createLogFiles();