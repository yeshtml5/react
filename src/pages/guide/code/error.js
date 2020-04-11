import React from 'react'

export default function index() {
    try{
        const even = parseInt(prompt('짝수를 입력하세요'));
        
        throw new Error('이것은 문제')
      //  console.log(test1)
        
    }catch(e){
        console.log(e)
    }
    return (
        <div>
            <h1>메인</h1>
        </div>
    )
}
