// Copyright 2023 Datav.io Team
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { Select } from "@chakra-ui/react"
import { ValueCalculationType } from "types/value"
import React from "react"

interface Props {
    value: ValueCalculationType
    onChange: any
}
const ValueCalculation = ({value,onChange}:Props) => {
    return (<>
        <Select value={value} onChange={e => {
            const v = e.currentTarget.value 
            onChange(v)
        }}>
            {
                Object.keys(ValueCalculationType).map(k  => <option key={k} value={ValueCalculationType[k]}>{k}</option>)
            }
        </Select>
    </>)
}

export default ValueCalculation