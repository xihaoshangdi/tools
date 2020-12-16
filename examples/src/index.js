const {copyFolder} = require('../../lib/Unit')
copyFolder('../../../../原型12-14-2','../../../../xxx').then(()=>{
    console.log('success');
}).catch(e=>{console.log(e);})