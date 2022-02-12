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
        this.path=[];
        this.size = function () {
            return this.count;
        };

        this.set = function (key, value) {
            this.collection[key] = value;
            this.count++;
            this.path.push(key)
        };
        this.setPath = function (arr_path) {
            this.path = arr_path;
        };
    }
}



const key_path=(str)=>{
    let arr = [];
    let mixed_str=str.split('');
    let new_str='';
    for (let value of mixed_str) {
        new_str=new_str+value
        arr.push(new_str)
    }
    return arr;
}


const setNode =(object, key, value)=>{
    let newobj= {...object};
    newobj[key]=value;
    return newobj
}