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
            
const split = (str,num_split=0) => str.slice(0,num_split) ;


const create_dict =(raw_str='',level_tree=1)=>{
    const str=raw_str.trim();
    const len_str = str.length;
    let dict={};
    if (len_str ==0){ return dict; };
    if (len_str==level_tree){
        dict[split(str,len_str)]=null;
        return dict;
    };
        dict[split(str,len_str-1)]=split(str,len_str);
        console.log(split(str,len_str-1));
        return dict;
}