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

const tree= (str='')=>{
    let path=key_path(str.trim()).reverse()
    let current_value=null;
    let current_obj={};
    for (const key_path of path ) {
        current_obj=setNode({},key_path,current_value);
        current_value=current_obj
    }
    return current_obj;
}

// const tree2= (...arr_str)=>{
//     let path=[]
//     arr_str.forEach(str => {
//         let single_path=key_path(str).reverse()
//         path.push(single_path)
//     });
    

//     let current_value=null;
//     let current_obj={};
//     path.forEach(pathKey=>{

//         for (const key_path of pathKey ) {
//             current_obj=setNode({},key_path,current_value);
//             current_value=current_obj
//         }
//     })
//     return current_obj;
// }