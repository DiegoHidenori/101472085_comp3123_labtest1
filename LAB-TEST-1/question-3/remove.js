const fs = require('fs');
const path = require('path');
const logs = path.join(process.cwd(), 'Logs');

const removeLogFiles = () => {
    if (fs.existsSync(logs)) {
        const files = fs.readdirSync(logs);
        
        files.forEach(file => {
            // I chose the same output as shown in the document.
            console.log(`delete files...${file}`);
            fs.unlinkSync(path.join(logs, file));
        });

        fs.rmdirSync(logs);
        console.log(`Removed: ${logs}`);
    }
    else {
        console.log(`Not found: ${logs}`);
    }
};

removeLogFiles();