/**
 * Created by Administrator on 2016/11/17.
 */
import request from  'superagent';

const host = 'http://101.200.129.112:9527/';
const GET_FILE = host + 'file/get/';

export function getFileLisr(path,successCB,errorCB) {
    request
        .get(GET_FILE)
        .query({
            path:path
        })
        .end(function (err,res) {
            if(err){return errorCB(err)}
            else if (res){return successCB(res.body)}
        })
}