const arr0 ={'t': {'tr': {'tri': {'trie': null}}}};

const arr2 = {'t': {'tr': {'tre': {'tree': null}}}};

const arr3 = {'A': null,
't': {'to': null,
                    'te': { 'tea': null,
                            'ted': null,
                            'ten': null
                        }
                    },
              'i': {'in': {'inn': null}}
            };
            
            const arr4 = {'t': {'tr': {'tru': {'true': null, 'trus': {'trust': null}}}}}

                    
class MapNode {
    constructor() {
        this.collection = {};
        this.count = 0;
        this.size = function () {
            return this.count;
        };

        this.set = function (key, value) {
            this.collection[key] = value;
            this.count++;
        };
    }
}
                    
const split = (str,num_split=0) => str.slice(0,num_split) ;

const reduce_str =(raw_str,level_tree)=>{
    const str=raw_str.trim(); 
    const len_str = str.length;
    let resp=null;
    if (len_str ==level_tree+1){ return resp; };
    resp = split(str,level_tree+1);
    return resp;
}

const str_to_arr=(myStr,level_tree=1)=>{
    let arr =[];
    let iter=myStr.length-1;
    let key = myStr;
    while(iter>=0){
        let value = reduce_str(myStr,iter);
        // console.log(value)
        arr.push(value);
        key= value;
        iter--;
    }
    if (level_tree>1){     
        let max_remove=1;
        while (max_remove<=level_tree-1){
           arr.pop();
           max_remove++;
        }
    }
    return arr;
}


const tree = (str, level=1)=>{
    let arr= str_to_arr(str,level);
    let i=0;
    let myNode = new MapNode();
    while(i<str.length+1-level){
        let myTree_prev = new MapNode();
        if(i==0){
            myTree_prev.set(str,arr[0]);
        }
        else{
            myTree_prev.set(arr[i],myNode.collection);
        }
        myNode=myTree_prev;
        i++;
    }
    return myNode;
}