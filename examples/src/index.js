import {copyFolder} from '../../lib/Unit.js'

console.log(copyFolder);

copyFolder('../../../../原型12-14-2','../../../../xxx').then(()=>{
    console.log('success');
})