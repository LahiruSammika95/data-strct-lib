const array={

    createMultiDimensionNumArray:(rows,columns,startIndex=0,skip=1)=>{
       
            let arr=Array.from({length:rows},()=>{
                startValue=startIndex
                startValue-=skip
                return Array.from({length:columns},()=>{
                    startValue+=skip
                    return startValue;
                    })
            })
                return arr
            },
    createNumArray:(length,startIndex=0,skip=1)=>{
                startIndex-=skip
                let arr=Array.from({length:length},()=>{
                    startIndex+=skip
                    return startIndex;
                    })
                    return arr
                },
    createObjArray:(length,obj={})=>{
               
                    let arr=Array.from({length:length},()=>(obj))
                    return arr
                    },
    createMultiDimensionObjArray:(rows,columns,obj={})=>{
       
                        let arr=Array.from({length:rows},()=>{
                          
                            return Array.from({length:columns},()=>{
                        
                                return obj;
                                })
                        })
                            return arr
                        },
    createMap:(strArr=[])=>{  
            return new Map(strArr.entries());       
     } 
    
    }
    module.exports = array;