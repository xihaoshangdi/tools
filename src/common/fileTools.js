const fs = require('fs/promises')
const path = require('path')
/**
 * @description 覆盖性的Copy文件夹函数
 * @param {String} sourceFolder
 * @param {String} targetFolder
 * @return {Promise}
 */
function copyFolder(sourceFolder, targetFolder) { // 覆盖性Copy
    // 创建目标文件夹
    return fs.mkdir(targetFolder)
        .then(() => { console.log(`${targetFolder} 目标文件夹创建完成`) })
        .catch((error) => console.log(error))
        .then(() => fs.readdir(sourceFolder, { withFileTypes: true }))
        .then((entries) => {
            let fileCount = 0
            let folderCount = 0
            return new Promise(resolve => {
                for (const entry of entries) {
                    const sourcePath = path.join(sourceFolder, entry.name)
                    const targetPath = path.join(targetFolder, entry.name)
                    entry.isDirectory()
                        ? copyFolder(sourcePath, targetPath).then(() => {
                            folderCount++
                            if ((fileCount + folderCount) === entries.length) resolve(true)
                        }).catch((error) => console.log(error))
                        : fs.copyFile(sourcePath, targetPath).then(() => {
                            fileCount++
                            if (fileCount === entries.length) resolve(true)
                        }).catch((error) => console.log(error))
                }
            })
        })
}

module.exports = { copyFolder }
