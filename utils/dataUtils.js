import fs from 'fs';

export function writeJsonFile(fileName, data) {
    const folderPath = './data/output';

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    fs.writeFileSync(`${folderPath}/${fileName}.json`, JSON.stringify(data, null, 2));
    console.log(`Data successfully written to ${fileName}.json`);
}
