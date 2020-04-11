/**
 * @title
 *
 *
//import
import useChange from 'components/hooks/useChange'

//hooks
const {changes, setChanges, onChange} = useChange(update, {onChange: -1})

//update
function update(mode) {
  switch (true) {
    case mode.onChange !== undefined:
      console.log(JSON.stringify(changes))
      break
  }
}

//jsx
<input placeholder="TEST" name="test1" onChange={onChange} />
<input name="part" data-type="number" type="radio" value="false" onChange={onChange} />
<input name="part" data-type="boolean" type="radio" value="true" onChange={onChange} />
<input type="checkbox" data-type="array" name="age" value={[10, 11, 12, 13, 14]} onChange={onChange} /> 10대
 */

import {useCallback, useEffect, useState} from 'react'
//
const useChange = (callback, defaultValue) => {
  //---------------------------------------------------------------------
  const [changes, setChanges] = useState({...defaultValue})
  //---------------------------------------------------------------------
  const onChange = useCallback(event => {
    if (event === undefined) {
      return
    }
    event.persist()
    let _val = event.target.type === 'checkbox' && event.target.value === 'on' ? event.target.checked : event.target.value
    /**
     * @example data-type에 맞춰사 강제 형변환을 할수있다.
     */
    if (event.target.dataset.type !== undefined && event.target.dataset.type !== '') {
      if (event.target.dataset.type.indexOf('number') !== -1) _val = parseInt(_val)
      if (event.target.dataset.type.indexOf('boolean') !== -1) _val = _val === 'true' ? true : false
      if (event.target.dataset.type.indexOf('checked') !== -1) _val = event.target.checked
      //
      if (event.target.dataset.type.indexOf('array') !== -1) {
        const _ary = changes[event.target.name]
        switch (event.target.checked) {
          case true: //--------------------------------------------checked
            _val = _ary === undefined || _ary === null ? [_val] : _ary.concat(_val)
            break
          case false: //-------------------------------------------unchecked
            if (_ary === undefined || _ary === null) return
            _val = _ary.filter(ele => ele !== _val)
            break
        }
      }
    }
    //예외처리
    if (_val === 'null') _val = null
    setChanges(changes => ({...changes, [event.target.name]: _val, ['last_changes']: event.target.name}))
  })
  //---------------------------------------------------------------------
  useEffect(() => {
    if (callback !== undefined && typeof callback === 'function') callback(changes)
  }, [changes])
  return {onChange, setChanges, changes}
}
export default useChange
