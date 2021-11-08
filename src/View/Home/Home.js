import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import Button from '../../Component/Button/Button'
import Checkbox from '../../Component/Checkbox/Checkbox'
import CustomTable from '../../Container/CustomTable/CustomTable'
import { request } from '../../Utils/request'
import './Home.scss'
export default function Home() {
  const [getData, setData] = useState('')
  const [isChecked, setchecked] = useState(false)
  const handleError = useErrorHandler()

  useEffect(async () => {
    fetchData()
  }, [])

  const fetchData = async (getPage) => {
    try {
      const result = await axios(`${request}/payments?pagelndex=${getPage}`)
      const response = result.data
      setData(response)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      handleError(error)
    }
  }

  const BtnHAndler = () => {
    const metaData = getData.metaDatal
    fetchData(metaData.nextPageIndex)
  }

  const CheckboxHandler = () => {
    setchecked(!isChecked)
  }

  const data = getData.results
  const filter =
    data && data.filter((character) => character.paymentStatus === 'P')

  return (
    <div className="Home">
      <Checkbox
        checked={isChecked}
        CheckboxHandler={(e) => CheckboxHandler(e)}
      />
      <CustomTable filter={isChecked} info={(isChecked && filter) || data} />
      <Button value="Next" BtnHAndler={() => BtnHAndler()} />
    </div>
  )
}
